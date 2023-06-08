package com.pizzadelivery.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "orders")
@Getter
@Setter
@ToString(exclude = {"user_id", "address_id", "user_id"})
public class Order extends BaseEntity{
	
		@Column(name = "total_items")
		private int totalItems;
		
		@Column(name = "total_cart_price")
		private double totalOrderPrice;
		
		@CreationTimestamp // hib annotation to add creation date auto : once @ time of saving the entity
		@Column(name = "created_on")
		private LocalDate orderOreatedOn;
		
		// Cart HAS-A Customer Cart ----> User
		// Cart : one , child , owning
		@ManyToOne // def fetch type : EAGER
		@JoinColumn(name = "user_id", nullable = false)
		private User cartOwner;
		
		
		//Removed bi-directional mapping with orders
		// Cart *--->* Product	
		//Cart ---> CartItems : one to many
		//one , parent , inverse
		@OneToMany(mappedBy = "order",cascade = CascadeType.ALL,orphanRemoval = true)
		private List<OrderItem> orderItems=new ArrayList<>();
		
		
		@CreationTimestamp // hib annotation to add creation date auto : once @ time of saving the entity
		@Column(name = "placed_on")
		private LocalDate placedOn;
		
		@Column(name = "delivery_status")
		@Enumerated(EnumType.STRING)
		private DeliveryStatus status;
		
//		@ManyToOne // def fetch type : EAGER
//		@JoinColumn(name = "user_id")
//		private User delivery_partner;
		
		@ManyToOne
		@JoinColumn(name = "address_id")
		private Address address;
		
		@Column(name = "delivery_price")
		private double deliveryPrice;
		
		private double discount;
		
		@Column(name = "payment_type")
		private String paymentType;
		
		@Column(name = "tax_amount")
		private double taxAmount;
		
		@Column(name = "cart_price")
		private double cartPrice;
	
}
