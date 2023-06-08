package com.pizzadelivery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pizzadelivery.dao.AddressDaoImpl;
import com.pizzadelivery.dao.OfferDaoImpl;
import com.pizzadelivery.dao.OrderDao;
import com.pizzadelivery.dao.OrderDaoImpl;
import com.pizzadelivery.dao.PizzaDaoImpl;
import com.pizzadelivery.dao.ReviewsDaoImpl;
import com.pizzadelivery.dao.ShoppingCartDaoImpl;
import com.pizzadelivery.dao.UserDao;
import com.pizzadelivery.dao.UserDaoImpl;
import com.pizzadelivery.pojos.Address;
import com.pizzadelivery.pojos.CartItem;
import com.pizzadelivery.pojos.LoginCred;
import com.pizzadelivery.pojos.Offer;
import com.pizzadelivery.pojos.Order;
import com.pizzadelivery.pojos.OrderItem;
import com.pizzadelivery.pojos.Pizza;
import com.pizzadelivery.pojos.Review;
import com.pizzadelivery.pojos.ShoppingCart;
import com.pizzadelivery.pojos.User;
import com.pizzadelivery.repo.OrderItemRepo;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	UserDao userDaoImpl;
	
	@Autowired
	AddressDaoImpl addressDaoImpl;
	
	@Autowired
	OfferDaoImpl offerDaoImpl;
	
	@Autowired
	PizzaDaoImpl pizzaDaoImpl;
	
	@Autowired
	ReviewsDaoImpl reviewsDaoImpl;
	
	@Autowired
	ShoppingCartDaoImpl shoppingCartDaoImpl;
	
	@Autowired
	OrderDaoImpl orderDaoImpl;
	
	@Autowired
	OrderItemRepo orderItemRepo;
	
	@PostMapping("/login")
	public ResponseEntity<User> logigCustomer(@RequestBody LoginCred logincred) {
		System.out.println(logincred);
		User user = this.userDaoImpl.validate(logincred.getEmail(), logincred.getPassword());
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}
	
	
	@PostMapping("/register")
	public User register(@RequestBody User user) {
		System.out.println(user);
		User newUser = userDaoImpl.addUser(user);
		shoppingCartDaoImpl.addCartToUser(newUser);
		return user;
	}
	
	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return userDaoImpl.updateCreds(user);		
	}
	
	@GetMapping("/user/{id}")
	public User getUser(@PathVariable long id) {
		return userDaoImpl.getUserById(id);		
	}
	
	@PostMapping("/menu")
	public List<Pizza> catMenu(){
		return pizzaDaoImpl.getByCategory((long) 1);
	}
	
//	@GetMapping("/menu")
//	public List<Pizza> menu(){
//		return pizzaDaoImpl.getAll();
//	}
	
	@PostMapping("/address")
	public Address addOffer(@RequestBody Address address) {
		this.addressDaoImpl.addAddress(address);
		return address;
		
	}
	
	@GetMapping("/addresses")
	public List<Address> seeAllAddress(){
		return this.addressDaoImpl.findAllAddress();
	}
	
	@GetMapping("/addressbyuser/{id}")
	public List<Address> getAddressByUser(@PathVariable long id){
		return this.addressDaoImpl.getAddressByUser(id);
	}


	@DeleteMapping("/address/{id}")
	public void deleteAddressByID(@PathVariable long id){
		addressDaoImpl.deleteAddressById(id);
	}
	 
	 
	@PostMapping("/review")
	public Review addReview(@RequestBody Review review) {
		this.reviewsDaoImpl.addReview(review);
		return review;
	}
	
	@GetMapping("/pizzas")
	public List<Pizza> allPizza() {
		return this.pizzaDaoImpl.findAllPizza();
	}
	
	@GetMapping("/pizzabycat/{id}")
	public List<Pizza> getByCatId(@PathVariable long cat_id){
		return pizzaDaoImpl.findByCategoryID(cat_id);
	}
	
