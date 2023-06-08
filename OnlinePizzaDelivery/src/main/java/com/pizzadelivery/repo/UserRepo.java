package com.pizzadelivery.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizzadelivery.pojos.User;

public interface UserRepo extends JpaRepository<User, Long> {
	Optional<User> findByEmailAndPassword(String email, String password);

}
