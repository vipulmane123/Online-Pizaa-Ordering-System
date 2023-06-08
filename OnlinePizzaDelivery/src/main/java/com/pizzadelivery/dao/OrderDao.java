package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import com.pizzadelivery.pojos.Order;

public interface OrderDao {

	public List<Order> findAllOrders();

	public Optional<Order> findOrderByID(Long id);

//	public Order addOrder(Order order);

	public void deleteOrderByID(Long id);

	Order updateOrder(Order order);


}
