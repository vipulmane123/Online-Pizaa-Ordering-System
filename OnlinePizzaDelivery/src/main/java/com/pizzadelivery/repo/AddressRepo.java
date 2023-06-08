package com.pizzadelivery.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizzadelivery.pojos.Address;

public interface AddressRepo extends JpaRepository<Address, Long> {
	List<Address> findByUserId(long id);
}
