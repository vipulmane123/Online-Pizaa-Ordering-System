package com.pizzadelivery.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.pizzadelivery.pojos.BaseEntity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "categories")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "pizzas")
public class Category extends BaseEntity {
	@Column(name = "category_name", length = 30, unique = true)
	private String categoryName;
	@Column(length = 100)
	private String description;
	
	//Removed Bidirectional relationship with pizza
//	// one to many : Category 1 ----->* Product
//	//Category : one , parent ,inverse 
//	@OneToMany(mappedBy = "pizzaCategory", 
//			cascade = CascadeType.ALL, orphanRemoval = true/*
//															 * , fetch = FetchType.EAGER
//															 */) // Mandatory
//																														// annotation
//																														// to
//																														// specify
//																														// one-->
//																														// many
//																														// multiplicity
//	// mappedBy -- mandatory for bi-dir asso. Appears in the inverse(one) side pf
//	// the asso.
//	// value : name of the asso property , as it appears owning side
//	private List<Pizza> pizzas = new ArrayList<>();// Tip : init the collection!

	
	public Category(String categoryName, String description) {
		super();
		this.categoryName = categoryName;
		this.description = description;
	}

	}
