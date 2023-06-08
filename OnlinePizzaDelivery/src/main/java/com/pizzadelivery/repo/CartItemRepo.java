package com.pizzadelivery.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizzadelivery.pojos.CartItem;

public interface CartItemRepo extends JpaRepository<CartItem, Long> {
	List<CartItem> findByCartId(long id);
	CartItem findByPizzaIdAndCartId(long pizzaId, long CartId);
}
