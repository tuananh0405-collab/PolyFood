package io.javabrains.springsecurityjwt.service.impl;

import io.javabrains.springsecurityjwt.service.MailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

@Service
public class MailServiceImpl implements MailService {
//    @Autowired
//    JavaMailSender mailSender;
//    @Autowired
//    private SpringTemplateEngine templateEngine;


//    @Override
//    public void sendPasswordResetEmail(String recipientEmail, String resetLink) {
//        try {
//            MimeMessage message = mailSender.createMimeMessage();
//            MimeMessageHelper helper = new MimeMessageHelper(message, true);
//
//            helper.setTo(recipientEmail);
//            helper.setSubject("Password Reset Request");
//
//            // You can customize the email content as needed.
//            String emailContent = "Hello,\n\n"
//                    + "You have requested to reset your password. Please click the link below to reset your password:\n\n"
//                    + resetLink + "\n\n"
//                    + "If you did not request this reset, you can ignore this email.\n\n"
//                    + "Best regards,\n"
//                    + "Your Application Team";
//
//            helper.setText(emailContent, false);  // Set the email content as plain text
//
//            mailSender.send(message);
//        } catch (MessagingException e) {
//            // Handle the exception here
//            e.printStackTrace();
//        }
//    }

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public String sendMail(MultipartFile[] file, String to, String cc, String subject, String body) {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();

            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setFrom(fromEmail);
            mimeMessageHelper.setTo(to);
            mimeMessageHelper.setCc(cc);
            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setText(body);

            if (file != null) {
                for (int i = 0; i < file.length; i++) {
                    mimeMessageHelper.addAttachment(
                            file[i].getOriginalFilename(),
                            new ByteArrayResource(file[i].getBytes()));
                }
            }

            javaMailSender.send(mimeMessage);

            return "mail sent";

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}