package com.pizzadelivery.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "cart_items")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude ="pizza")
public class CartItem extends BaseEntity {
	
	private int quantity;
	
	@Column(name = "total_price")
	private double totalPrice;
	
	// Cart 1<---* CartItem
	@ManyToOne
	@JoinColumn(name = "cart_id", nullable = false)
//	@JsonBackReference
//	@JsonManagedReference
	@JsonIgnore
	private ShoppingCart cart;
	
	// CartItem 1---->1 Product
	@OneToOne
	@JoinColumn(name="pizza_id")
	private Pizza pizza;	
}
