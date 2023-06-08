package com.pizzadelivery.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.Valid;

import com.pizzadelivery.pojos.Category;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "pizzas")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = {"productCategory", "reviews" } )
public class Pizza extends BaseEntity{
	@Column(name = "name")
	private String name;
	
	@Column(name = "price", nullable = false)
	private double price;
	
	@Column(name = "avg_rating", nullable = false)
	private float avg_rating;
	
	@Column (name = "summary")
	private String summary;
	
	@Column (name = "is_veg")
	private boolean isVeg;
	
	@Column(name="in_stock")
	private boolean inStock;
	
	
	@ManyToOne()
	@JoinColumn(name="category_id") //to specify FK col name
//	@JoinColumn(name="category_id",nullable = false) //to specify FK col name
	private Category pizzaCategory;
	
	
//  Removed bidirectional relationship with reviews
	
//	@OneToMany(mappedBy = "pizza", orphanRemoval = true)
//	private List<Review> reviews =new ArrayList<>();
	
	
//	public Pizza setPizzaCategory(Category category) {
//		this.pizzaCategory = category.pizzaCategory;
//		return category;
//		
//	}
	
	@Column(name = "image_path")
	private String imagePath;

	public Pizza(String name, double price, float avg_rating, String summary, boolean isVeg, boolean inStock) {
		super();
		this.name = name;
		this.price = price;
		this.avg_rating = avg_rating;
		this.summary = summary;
		this.isVeg = isVeg;
		this.inStock = true;
	}

	
	
//	public Pizza(String name, double price, float avg_rating, String summary, boolean isVeg, boolean inStock,
//			Category pizzaCategory) {
//		super();
//		this.name = name;
//		this.price = price;
//		this.avg_rating = avg_rating;
//		this.summary = summary;
//		this.isVeg = isVeg;
//		this.inStock = inStock;
//		this.pizzaCategory = new ;
//	}
	
	


}
