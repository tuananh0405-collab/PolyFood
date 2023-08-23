package io.javabrains.springsecurityjwt.controller;

import io.javabrains.springsecurityjwt.auth.AuthenticationRequest;
import io.javabrains.springsecurityjwt.auth.RegisterRequest;
import io.javabrains.springsecurityjwt.exception.ProductNotFoundException;
import io.javabrains.springsecurityjwt.exception.UserNotFoundException;
import io.javabrains.springsecurityjwt.model.Products;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.model.UserDisplay;
import io.javabrains.springsecurityjwt.repository.ProductsRepository;
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

    @GetMapping("/getAllUsers")
    List<UserDisplay> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserDisplay> userDisplays = new ArrayList<>();
        for (User user : users) {
            UserDisplay userDisplay = new UserDisplay();
            userDisplay.setUser_id(user.getUser_id());
            userDisplay.setUser_name(user.getUser_name());
            userDisplay.setEmail(user.getEmail());
            userDisplay.setMobile_number(user.getMobile_number());

            userDisplays.add(userDisplay);
        }

        return userDisplays;
    }
    @PostMapping("/addUser")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/getUserById/{id}")
    User getUserById(@PathVariable String id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/updateUserById/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable String id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUser_name(newUser.getUser_name());
                    user.setEmail(newUser.getEmail());
//                    user.s(newUser.getAddress());
                    user.setMobile_number(newUser.getMobile_number());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException((id)));
    }
    @DeleteMapping("/deleteUserById/{id}")
    String deleteUser(@PathVariable String id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been successfully deleted.";
    }

    @GetMapping("/getAllProducts")
    List<Products> getAllProducts() {
        return productsRepository.findAll();
    }
    @PostMapping("/addProduct")
    Products addProduct(@RequestBody Products newProduct){
        return productsRepository.save(newProduct);
    }
    @GetMapping("/getProductById/{id}")
    Products getProductById(@PathVariable Integer id){
        return productsRepository.findById(id)
                .orElseThrow(()->new ProductNotFoundException(id));
    }
    @PutMapping("/updateProductById/{id}")
    Products updateProduct(@RequestBody Products newProduct, @PathVariable Integer id){
        return productsRepository.findById(id)
                .map(product -> {
                    product.setProduct_name(newProduct.getProduct_name());
                    product.setProduct_image(newProduct.getProduct_image());
                    product.setCategory(newProduct.getCategory());
                    product.setStock(newProduct.getStock());
                    product.setPrice(newProduct.getPrice());
                    product.setDiscount(newProduct.getDiscount());
                    product.setRating(newProduct.getRating());
                    return productsRepository.save(product);
                }).orElseThrow(()->new ProductNotFoundException(id));
    }
    @DeleteMapping("/deleteProductById/{id}")
    String deleteProduct(@PathVariable Integer id){
        if(!productsRepository.existsById(id)){
            throw new ProductNotFoundException(id);
        }
        productsRepository.deleteById(id);
        return "Product with id "+id+" has been successfully deleted.";
    }
}
