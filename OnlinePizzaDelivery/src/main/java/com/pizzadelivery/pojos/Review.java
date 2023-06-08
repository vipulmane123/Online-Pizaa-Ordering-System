package com.pizzadelivery.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.print.attribute.standard.DateTimeAtCompleted;
import javax.print.attribute.standard.DateTimeAtCreation;

import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "reviews")
@Getter
@Setter
@ToString(exclude = {"user_id","pizza_id"})
public class Review extends BaseEntity {
	//review, rating, user, pizza, postedOn
	@Column(name = "review", length = 1000)
	private String review;
	
	@Column(name = "rating", nullable = false)
	private float rating;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "pizza_id", nullable = false)
	private Pizza pizza;
	
	@UpdateTimestamp // hib annotation to update the date auto : @ time of updating cart
	@Column(name = "posted_on")
	private LocalDate postedOn;
	

}
