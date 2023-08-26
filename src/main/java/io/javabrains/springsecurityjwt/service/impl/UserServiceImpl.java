package io.javabrains.springsecurityjwt.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import io.javabrains.springsecurityjwt.model.Role;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.repository.RoleRepository;
import io.javabrains.springsecurityjwt.repository.UserRepository;
import io.javabrains.springsecurityjwt.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;

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
        if (!userRepository.findByEmail(username).isPresent()) {
            throw new IllegalArgumentException("User with email " + username + " does not exist!");
        }
        Role role = roleRepository.findByName(rolename);
        if (role == null) {
            throw new IllegalArgumentException("Role with name " + rolename + " does not exist!");
        }
//        if (userRepository.findByEmail(username).isPresent() && userRepository.findByEmail(username).get().getRoles().contains(rolename))
//            throw new IllegalArgumentException("null");
        User user = userRepository.findByEmail(username).get();
        user.getRoles().add(role);
    }
    private static final long RESET_TOKEN_EXPIRATION_MS = 60 * 60 * 1000; // 1 hour
    @Value("${secret.key}")
    private  String secretKey;
    @Override
    public String generatePasswordResetToken(User user) {
        Algorithm algorithm = Algorithm.HMAC256(secretKey.getBytes());
        return JWT.create()
                .withSubject(user.getEmail())
                .withExpiresAt(new Date(System.currentTimeMillis() + RESET_TOKEN_EXPIRATION_MS))
                .sign(algorithm);
    }

    @Override
    public void updatePassword(User user, String newPassword) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);
        user.setResetToken(null);
        userRepository.save(user);
    }

    @Override
    public void updateResetPasswordToken(String token, String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user != null) {
            user.get().setResetToken(token);
            userRepository.save(user.get());
        } else {
            System.out.println("not exist this email!");
        }
    }

    @Override
    public User getByResetToken(String token) {
        return userRepository.findByResetToken(token);    }


}
