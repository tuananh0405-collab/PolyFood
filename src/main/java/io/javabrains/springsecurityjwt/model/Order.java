package io.javabrains.springsecurityjwt.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "customer_order")
public class Order {

    @PrePersist
    protected void onCreate(){
        this.created_At = new Date(System.currentTimeMillis());
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date(System.currentTimeMillis());
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_id;

//    @ManyToOne
//    @JoinColumn(name = "payment_id")
//    private Payment payment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;



    private Double original_price;
    private Double actual_price;
    private String name;
    private String email;
    private String mobile_number;
    private String address;
    private Integer quantity;


    @ManyToOne
    @JoinColumn(name = "order_status_id")
    @JsonIgnore
    private OrderStatus orderStatus;

    private Date updated_At;
    private Date created_At;

    // Getters and setters
}

