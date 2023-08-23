package io.javabrains.springsecurityjwt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_status_id;

    private String status_name;
    @OneToMany(mappedBy = "orderStatus")
    private List<Order> orders;
    // Getters and setters
}

