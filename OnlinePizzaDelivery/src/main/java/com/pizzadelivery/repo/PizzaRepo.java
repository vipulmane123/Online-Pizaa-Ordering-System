package com.pizzadelivery.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pizzadelivery.pojos.Category;
import com.pizzadelivery.pojos.Pizza;

public interface PizzaRepo extends JpaRepository<Pizza, Long> {
	
	@Query("SELECT p FROM Pizza p WHERE p.pizzaCategory.id = ?1")
	List<Pizza> findByCategories(long cat_id);
	
}
