package io.javabrains.springsecurityjwt.service;

import io.javabrains.springsecurityjwt.model.Order;
import io.javabrains.springsecurityjwt.model.User;

import java.util.List;

public interface OrderService {
    List<Order> getOrdersFromUser(User user);
}
