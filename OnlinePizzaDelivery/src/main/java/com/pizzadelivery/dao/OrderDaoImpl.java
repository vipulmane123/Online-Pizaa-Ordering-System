package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzadelivery.pojos.Order;
import com.pizzadelivery.repo.OrderRepo;

@Component
public class OrderDaoImpl implements OrderDao{
	@Autowired
	OrderRepo orderRepo;
	
	@Override
	public List<Order> findAllOrders() {
		return orderRepo.findAll();
	}
	
//	@Override
//	public Order addOrder(Order order) {
//		orderRepo.save(order);
//		return order;
//	}
	
	@Override
	public Optional<Order> findOrderByID(Long id) {
		System.out.println("Finding the order with the Id: "+ id);
		return orderRepo.findById(id);
	}

	@Override
	public void deleteOrderByID(Long id) {
		System.out.println("Finding the order with the Id: "+ id);
		orderRepo.deleteById(id);
	}

	public Order findByID(Long id) {
		return orderRepo.findById(id).orElse(null);
	}
	
	public List<Order> findByUserId(long id){
		return orderRepo.findByCartOwnerId(id);
	}
	
	//code by ashraf
	@Override
	public Order updateOrder(Order order) {
		Order updOder = orderRepo.findById(order.getId()).orElse(null);
		updOder.setTotalItems(order.getTotalItems());
		updOder.setTotalOrderPrice(order.getTotalOrderPrice());
		updOder.setOrderOreatedOn(order.getOrderOreatedOn());
		updOder.setCartOwner(order.getCartOwner());
		updOder.setOrderItems(order.getOrderItems());
		updOder.setPlacedOn(order.getPlacedOn());
		updOder.setStatus(order.getStatus());
		updOder.setAddress(order.getAddress());

		return orderRepo.save(updOder);
	}

}
