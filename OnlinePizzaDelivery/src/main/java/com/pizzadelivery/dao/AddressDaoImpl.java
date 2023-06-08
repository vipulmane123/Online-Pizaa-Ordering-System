package com.pizzadelivery.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pizzadelivery.pojos.Address;
import com.pizzadelivery.pojos.Pizza;
import com.pizzadelivery.repo.AddressRepo;

@Service
@Transactional
public class AddressDaoImpl implements AddressDao {
	
	@Autowired
	AddressRepo addressRepo;
	
	@Override
	public Address addAddress(Address address) {
		addressRepo.save(address);
		return address;
	}
	
	public List<Address> findAllAddress(){
		return addressRepo.findAll();
	}
	

	public void deleteAddressById(long id) {
		addressRepo.deleteById(id);
	}

	
	public List<Address> getAddressByUser(long id) {
		return addressRepo.findByUserId(id);
	}
	
	@Override
	public Optional<Address> addressByID(long id) {
		return addressRepo.findById(id);
	}
	

}
