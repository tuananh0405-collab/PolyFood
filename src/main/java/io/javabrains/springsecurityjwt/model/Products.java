package io.javabrains.springsecurityjwt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;

//    @ManyToOne
//    @JoinColumn(name = "product_type_id")
//    private ProductType productType;

    private String product_name;
    private Double price;
    private String product_image;
    private String category;
    private Integer discount;
    private Integer stock;
    private Double rating;
//    private Integer status;
//    private Integer numberOfViews;
//    private LocalDateTime createdAt;
//    private LocalDateTime updatedAt;

    // Getters and setters
}
