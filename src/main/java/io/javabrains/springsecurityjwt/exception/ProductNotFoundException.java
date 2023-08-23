package io.javabrains.springsecurityjwt.exception;

public class ProductNotFoundException extends  RuntimeException{
    public ProductNotFoundException(Integer id){
        super("Could not found the product with id: "+id);
    }
}
