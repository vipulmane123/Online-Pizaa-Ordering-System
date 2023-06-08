package com.pizzadelivery.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizzadelivery.dao.AddressDaoImpl;
import com.pizzadelivery.dao.OfferDaoImpl;
import com.pizzadelivery.dao.PizzaDaoImpl;
import com.pizzadelivery.dao.ReviewsDaoImpl;
import com.pizzadelivery.dao.ShoppingCartDaoImpl;
import com.pizzadelivery.dao.UserDaoImpl;

@RestController
@CrossOrigin("http://localhost:3000")
public class DeliveryPersonController {

	@Autowired
	UserDaoImpl userDaoImpl;
	
	@Autowired
	AddressDaoImpl addressDaoImpl;
	
	@Autowired
	OfferDaoImpl offerDaoImpl;
	
	@Autowired
	PizzaDaoImpl pizzaDaoImpl;
	
	@Autowired
	ReviewsDaoImpl reviewsDaoImpl;
	
	@Autowired
	ShoppingCartDaoImpl shoppingCartDaoImpl;
	
	@GetMapping("/test")
	public void getCartTest() {
		shoppingCartDaoImpl.addToCart((long)10, (long)4);
	}

}
