package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import com.pizzadelivery.pojos.Address;
import com.pizzadelivery.pojos.Review;

public interface ReviewsDao {
	public Review addReview(Review review);
	
	public Optional<Review> getReview(long id);
	
	public void deleteReviewById(long id);
	
	
}
