package com.pizzadelivery.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import com.pizzadelivery.custom_exceptions.ResourceNotFoundException;
import com.pizzadelivery.pojos.Address;
import com.pizzadelivery.pojos.CartItem;
import com.pizzadelivery.pojos.DeliveryStatus;
import com.pizzadelivery.pojos.Order;
import com.pizzadelivery.pojos.OrderItem;
import com.pizzadelivery.pojos.Pizza;
import com.pizzadelivery.pojos.ShoppingCart;
import com.pizzadelivery.pojos.User;
import com.pizzadelivery.repo.AddressRepo;
import com.pizzadelivery.repo.CartItemRepo;
import com.pizzadelivery.repo.OrderItemRepo;
import com.pizzadelivery.repo.OrderRepo;
import com.pizzadelivery.repo.ShoppingCartRepo;

@Service
@Transactional
public class ShoppingCartDaoImpl {
	@Autowired
	ShoppingCartRepo shoppingCartRepo;
	
	@Autowired
	CartItemRepo cartItemRepo;
	
	@Autowired
	UserDaoImpl userDaoImpl;
	
	@Autowired
	PizzaDaoImpl pizzaDaoImpl;
	
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	OrderItemRepo orderItemRepo;
	
	@Autowired
	AddressRepo addressRepo;
	
	
	public ShoppingCart addToCart(long user_id, long pizza_id){
		Pizza pizza = pizzaDaoImpl.getByID(pizza_id);
		System.out.println("Got pizza: "+pizza);
		ShoppingCart cart = shoppingCartRepo.findByCartOwnerId(user_id);
		System.out.println("Got cart: "+cart);
		CartItem cartItem = cartItemRepo.findByPizzaIdAndCartId(pizza_id, cart.getId());
		System.out.println("GotCartItem: "+cartItem);
		
		if(cartItem == null) {
			cartItem = new CartItem();
			cartItem.setPizza(pizza);
			cartItem.setCart(cart);
			System.out.println("New cartItem created: "+cartItem);
			cartItemRepo.save(cartItem);
		}
		
		int newQuantity = cartItem.getQuantity();
		newQuantity++;
		System.out.println("Quantity: "+newQuantity);
		System.out.println("Pizza Price: "+pizza.getPrice());
		double newPrice = (newQuantity * pizza.getPrice());
		System.out.println("Total Price: "+newPrice);
		cartItem.setTotalPrice(newPrice);
		cartItem.setQuantity(newQuantity);
		
		System.out.println("new cartItem is ready" +cartItem);
		System.out.println("new cartItem is saved" +cartItem);

		System.out.println("new cart saved: "+shoppingCartRepo.save(cart));
		
		ShoppingCart updatedCart = this.updateCart(cart);
		
		return shoppingCartRepo.save(updatedCart);
	}
	
	public ShoppingCart removeFromCart(long user_id, long pizza_id){
		Pizza pizza = pizzaDaoImpl.getByID(pizza_id);
		System.out.println("Got pizza: "+pizza);
		ShoppingCart cart = shoppingCartRepo.findByCartOwnerId(user_id);
		System.out.println("Got cart: "+cart);
		CartItem cartItem = cartItemRepo.findByPizzaIdAndCartId(pizza_id, cart.getId());
		System.out.println("GotCartItem: "+cartItem);
		
		if(cartItem == null) {
			System.out.println("Quantity is zero");
			return cart;
		}
		
		int newQuantity = cartItem.getQuantity();
		
		if(newQuantity==1) {
			System.out.println("Quantity is Zero!");
			cartItemRepo.delete(cartItem);
			System.out.println("deleted cart item: "+cart);
			ShoppingCart updatedCart = this.updateCart(cart);
			System.out.println("Updated cart: "+updatedCart);
			return shoppingCartRepo.save(updatedCart);
		}else if(newQuantity<=0){
			throw new ResourceNotFoundException("Quantity less than zero");
		}else{
		newQuantity--;
		} 
		
		System.out.println("Quantity: "+newQuantity);
		System.out.println("Pizza Price: "+pizza.getPrice());
		double newPrice = (newQuantity * pizza.getPrice());
		System.out.println("Total Price: "+newPrice);
		cartItem.setTotalPrice(newPrice);
		cartItem.setQuantity(newQuantity);
		
		System.out.println("new cartItem is ready" +cartItem);
		cartItemRepo.save(cartItem);
		
		System.out.println("new cartItem is saved" +cartItem);
		System.out.println("new cart saved: "+shoppingCartRepo.save(cart));
		
		ShoppingCart updatedCart = this.updateCart(cart);
		return shoppingCartRepo.save(updatedCart);
	}	
	
	public ShoppingCart addCartToUser(User user) {
		ShoppingCart cart = new ShoppingCart();
	    cart.setCartOwner(user);
	    shoppingCartRepo.save(cart);
	    return cart;
	}
	
