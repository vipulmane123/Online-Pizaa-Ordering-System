package com.pizzadelivery.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizzadelivery.pojos.Category;

public interface CategoryRepo extends JpaRepository<Category, Long>{

}
