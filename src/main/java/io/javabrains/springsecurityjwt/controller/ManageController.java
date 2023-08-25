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
@RequestMapping("/api/v1/auth/admin")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor

public class ManageController {
    private final AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserDisplayRepository userDisplayRepository;
    @Autowired
    private ProductsRepository productsRepository;





    //---------------- USER ----------------//

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
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/getUserById/{id}")
    User getUserById(@PathVariable Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/updateUserById/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Integer id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUser_name(newUser.getUser_name());
                    user.setEmail(newUser.getEmail());
                    user.setOrders(newUser.getOrders());
                    user.setMobile_number(newUser.getMobile_number());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException((id)));
    }

    @DeleteMapping("/deleteUserById/{id}")
    String deleteUser(@PathVariable Integer id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been successfully deleted.";
    }


    //---------------- PRODUCT ----------------//
    @GetMapping("/getAllProducts")
    List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    @PostMapping("/addProduct")
    Products addProduct(@RequestBody Products newProduct) {
        return productsRepository.save(newProduct);
    }

    @GetMapping("/getProductById/{id}")
    Products getProductById(@PathVariable Integer id) {
        return productsRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @PutMapping("/updateProductById/{id}")
    Products updateProduct(@RequestBody Products newProduct, @PathVariable Integer id) {
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
                }).orElseThrow(() -> new ProductNotFoundException(id));
    }

    @DeleteMapping("/deleteProductById/{id}")
    String deleteProduct(@PathVariable Integer id) {
        if (!productsRepository.existsById(id)) {
            throw new ProductNotFoundException(id);
        }
        productsRepository.deleteById(id);
        return "Product with id " + id + " has been successfully deleted.";
    }


    //---------------- ORDER ----------------//

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @GetMapping("/getAllOrders")
    List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/getOrdersByUserId/{userId}")
    List<Order> getOrdersByUserId(@PathVariable Integer userId) {
        User user = userRepository.getById(userId);
        List<Order> orders = user.getOrders();
        return orders;
    }

    @PostMapping("/addOrdersForUserId/{userId}")
    Order addOrdersForUserId(@RequestBody Order order, @PathVariable Integer userId) {
        Optional<User> userOptional = userRepository.findById(userId);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            order.setUser(user);
            order.setEmail(user.getEmail());
            order.setMobile_number(user.getMobile_number());
            order.setAddress(user.getAddress());
            user.getOrders().add(order);
            return orderRepository.save(order);
        } else {
            throw new IllegalArgumentException("User with ID " + userId + " not found.");
        }
    }

    @PutMapping("/updateOrderById/{orderId}")
    Order updateOrderForUserId(@RequestBody Order updateOrder, @PathVariable Integer orderId) {
        return orderRepository.findById(orderId)
                .map(order -> {
                    order.setOriginal_price(updateOrder.getOriginal_price());
                    order.setActual_price(updateOrder.getActual_price());
                    order.setName(updateOrder.getName());
                    order.setQuantity(updateOrder.getQuantity());
                    return orderRepository.save(order);
                }).orElseThrow(() -> new OrderNotFoundException((orderId)));
    }

    @DeleteMapping("/deleteOrderById/{orderId}")
    String deleteOrderById(@PathVariable Integer orderId) {
        if (!orderRepository.existsById(orderId)) {
            throw new OrderNotFoundException(orderId);
        }
        orderRepository.deleteById(orderId);
        return "Product with id " + orderId + " has been successfully deleted.";
    }




}
