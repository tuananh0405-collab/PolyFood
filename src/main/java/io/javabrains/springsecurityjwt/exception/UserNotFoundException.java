package io.javabrains.springsecurityjwt.exception;

public class UserNotFoundException extends  RuntimeException{
    public UserNotFoundException(Integer id){
        super("Could not found the user with id: "+id);
    }
}
