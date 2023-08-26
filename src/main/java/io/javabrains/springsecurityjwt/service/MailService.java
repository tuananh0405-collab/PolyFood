package io.javabrains.springsecurityjwt.service;

import jakarta.mail.MessagingException;
import org.springframework.web.multipart.MultipartFile;

public interface MailService {
//    public void sendPasswordResetEmail(String recipientEmail, String resetLink);
String sendMail(MultipartFile[] file, String to, String cc, String subject, String body);

}
