package io.javabrains.springsecurityjwt.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Users_display")
public class UserDisplay {
    @Id
    private Integer user_id;
    private String user_name;
    private String email;
    private String mobile_number;
}
