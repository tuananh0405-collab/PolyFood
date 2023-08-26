package io.javabrains.springsecurityjwt.repository;

import io.javabrains.springsecurityjwt.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
