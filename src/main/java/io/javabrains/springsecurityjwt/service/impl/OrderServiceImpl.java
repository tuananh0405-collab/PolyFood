package io.javabrains.springsecurityjwt.service.impl;

import io.javabrains.springsecurityjwt.model.Order;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.repository.UserRepository;
import io.javabrains.springsecurityjwt.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class OrderServiceImpl implements OrderService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<Order> getOrdersFromUser(User user) {
        Optional<User> userGet = userRepository.findByEmail(user.getEmail());
        return userGet.get().getOrders();
    }
}
