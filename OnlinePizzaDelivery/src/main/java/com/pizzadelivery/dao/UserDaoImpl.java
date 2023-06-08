package com.pizzadelivery.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pizzadelivery.custom_exceptions.ResourceNotFoundException;
import com.pizzadelivery.pojos.Category;
import com.pizzadelivery.pojos.Pizza;
import com.pizzadelivery.pojos.ShoppingCart;
import com.pizzadelivery.pojos.User;
import com.pizzadelivery.repo.UserRepo;


@Service // mandatory cls level anno to tell SC following is spring bean , containing B.L
@Transactional // mandatory cls level anno to tell SC --to auto supply tx management
public class UserDaoImpl implements UserDao {
	@Autowired
	UserRepo userRepo;

	@Override
	public User addUser(User user) {
		userRepo.save(user);
		return user;
	}
	
	@Override
	public User updateCreds(User updateCust) {
		User updCus = this.userRepo.findById(updateCust.getId()).orElse(null);
		updCus.setEmail(updateCust.getEmail());
		updCus.setFirst_name(updateCust.getFirst_name());
		updCus.setLast_name(updateCust.getLast_name());
		updCus.setMobile_no(updateCust.getMobile_no());
		updCus.setPassword(updateCust.getPassword());
		updCus.setUserRole(updateCust.getUserRole());
		this.userRepo.save(updCus);
		return updCus;
	}
	
	@Override
	public User validate(String email, String password) {
		System.out.println("Email"+email+", Password: "+password);
		User user = userRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid credentials !! , User not found!!!!"));
		return user;
	}
	
	public List<User> allUsers(){
		return userRepo.findAll();
	}
	
	
	public User getByID(long id) {
		return userRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("user not found"));
	}
	
	public User getUserById(long id) {
	return userRepo.findById(id).orElse(null);
}
	ShoppingCart addToCart(long user_id, long pizza_id){
		return null;
	}

	
}
