package io.javabrains.springsecurityjwt.controller;

import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.repository.UserRepository;
import io.javabrains.springsecurityjwt.service.MailService;
import io.javabrains.springsecurityjwt.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/mail")
public class EmailSendController {
    private MailService emailService;

    public EmailSendController(MailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public String sendMail(@RequestParam(value = "file", required = false) MultipartFile[] file, String to, String cc, String subject, String body) {
        return emailService.sendMail(file, to, cc, subject, body);
    }

    @Autowired
    private UserService userService;  // Assuming you have a UserService that interacts with users.

    @Autowired
    private UserRepository userRepository;

//

    @PostMapping("/forgot-password")
    public String sendMailForgotPassword(@RequestParam(value = "file", required = false) MultipartFile[] file, String to, String cc, String subject, String body) {



        Optional<User> user = userRepository.findByEmail(to);
        String token = userService.generatePasswordResetToken(user.get());
        user.get().setResetToken(token);
        userRepository.save(user.get());
        System.out.println(user);
        String resetLink = "http://localhost:8080/reset-password?token=" + token;

        // Call your sendMail method from the EmailSendController to send the reset email.
        subject = "Password Reset Request";
        body = "Click the link below to reset your password:\n" + resetLink;

        return emailService.sendMail(null, to, cc, subject, body);

    }

    private static final int TOKEN_LENGTH = 20; // Length of the token in bytes




    @PostMapping("/reset-password")
    public String processResetPassword(@RequestParam("token") String token,
                                       @RequestParam("newPassword") String newPassword) {
        User user = userRepository.findByResetToken(token);
        System.out.println(user);
        if (user == null) {
            return "Invalid token";
        }

        userService.updatePassword(user, newPassword);
        return "Password updated successfully";
    }


}
