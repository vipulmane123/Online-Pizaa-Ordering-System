package com.pizzadelivery.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizzadelivery.pojos.Offer;

public interface OfferRepo extends JpaRepository<Offer, Long> {

}
