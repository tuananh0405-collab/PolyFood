package io.javabrains.springsecurityjwt.service;

import io.javabrains.springsecurityjwt.model.Role;
import io.javabrains.springsecurityjwt.model.User;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addToUser(String username, String rolename);

    public String generatePasswordResetToken(User user);
    void updatePassword(User user, String newPassword);
    void updateResetPasswordToken(String token, String email);
    User getByResetToken(String token);

}
