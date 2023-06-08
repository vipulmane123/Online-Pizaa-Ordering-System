package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import com.pizzadelivery.pojos.Pizza;

public interface PizzaDao {

	public Pizza addPizza(Pizza pizza);

	public List<Pizza> findAllPizza();

	public void deletePizzaByID(Long id);

	Optional<Pizza> PizzaByID(Long id);
}
