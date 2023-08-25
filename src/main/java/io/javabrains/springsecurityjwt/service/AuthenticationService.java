package io.javabrains.springsecurityjwt.service;

import io.javabrains.springsecurityjwt.auth.AuthenticationRequest;
import io.javabrains.springsecurityjwt.auth.AuthenticationResponse;
import io.javabrains.springsecurityjwt.auth.RegisterRequest;
import io.javabrains.springsecurityjwt.model.Role;
import io.javabrains.springsecurityjwt.model.User;
import io.javabrains.springsecurityjwt.repository.RoleCustomRepo;
import io.javabrains.springsecurityjwt.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final RoleCustomRepo roleCustomRepo;
    private final UserService userService;

    public ResponseEntity<?> register(RegisterRequest registerRequest){
        try {
            if (userRepository.findByEmail(registerRequest.getEmail())==null){
                throw new IllegalArgumentException("User with "+registerRequest.getEmail().toString()+" email already exists.");
            }
            userService.saveUser(new User(registerRequest.getUser_id(), registerRequest.getMobile_number(),registerRequest.getUser_name(),registerRequest.getEmail(),registerRequest.getPassword(), new HashSet<>()));
            userService.addToUser(registerRequest.getEmail(),"ROLE_USER" );
            User user = userRepository.findByEmail(registerRequest.getEmail()).orElseThrow();
            return ResponseEntity.ok(user);
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    public ResponseEntity<?> authenticate(AuthenticationRequest authenticationRequest){
        try{
            User user =userRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow(()->new NoSuchElementException("User not found."));
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
            List<Role> role =null;
            if(user!=null){
                role=roleCustomRepo.getRole(user);
            }
            Collection<SimpleGrantedAuthority> authorities=new ArrayList<>();
            Set<Role> set=new HashSet<>();
            role.stream().forEach(c->{set.add(new Role(c.getName()));
                authorities.add(new SimpleGrantedAuthority(c.getName()));
            });
            user.setRoles(set);
            set.stream().forEach(i->authorities.add(new SimpleGrantedAuthority(i.getName())));
            var jwtAccessToken = jwtService.generateToken(user,authorities);
            var jwtRefreshToken = jwtService.generateRefreshToken(user,authorities);
            return ResponseEntity.ok(AuthenticationResponse.builder().access_token(jwtAccessToken).refresh_token(jwtRefreshToken).email(user.getEmail()).user_name(user.getUser_name()).build());
        }catch (NoSuchElementException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());

        }catch (BadCredentialsException e){
            return ResponseEntity.badRequest().body("Invalid Credential");

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");

        }
    }
}
