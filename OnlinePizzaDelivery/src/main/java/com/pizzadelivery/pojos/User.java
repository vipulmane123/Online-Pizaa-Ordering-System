package com.pizzadelivery.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "users")
@Entity
public class User extends BaseEntity{
	@Length (min=4,max=20,message="Invalid or Blank first Name!!")
	@Column(name="first_name", length = 50)
	private String first_name;
	
	@Column(name="last_name", length = 50)
	private String last_name;
	
	@Column(length = 50, unique = true)
	private String email;
	
	@Column(length = 50, nullable = false)
	private String password;
	
	@Column(length = 10, unique = true)
	private String mobile_no;
	
	@Enumerated(EnumType.STRING) // col type : varchar (enum const name)
	@Column(name = "user_role", length = 30)
	private Role userRole;
	
//	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
//	@JsonBackReference
//	@ToString.Exclude
//	private List<Address> addresses = new ArrayList<>();
//
//	public User setAddresses(Address address) {
//		this.addresses.add(address);
//		return this;
//	}
	
//	@OneToOne(mappedBy = "cartOwner", cascade = CascadeType.ALL, orphanRemoval = true)
//	private ShoppingCart cart;
	
//	public void addCart(ShoppingCart cart) {
//		this.cart = cart;
//		cart.setCartOwner(this);// bi dir asso done !
//	}
	
	
}
