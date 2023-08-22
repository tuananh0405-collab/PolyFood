package io.javabrains.springsecurityjwt.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private Integer user_id;
    private String user_name;
    private String email;
    private String password;
    private String mobile_number;
}
