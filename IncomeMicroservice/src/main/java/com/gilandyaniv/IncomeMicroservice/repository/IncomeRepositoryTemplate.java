package com.gilandyaniv.IncomeMicroservice.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gilandyaniv.IncomeMicroservice.beans.Income;

@Repository
public interface IncomeRepositoryTemplate{

	void storeIncome(Income income);
	Collection<Income> viewAllIncome();
	
	@Query("from Income where name = Customer ?1")
	Collection<Income> viewIncomeByCustomer(String customerId);
	
	
	@Query("from Income where name = Company ?1")
	Collection<Income> viewIncomeByCompany(String companyId);
}
