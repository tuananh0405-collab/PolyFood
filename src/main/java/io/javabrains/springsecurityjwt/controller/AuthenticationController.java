package io.javabrains.springsecurityjwt.controller;

import io.javabrains.springsecurityjwt.auth.AuthenticationRequest;
import io.javabrains.springsecurityjwt.auth.RegisterRequest;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.model.UserDisplay;
import io.javabrains.springsecurityjwt.repository.UserDisplayRepository;
import io.javabrains.springsecurityjwt.repository.UserRepository;
import io.javabrains.springsecurityjwt.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("http://localhost:3000")

@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserDisplayRepository userDisplayRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) {
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }

    @GetMapping("/getAllUsers")
    List<UserDisplay> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserDisplay> userDisplays = new ArrayList<>();
        for (User user : users) {
            UserDisplay userDisplay = new UserDisplay();
            userDisplay.setUser_name(user.getUser_name());
            userDisplay.setEmail(user.getEmail());
            userDisplay.setMobile_number(user.getMobile_number());

            userDisplays.add(userDisplay);
        }

        return userDisplays;
    }
}
