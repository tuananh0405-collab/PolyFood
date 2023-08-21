package io.javabrains.springsecurityjwt.service;

import io.javabrains.springsecurityjwt.model.Role;
import io.javabrains.springsecurityjwt.model.User;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addToUser(String username, String rolename);

}
