package io.javabrains.springsecurityjwt.controller;

import io.javabrains.springsecurityjwt.auth.AuthenticationRequest;
import io.javabrains.springsecurityjwt.auth.RegisterRequest;
import io.javabrains.springsecurityjwt.exception.OrderNotFoundException;
import io.javabrains.springsecurityjwt.exception.ProductNotFoundException;
import io.javabrains.springsecurityjwt.exception.UserNotFoundException;
import io.javabrains.springsecurityjwt.model.Order;
import io.javabrains.springsecurityjwt.model.Products;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.model.UserDisplay;
import io.javabrains.springsecurityjwt.repository.*;
import io.javabrains.springsecurityjwt.service.AuthenticationService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
//@RequestMapping("/api/v1/auth")
@RequestMapping("/pub")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor

public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserDisplayRepository userDisplayRepository;
    @Autowired
    private ProductsRepository productsRepository;


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) {
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }






}
