package com.jbt.gilandyaniv.CouponSystemProject.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company,Integer> {

	boolean existsByEmailAndPassword(String email,String password);
	
	Optional<Company> findByName(String name);
	
	Optional<Company> findByEmailAndPassword(String email,String password);
}
