package com.pizzadelivery.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pizzadelivery.pojos.Review;

public interface ReviewsRepo extends JpaRepository<Review, Long> {

	List<Review> findByPizzaId(long id);

	List<Review> findByUserId(long id);

}
