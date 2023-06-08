package com.pizzadelivery.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Embeddable //mandatory cls level annotation to tell hib , following class DOES NOT have
			// independent ID , no inde. life cycle, contents are going to be embedded in
			// the owning entity!
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "address")
public class Address extends BaseEntity{
	
	@Column(name="city", length = 25)
	@NotBlank(message = "Last  name can't be blank")
	private String city;
	
	@Column(length = 25)
	@NotBlank(message = "Last  name can't be blank")
	private String country;
	
	@Column(length = 10)
	private String house_no;
	
	@Column(length = 10)
	@NotBlank(message = "Last  name can't be blank")
	private String pincode;
	
	@Column(length = 25)
	@NotBlank(message = "Last  name can't be blank")
	private String state;
	
	@Column(length = 50)
	private String street;
	
	@ManyToOne
	@JoinColumn(name="user_id",nullable = false)
	private User user;
	

}
