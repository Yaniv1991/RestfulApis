package com.jbt.gilandyaniv.CouponSystemProject.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer> {

	boolean existsByEmailAndPassword(String email,String password);
	
	Optional<Customer> findByName(String name);
	
	Optional<Customer> findByEmailAndPassword(String email,String password);
}
