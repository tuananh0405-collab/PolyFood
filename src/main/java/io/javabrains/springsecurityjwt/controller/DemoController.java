package io.javabrains.springsecurityjwt.controller;

import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.model.UserDisplay;
import io.javabrains.springsecurityjwt.repository.UserDisplayRepository;
import io.javabrains.springsecurityjwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/demo")
@CrossOrigin("http://localhost:3000")

public class DemoController {


    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserDisplayRepository userDisplayRepository;


    @GetMapping("/admin")
    public ResponseEntity<?> admin() {
        return ResponseEntity.ok("This is Admin Route");
    }

    @GetMapping("/user")
    public ResponseEntity<?> users(){
        return ResponseEntity.ok("This is User Route");
    }

//    List<UserDisplay> getAllUsers() {
//        List<User> users = userRepository.findAll();
//        List<UserDisplay> userDisplays = new ArrayList<>();
//        for (User user : users) {
//            UserDisplay userDisplay = new UserDisplay();
//            userDisplay.setUser_name(user.getUser_name());
//            userDisplay.setEmail(user.getEmail());
//            userDisplay.setMobile_number(user.getMobile_number());
//
//            userDisplays.add(userDisplay);
//        }
//
//        return userDisplays;
//    }

}
