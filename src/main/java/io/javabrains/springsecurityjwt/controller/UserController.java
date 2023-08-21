package io.javabrains.springsecurityjwt.controller;

import io.javabrains.springsecurityjwt.exception.UserNotFoundException;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user_page")
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable String id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
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
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable String id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been successfully deleted.";
    }
}