	public ShoppingCart updateCart(ShoppingCart cart) {
		List<CartItem> cartItems = cartItemRepo.findByCartId(cart.getId());
		Double cartPrice=0.0;
		int count = 0;
		for (CartItem item : cartItems) {
			cartPrice += item.getTotalPrice();
			count++;
        }
		cart.setTotalCartPrice(cartPrice);
		cart.setTotalItems(count);
		
		return cart;
	}
	
//	public Order checkout(ShoppingCart sentCart) {
//		/* Step 1. Get list of cart items
//		 * step 2. create new order
//		 * step 3. create new order item for each order - in loop
//		 * step 4. copy each cart item to order items - in loop
//		 * Step 5. delete cart item - in loop
//		 * step 5. copy additional info (total price etc) to orders
//		 * step 6. update the cart (total price, count etc)
//		 * step 7. save updated cart to DB
//		 * step 8. save & return order
//		 */
//		Order order = new Order();
//		ShoppingCart cart = shoppingCartRepo.findById(sentCart.getId()).orElse(null) ; 
//		List<CartItem>cartItems = cartItemRepo.findByCartId(cart.getId());
//		System.out.println("cartItems in order "+cartItems);
//		if (cartItems.isEmpty()) {
//			System.out.println("order cannot be placed with empty cart");
//			return null;
//		}
//		
//		System.out.println("Before loop");
//		System.out.println("Got cart items: "+cartItems);
//		for (CartItem cartItem : cartItems) {
//			OrderItem orderItem = new OrderItem();
//			orderItem.setOrder(order);
//			orderItem.setPizza(cartItem.getPizza());
//			orderItem.setQuantity(cartItem.getQuantity());
//			orderItem.setTotalPrice(cartItem.getTotalPrice());
//			order.getOrderItems().add(orderItem);
//			System.out.println("Order Item Saved");
//			cartItemRepo.delete(cartItem);
//        }
//		System.out.println("After loop" +cart);
//		
//		order.setCartOwner(cart.getCartOwner());
//		order.setTotalItems(cart.getTotalItems());
//		order.setTotalOrderPrice(cart.getTotalCartPrice());
//		order.setStatus(DeliveryStatus.PLACED);
//		
//		ShoppingCart updatedCart = this.updateCart(cart);
//		shoppingCartRepo.save(updatedCart);
//		
//		return orderRepo.save(order);
//	}
	
	public Order checkout(long user_id, long address_id, String paymentType, 
			double discount, double deliveryPrice, double taxAmount) {
		/* Step 1. Get list of cart items
		 * step 2. create new order
		 * step 3. create new order item for each order - in loop
		 * step 4. copy each cart item to order items - in loop
		 * Step 5. delete cart item - in loop
		 * step 5. copy additional info (total price etc) to orders
		 * step 6. update the cart (total price, count etc)
		 * step 7. save updated cart to DB
		 * step 8. save & return order
		 */
		User user = userDaoImpl.getByID(user_id);
		Address address = addressRepo.findById(address_id).orElse(null);
		
		Order order = new Order();
		ShoppingCart cart = shoppingCartRepo.findByCartOwnerId(user.getId());
		List<CartItem>cartItems = cartItemRepo.findByCartId(cart.getId());
		System.out.println("cartItems in order "+cartItems);
		if (cartItems.isEmpty()) {
			System.out.println("order cannot be placed with empty cart");
			return null;
		}
		
		System.out.println("Before loop");
		System.out.println("Got cart items: "+cartItems);
		for (CartItem cartItem : cartItems) {
			OrderItem orderItem = new OrderItem();
			orderItem.setOrder(order);
			orderItem.setPizza(cartItem.getPizza());
			orderItem.setQuantity(cartItem.getQuantity());
			orderItem.setTotalPrice(cartItem.getTotalPrice());
			order.getOrderItems().add(orderItem);
			System.out.println("Order Item Saved");
			cartItemRepo.delete(cartItem);
        }
		System.out.println("After loop" +cart);
		
		order.setCartOwner(cart.getCartOwner());
		order.setTotalItems(cart.getTotalItems());
		order.setCartPrice(cart.getTotalCartPrice());
		
		order.setStatus(DeliveryStatus.PLACED);
		order.setAddress(address);
		order.setDiscount(discount);
		order.setDeliveryPrice(deliveryPrice);
		order.setPaymentType(paymentType);
		order.setTaxAmount(taxAmount);
		
		
		order.setTotalOrderPrice(cart.getTotalCartPrice()+deliveryPrice+taxAmount-discount);
		ShoppingCart updatedCart = this.updateCart(cart);
		shoppingCartRepo.save(updatedCart);
		
		return orderRepo.save(order);
	}
	
	
	public ShoppingCart getCartByUserID(long user_id) {
		return shoppingCartRepo.findByCartOwnerId(user_id);
	}

	public List<CartItem> getCartItemsByCartID(long cart_id) {
		return cartItemRepo.findByCartId(cart_id);
	}
	
//	public List<CartItem> getCartItemsByUserId(long user_id) {
//		return shoppingCartRepo.findByCartOwnerId(user_id);
//	}
	
	public void deleteCartItemById(long id) {
		CartItem item = cartItemRepo.findById(id).orElse(null);
		ShoppingCart cart = item.getCart();
		cartItemRepo.deleteById(id);
		this.updateCart(cart);
	}

}
