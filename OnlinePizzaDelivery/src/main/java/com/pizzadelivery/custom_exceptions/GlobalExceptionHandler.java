package com.pizzadelivery.custom_exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler extends RuntimeException{
	
	
	//customize explicit exception handler
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<String> resourceNotFoundHandler(ResourceNotFoundException ex){
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Resouce Not Found: " + ex.getMessage());
	}
	
	
	//global exception handler
	@ExceptionHandler(Exception.class)  
    public ResponseEntity<String> handleException(Exception ex) {
        // Handle the exception here
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + ex.getMessage());
    }

}
