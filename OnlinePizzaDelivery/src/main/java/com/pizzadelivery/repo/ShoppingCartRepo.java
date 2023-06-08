package com.pizzadelivery.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizzadelivery.pojos.CartItem;
import com.pizzadelivery.pojos.ShoppingCart;

public interface ShoppingCartRepo extends JpaRepository<ShoppingCart, Long> {
	ShoppingCart findByCartOwnerId(long id);
	

}
