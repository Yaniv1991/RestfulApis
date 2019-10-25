package com.gilandyaniv.IncomeMicroservice.repository;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import com.gilandyaniv.IncomeMicroservice.beans.Income;

public class IncomeRepository implements IncomeRepositoryTemplate{

	private interface IncomeJpa extends JpaRepository<Income, Long>{	};
	
	@Autowired
	private IncomeJpa repository;
	@Override
	public void storeIncome(Income income) {
		repository.save(income);
	}

	@Override
	public Collection<Income> viewAllIncome() {
		return repository.findAll();
	}

	@Override
	public Collection<Income> viewIncomeByCustomer(long customerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Collection<Income> viewIncomeByCompany(long companyId) {
		// TODO Auto-generated method stub
		return null;
	}

}
