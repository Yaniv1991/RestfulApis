package com.gilandyaniv.IncomeMicroservice.repository;

import java.util.Collection;

import org.springframework.stereotype.Repository;

import com.gilandyaniv.IncomeMicroservice.beans.Income;

@Repository
public interface IncomeRepositoryTemplate{

	void storeIncome(Income income);
	Collection<Income> viewAllIncome();
	
	Collection<Income> viewIncomeByCustomer(long customerId);
	Collection<Income> viewIncomeByCompany(long companyId);
}
