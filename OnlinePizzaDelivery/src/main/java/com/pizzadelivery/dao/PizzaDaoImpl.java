package com.pizzadelivery.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pizzadelivery.custom_exceptions.ResourceNotFoundException;
import com.pizzadelivery.pojos.Category;
import com.pizzadelivery.pojos.Pizza;
import com.pizzadelivery.pojos.User;
import com.pizzadelivery.repo.PizzaRepo;

@Service
@Transactional
public class PizzaDaoImpl implements PizzaDao {
	
	@Autowired
	PizzaRepo pizzaRepo;

	@Override
	public Pizza addPizza(Pizza pizza) {
		pizzaRepo.save(pizza);
		return pizza;
	}
	
	public List<Pizza> getByCategory(Long category_id){
		
		List<Pizza> items = new ArrayList<>();
		List<Pizza> allItems = new ArrayList<>();

		allItems = pizzaRepo.findAll();
		for (Pizza pizza : allItems) {
			if(pizza.getPizzaCategory().getId() == category_id)
			{
				items.add(pizza);
			}
		}
		return items;
	}

	public List<Pizza> getAll() {
		List<Pizza> allProducts = pizzaRepo.findAll();
		return allProducts;
	}
	
	public Pizza updatePizza(Pizza pizza){
		
		Pizza updPiz = this.pizzaRepo.findById(pizza.getId()).orElse(null);
		updPiz.setName(pizza.getName());
		updPiz.setPizzaCategory(pizza.getPizzaCategory());
		updPiz.setPrice(pizza.getPrice());
		updPiz.setSummary(pizza.getSummary());
		updPiz.setVeg(pizza.isVeg());
		updPiz.setInStock(pizza.isInStock());
		this.pizzaRepo.save(updPiz);
		
		return updPiz;
	}
	
	@Override
	public List<Pizza> findAllPizza() {
		return pizzaRepo.findAll();
	}
	
	@Override
	public void deletePizzaByID(Long id) {
		System.out.println("Finding the pizza with the Id: "+ id);
		pizzaRepo.deleteById(id);
	}
	
	public List<Pizza> findByCategoryID(long cat_id) {
		return pizzaRepo.findByCategories(cat_id);
		
	}
	
	public Pizza getByID(long id){
		return pizzaRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Pizza not found"));
	}
	
	@Override
	public Optional<Pizza> PizzaByID(Long id) {
		System.out.println("Finding the pizza with the Id: "+ id);
		
		return pizzaRepo.findById(id);
	}

}
