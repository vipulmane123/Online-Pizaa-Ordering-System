package com.pizzadelivery.pojos;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "offers")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Offer extends BaseEntity{
	
	private String name;
	
	private int discount;
	
	private Date valid_upto;
	
	private Date valid_from;
	
	@Column(length = 50, unique = true)
	private String code;
	
	@Column(length = 1000)
	private String terms_conditions;

}
