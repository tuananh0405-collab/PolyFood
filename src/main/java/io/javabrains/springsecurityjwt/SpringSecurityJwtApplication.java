package io.javabrains.springsecurityjwt;

import io.javabrains.springsecurityjwt.model.Role;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;

@SpringBootApplication
@EnableWebSecurity
@EnableJpaRepositories
public class SpringSecurityJwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityJwtApplication.class, args);
	}
	@Bean
	BCryptPasswordEncoder bCryptPasswordEncoder(){
		return new BCryptPasswordEncoder();
	}
	@Bean
	CommandLineRunner run(UserService userService){
		return args -> {
			userService.saveRole(new Role(null,"ROLE_USER","this is user"));
			userService.saveRole(new Role(null,"ROLE_ADMIN","this is user"));
			userService.saveRole(new Role(null,"ROLE_MANAGER","this is user"));

			userService.saveUser(new User(1,"0916961458", "tuananh","vutuananh0405@gmail.com","pass",new HashSet<>()));
			userService.saveUser(new User(2,"0916961458", "tuananh1","vutuananh04051@gmail.com","pass",new HashSet<>()));
			userService.saveUser(new User(3,"0916961458", "tuananh2","vutuananh04052@gmail.com","pass",new HashSet<>()));

			userService.addToUser("vutuananh0405@gmail.com","ROLE_USER");
			userService.addToUser("vutuananh04051@gmail.com","ROLE_ADMIN");
			userService.addToUser("vutuananh04052@gmail.com","ROLE_MANAGER");
		};
	}
}
