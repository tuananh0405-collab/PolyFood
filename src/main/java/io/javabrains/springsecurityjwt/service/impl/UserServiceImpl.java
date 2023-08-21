package io.javabrains.springsecurityjwt.service.impl;

import io.javabrains.springsecurityjwt.model.Role;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.repository.RoleRepository;
import io.javabrains.springsecurityjwt.repository.UserRepository;
import io.javabrains.springsecurityjwt.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(new HashSet<>());
        return userRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void addToUser(String username, String rolename) {
        if(!userRepository.findByEmail(username).isPresent()){
            throw new IllegalArgumentException("User with email "+username+" does not exist!");
        }
        Role role = roleRepository.findByName(rolename);
        if(role==null){
            throw new IllegalArgumentException("Role with name "+rolename+" does not exist!");
        }
        User user = userRepository.findByEmail(username).get();
        user.getRoles().add(role);
    }
}
