package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzadelivery.pojos.Review;
import com.pizzadelivery.repo.ReviewsRepo;

@Component
public class ReviewsDaoImpl implements ReviewsDao {

	
	@Autowired                                                                                                                                                                                                                        
	ReviewsRepo reviewsRepo;
	
	@Override
	public Review addReview(Review review) {
		reviewsRepo.save(review);
		return review;
	}


	public List<Review> findAllReview() {
		return reviewsRepo.findAll();
	}


	@Override
	public Optional<Review> getReview(long id) {
		return reviewsRepo.findById(id);
	}


	@Override
	public void deleteReviewById(long id) {
		reviewsRepo.deleteById(id);
		
	}


	public List<Review> findReviewByProduct(long id) {
		return reviewsRepo.findByPizzaId(id);
	}


	public List<Review> findReviewByUser(long id) {
		return reviewsRepo.findByUserId(id);
	}
	
}
