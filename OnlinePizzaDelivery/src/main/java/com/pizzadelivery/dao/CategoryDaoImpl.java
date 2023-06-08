package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzadelivery.pojos.Category;
import com.pizzadelivery.pojos.Pizza;
import com.pizzadelivery.repo.CategoryRepo;

@Component
public class CategoryDaoImpl implements CategoryDao {
	
	@Autowired
	CategoryRepo categoryRepo;
	
	public Category addCategory(Category category) {
		categoryRepo.save(category);
		return category;
	}
	
	public Category updateCategory(Category category) {
		
		Category updCat = this.categoryRepo.findById(category.getId()).orElse(null);
		updCat.setCategoryName(category.getCategoryName());
		updCat.setDescription(category.getDescription());
		
		this.categoryRepo.save(updCat);
		
		return updCat;
	}
	
	@Override
	public Optional<Category> findCategoryByID(Long id) {
		System.out.println("Finding the category with the Id: "+ id);
		return categoryRepo.findById(id);
	}

	@Override
	public void deleteCategoryByID(Long id) {
		System.out.println("Finding the category with the Id: "+ id);
		categoryRepo.deleteById(id);
	}

	@Override
	public List<Category> allCategory() {
		return categoryRepo.findAll();
	}

	
}
