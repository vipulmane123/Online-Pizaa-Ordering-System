package com.pizzadelivery.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizzadelivery.pojos.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {
	public List<Order> findByCartOwnerId(long id);
}
