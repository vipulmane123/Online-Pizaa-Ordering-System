package com.pizzadelivery.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pizzadelivery.dao.AddressDaoImpl;
import com.pizzadelivery.dao.CategoryDaoImpl;
import com.pizzadelivery.dao.OfferDaoImpl;
import com.pizzadelivery.dao.OrderDaoImpl;
import com.pizzadelivery.dao.PizzaDaoImpl;
import com.pizzadelivery.dao.ReviewsDaoImpl;
import com.pizzadelivery.dao.UserDaoImpl;
import com.pizzadelivery.pojos.Category;
import com.pizzadelivery.pojos.Offer;
import com.pizzadelivery.pojos.Order;
import com.pizzadelivery.pojos.Pizza;
import com.pizzadelivery.pojos.Review;
import com.pizzadelivery.pojos.User;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {
	
	@Autowired
	UserDaoImpl userDaoImpl;
	
	@Autowired
	AddressDaoImpl addressDaoImpl;
	
	@Autowired
	OfferDaoImpl offerDaoImpl;
	
	@Autowired
	PizzaDaoImpl pizzaDaoImpl;
	
	@Autowired
	CategoryDaoImpl categoryDaoImpl;
	
	@Autowired
	ReviewsDaoImpl reviewsDaoImpl;
	
	@Autowired
	OrderDaoImpl orderDaoImp;
	
//	@GetMapping("/order/{Id}")
//	public Optional<Order> getOrderById(@PathVariable long Id) {
//		System.out.println("in fetch order of user  " + Id);
//		return orderDaoImp.findOrderByID(Id);
//	}
	
	@GetMapping("/orders")
	public List<Order> seeAllOrder() {
		return this.orderDaoImp.findAllOrders();
	}
	
	@DeleteMapping("/pizza/order/{Id}")
	public void deleteOrderById(@PathVariable long Id) {
		System.out.println("in fetch order of user  " + Id);
		orderDaoImp.deleteOrderByID(Id);
	}
	
	
	@PostMapping("/pizza")
	public Pizza addPizza(@RequestBody Pizza pizza) {
		this.pizzaDaoImpl.addPizza(pizza);
//		user.getAddresses().get(0).setUser(user);
//		addressDaoImpl.addAddress(user.getAddresses().get(0));
		return pizza;
	}
	
	@PostMapping("/category")
	public Category addCategory(@RequestBody Category category) {
		this.categoryDaoImpl.addCategory(category);
//		user.getAddresses().get(0).setUser(user);
//		addressDaoImpl.addAddress(user.getAddresses().get(0));
		return category;
	}
	
	@GetMapping("/offers")
	public List<Offer> seeAllOffer() {
		return this.offerDaoImpl.findAllOffer();
	}
	
	@PutMapping("/category")
	public Category updateCategory(@RequestBody Category category) {
		System.out.println(category);
		return this.categoryDaoImpl.updateCategory(category);
	}
	
	
	@GetMapping("/reviews")
	public List<Review> seeAllReviews(){
		return this.reviewsDaoImpl.findAllReview();
	}
	
	
	@GetMapping("/review/{id}")
	public Optional<Review> getReview(@PathVariable long id){
		return reviewsDaoImpl.getReview(id);
	}
	 
	@DeleteMapping("/review/{id}")
	public void deleteReviewsById(@PathVariable long id){
		reviewsDaoImpl.deleteReviewById(id);
	}
	
	
	//Deleting all pizzas
	@DeleteMapping("/pizza/{Id}")
	public void deleteById(@PathVariable long Id) {
		System.out.println("in fetch address of user  " + Id);
	    pizzaDaoImpl.deletePizzaByID(Id);
		//Optional<Pizza> findPizzaByID(Long id);
	}
	
	@GetMapping("/category/{Id}")
	public Optional<Category> getCategoryById(@PathVariable long Id) {
		System.out.println("in fetch Category of user  " + Id);
		return categoryDaoImpl.findCategoryByID(Id);
	}
	
	@GetMapping("/categories")
	public List<Category> seeAllCategory() {
		return categoryDaoImpl.allCategory();
	}
	
	@DeleteMapping("category/{Id}")
	public void deleteCategoryById(@PathVariable long Id) {
		System.out.println("in fetch Category of user  " + Id);
		categoryDaoImpl.deleteCategoryByID(Id);
	}
	
	@PostMapping("/offer")
	public Offer addOffer(@RequestBody Offer offer) {
//		Offer offer1 = new Offer();
//		offer1.setCode("NewUser");
//		offer1.setName("FirstOrder");
//		offer1.setDiscount(25);
//		offer1.setTerms_conditions("Only for new Users!");
		this.offerDaoImpl.addOffer(offer);
		return offer;
	}
	
	@GetMapping("/users")
	public List<User> allUsers(){
		return userDaoImpl.allUsers();
	}
	
	//From ashraf
	
//	@GetMapping("/order/{Id}")
//	public Optional<Order> getOrder(@PathVariable long Id) {
//		System.out.println("in fetch order of user  " + Id);
//		return this.orderDaoImp.findOrderByID(Id);
//	}



	@DeleteMapping("/offer/{Id}")
	public void deleteOfferById(@PathVariable long Id) {
		System.out.println("in fetch offer " + Id);
		offerDaoImpl.deleteofferByID(Id);
	}


//	@PostMapping("/pizza")
//	public Pizza addPizza(@RequestBody Pizza pizza) {
//		this.pizzaDaoImpl.addPizza(pizza);
////		user.getAddresses().get(0).setUser(user);
////		addressDaoImpl.addAddress(user.getAddresses().get(0));
//		return pizza;
//	}
	

	@PutMapping("/pizza")
	public Pizza updatepizza(@RequestBody Pizza pizza) {
		System.out.println(pizza);
		return this.pizzaDaoImpl.updatePizza(pizza);
	}
	
	@PutMapping("/order")
	public Order updateOrder(@RequestBody Order order) {
		System.out.println(order);
		return this.orderDaoImp.updateOrder(order);
	}
	
	@PutMapping("/offer")
	public Offer updateOffer(@RequestBody Offer offer) {
		System.out.println(offer);
		return this.offerDaoImpl.updateOffer(offer);
	}
	
	@GetMapping("/offer/{id}")
	public Optional<Offer> getByOfferId(@PathVariable long id){
		return offerDaoImpl.OfferByID(id);
	}
	
	

}
