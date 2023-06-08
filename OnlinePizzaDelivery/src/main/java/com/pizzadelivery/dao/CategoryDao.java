package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import com.pizzadelivery.pojos.Category;

public interface CategoryDao {

	public Optional<Category> findCategoryByID(Long id);

	public void deleteCategoryByID(Long id);

	public List<Category> allCategory();

}
