package com.gilandyaniv.IncomeMicroservice.service;

import java.time.LocalDate;
import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gilandyaniv.IncomeMicroservice.beans.Income;
import com.gilandyaniv.IncomeMicroservice.beans.IncomeType;
import com.gilandyaniv.IncomeMicroservice.repository.IncomeRepository;

/**
 * REST service to handle all Income related operations.
 * Utilizes an IncomeRepository object to handle all db related transactions.
 * @authors Yaniv Chen, Gil Gouetta & Yair Sher
 */

@Service
public class IncomeService {

	@Autowired
	private IncomeRepository incomeRepository;
	
	@Transactional
	public Income storeIncome(double amount, long clientId, IncomeType type) throws Exception{
			Income income = new Income();
			income.setAmount(amount);
			income.setDate(LocalDate.now());
			income.setType(type);
			
			income.setName((type == IncomeType.CUSTOMER_PURCHASED_COUPON? "Customer " : "Company ") + clientId);
			incomeRepository.storeIncome(income);
			return income;
	}
	
	public Collection<Income> viewIncomeByCompany(long companyId){
		return incomeRepository.viewIncomeByCompany("Company " + companyId);
	}
	
	public Collection<Income> viewIncomeByCustomer(long customerId){
		return incomeRepository.viewIncomeByCustomer("Customer " + customerId);
	}
	
	public Collection<Income> viewAllIncome(){
		return incomeRepository.viewAllIncome();
	}
}
