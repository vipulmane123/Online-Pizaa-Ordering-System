package com.pizzadelivery.dao;

import java.util.Optional;

import com.pizzadelivery.pojos.Address;
import com.pizzadelivery.pojos.Pizza;

public interface AddressDao {
	public Address addAddress(Address address);

//	public Optional<Address> getAddress(long id);

	void deleteAddressById(long id);

	Optional<Address> addressByID(long id);
}
