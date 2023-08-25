package io.javabrains.springsecurityjwt.exception;

public class OrderNotFoundException extends  RuntimeException{
    public OrderNotFoundException(Integer id){
        super("Could not found the order with id: "+id);
    }
}
