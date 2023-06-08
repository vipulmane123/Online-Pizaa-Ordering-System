package com.pizzadelivery.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pizzadelivery.pojos.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "order_items")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude ="pizza_id")
public class OrderItem extends BaseEntity {
	
//quantity , totalPrice , cart , product
	private int quantity;
	
	@Column(name = "total_price")
	private double totalPrice;
	
	// Cart 1<---* CartItem
	@ManyToOne
	@JoinColumn(name = "order_id", nullable = false)
	@JsonIgnore
	private Order order;
	
	// CartItem 1---->1 Product
	@OneToOne
	@JoinColumn(name="pizza_id")
	private Pizza pizza;
	
}
