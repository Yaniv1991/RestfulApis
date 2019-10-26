package com.gilandyaniv.IncomeMicroservice.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gilandyaniv.IncomeMicroservice.beans.Income;

@Repository
public interface IncomeRepositoryTemplate extends JpaRepository<Income, Integer>{

	
	default void storeIncome(Income income) {
		save(income);
	};
	
	
	default Collection<Income> viewAllIncome(){
		return findAll();
	};
	
	@Query("from Income where name = :customerName")
	Collection<Income> viewIncomeByCustomer(String customerName);
	
	
	@Query("from Income where name = :companyName")
	Collection<Income> viewIncomeByCompany(String companyName);
}
