package com.pizzadelivery.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "carts")
@Getter
@Setter
@ToString(exclude = {"cartOwner","cartItems"})
public class ShoppingCart extends BaseEntity {
//totalItems,totalCartPrice,createdOn,updatedOn
	
	@Column(name = "total_items")
	private int totalItems;
	
	@Column(name = "total_cart_price")
	private double totalCartPrice;
	
	@CreationTimestamp // hib annotation to add creation date auto : once @ time of saving the entity
	@Column(name = "created_on")
	private LocalDate createdOn;
	
	@UpdateTimestamp // hib annotation to update the date auto : @ time of updating cart
	@Column(name = "last_updated_on")
	private LocalDate lastUpdatedOn;
	
	// Cart HAS-A Customer Cart ----> User
	// Cart : one , child , owning
	@OneToOne // def fetch type : EAGER
	@JoinColumn(name = "user_id", nullable = false)
	private User cartOwner;
	
// Removed bi-directional relationship with cartitems	
	
	// Cart *--->* Product	
	//Cart ---> CartItems : one to many
	//one , parent , inverse
//	@OneToMany(mappedBy = "cart",cascade = CascadeType.ALL,orphanRemoval = true)
////	@JsonManagedReference
//	@JsonBackReference
//	private List<CartItem> cartItems=new ArrayList<>();
	
}
