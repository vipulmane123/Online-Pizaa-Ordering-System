package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzadelivery.pojos.Offer;
import com.pizzadelivery.repo.OfferRepo;

@Component
public class OfferDaoImpl {
	@Autowired
	OfferRepo offerRepo;
	
	public Offer addOffer(Offer offer) {
		offerRepo.save(offer);
		return offer;
	}
	
	public List<Offer> findAllOffer() {
		return offerRepo.findAll();
	}
	
	//code by ashraf
	
public Optional<Offer> OfferByID(Long id) {
		
		System.out.println("Finding the offer with the Id: "+ id);
		return offerRepo.findById(id);
	}
	
	public void deleteofferByID(Long id)
	{
		System.out.println("Finding the offer with the Id: "+ id);
		offerRepo.deleteById(id);
	}
	
	public Offer updateOffer(Offer offer) {
		Offer updOff = this.offerRepo.findById(offer.getId()).orElse(null);
		updOff.setName(offer.getName());
		updOff.setDiscount(offer.getDiscount());
		updOff.setValid_upto(offer.getValid_upto());
		updOff.setValid_from(offer.getValid_from());
		updOff.setCode(offer.getCode());
		updOff.setTerms_conditions(offer.getTerms_conditions());
		
		return offerRepo.save(updOff);
	}
	

}