//	public ShoppingCart addToCart(@PathVariable long user_id, @PathVariable long pizza_id){
////		step 1: create new cartitem & set the cart id as current
////		step 2: add pizza id to cart item
////		step 3: calculate the price
////		step 4: 
//		
//		
//		
//		return null;
//	}
//	
//	@GetMapping("/path")
//	public String handleRequest(@RequestParam("name") String name,
//	                            @RequestParam("age") int age) {
//	    // code to handle the request
//	}
//	In this example, @RequestParam("name") extracts the "name" parameter from the URL and binds it to the name method parameter. Similarly, @RequestParam("age") extracts the "age" parameter and binds it to the age parameter.
//
//	On the other hand, @PathVariable is used to extract path variables from a URL. Path variables are part of the URL path, and are denoted by curly braces. For example, in the URL "/path/{name}/{age}", "name" and "age" are path variables. You can use the @PathVariable annotation to extract these variables in your controller method:
//
//	java
//	Copy code
//	@GetMapping("/path/{name}/{age}")
//	public String handleRequest(@PathVariable("name") String name,
//	                            @PathVariable("age") int age) {
//	    // code to handle the request
//	}
//	In this example, @PathVariable("name") extracts the "name" path variable from the URL and binds it to the name method parameter. Similarly, `@PathVariable
//



	
	@GetMapping("/addtocart")
	public ShoppingCart addToCart(@RequestParam("user_id") long user_id,
            @RequestParam("pizza_id") long pizza_id) {
		return shoppingCartDaoImpl.addToCart(user_id, pizza_id);
	}
	
	@GetMapping("/removefromcart")
	public ShoppingCart removeFromCart(@RequestParam("user_id") long user_id,
            @RequestParam("pizza_id") long pizza_id) {
		return shoppingCartDaoImpl.removeFromCart(user_id, pizza_id);
	}
	
//	@PostMapping("/checkout")
//	public Order checkout(@RequestBody ShoppingCart cart) {
//		return shoppingCartDaoImpl.checkout(cart);
//	}
	
//	@PostMapping("/checkout")
//	public Order checkout(@RequestParam long user_id, @RequestParam long address_id, @RequestParam String paymentType, 
//			@RequestParam double discount, @RequestParam double deliveryPrice, @RequestParam double taxAmount) {
//		return shoppingCartDaoImpl.checkout(user_id, address	_id, paymentType, discount, deliveryPrice, taxAmount);
//	}
	
	@PostMapping("/checkout")
	public Order checkout(@RequestBody Order order) {
		return shoppingCartDaoImpl.checkout(order.getCartOwner().getId(),order.getAddress().getId(),order.getPaymentType(),
				order.getDiscount(),order.getDeliveryPrice(),order.getTaxAmount());
	}
	
	@GetMapping("/cart/{user_id}")
	public ShoppingCart getCartByUserId(@PathVariable long user_id){
		return shoppingCartDaoImpl.getCartByUserID(user_id);
	}
	
	@GetMapping("/cartitems/{cart_id}")
	public List<CartItem> getCartItemsByCartId(@PathVariable long cart_id){
		return shoppingCartDaoImpl.getCartItemsByCartID(cart_id);
	}
	
	@DeleteMapping("/cartitems/{id}")
	public void deleteCartItemById(@PathVariable long id) {
		shoppingCartDaoImpl.deleteCartItemById(id);
	}
	
//	@PostMapping("/setAddress/{id}")
//	public Order setAddressToOrder(@RequestBody Address address, @PathVariable long id) {
//		
//		return shoppingCartDaoImpl.checkout(cart);
//	}
	
	@GetMapping("/order/{id}")
	public Order findOrderById(@PathVariable long id) {
		return orderDaoImpl.findByID(id);
	}
	
	@GetMapping("/orderbyuser/{id}")
	public List<Order> findOrderByUser(@PathVariable long id){
		return orderDaoImpl.findByUserId(id);
	}
	
	@GetMapping("/orderitemsbyorder/{id}")
	public List<OrderItem> findOrderItemsByOrder(@PathVariable long id){
		return orderItemRepo.findByOrderId(id);
	}
	
	@GetMapping("/productreviews/{id}")
	public List<Review> getProductReviews(@PathVariable long id){
		return reviewsDaoImpl.findReviewByProduct(id);
	}
	
	@GetMapping("/userreviews/{id}")
	public List<Review> getUserReviews(@PathVariable long id){
		return reviewsDaoImpl.findReviewByUser(id);
	}
	
	@GetMapping("/pizza/{id}")
	public Pizza pizzaById(@PathVariable long id) {
		return pizzaDaoImpl.PizzaByID(id).orElse(null);
	}
	
	@GetMapping("/address/{id}")
	public Address addressById(@PathVariable long id) {
		return addressDaoImpl.addressByID(id).orElse(null);
	}
	
	
	
}
