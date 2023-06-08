package com.pizzadelivery.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizzadelivery.pojos.OrderItem;

public interface OrderItemRepo extends JpaRepository<OrderItem, Long> {
	List<OrderItem> findByOrderId(long id);


}
