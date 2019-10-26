package com.gilandyaniv.IncomeMicroservice;

import static org.junit.Assert.assertTrue;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import com.gilandyaniv.IncomeMicroservice.beans.Income;
import com.gilandyaniv.IncomeMicroservice.beans.IncomeType;
import com.gilandyaniv.IncomeMicroservice.repository.IncomeRepositoryTemplate;

@RunWith(SpringRunner.class)
@DataJpaTest
@TestPropertySource("classpath:test.properties")
public class IncomeMicroserviceApplicationTests {

	@Autowired
	private IncomeRepositoryTemplate incomeRepositoryTemplate;
	

	@Test
	public void whenCreatingIncomeFromCompany_thenFindIncome() {
		Income income1 = newCouponIncome("Company 1",IncomeType.COMPANY_CREATED_COUPON);
		Income income2 = newCouponIncome("Company 1",IncomeType.COMPANY_CREATED_COUPON);
		
		incomeRepositoryTemplate.storeIncome(income1);
		incomeRepositoryTemplate.storeIncome(income2);
		
		List<Income> incomes = (List<Income>) incomeRepositoryTemplate.viewIncomeByCompany("Company 1");
		assertTrue(incomes.size() == 2);
		
	}
	
	@Test
	public void whenCreatingIncomeFromCustomer_thenFindIncome() {
		Income income1 = newCouponIncome("Customer 3",IncomeType.CUSTOMER_PURCHASED_COUPON);
		Income income2 = newCouponIncome("Customer 3",IncomeType.CUSTOMER_PURCHASED_COUPON);
		
		incomeRepositoryTemplate.storeIncome(income1);
		incomeRepositoryTemplate.storeIncome(income2);
		
		List<Income> incomes = (List<Income>) incomeRepositoryTemplate.viewIncomeByCompany("Customer 3");
		assertTrue(incomes.size() == 2);
		
	}
	
	@Test
	public void whenCreatingVariousIncomes_thenFindAllIncome() {
		List<Income> incomes = new ArrayList<Income>();
		incomes.add(newCouponIncome("Customer 4", IncomeType.CUSTOMER_PURCHASED_COUPON));
		incomes.add(newCouponIncome("Customer 4", IncomeType.CUSTOMER_PURCHASED_COUPON));
		
		incomes.add(newCouponIncome("Company 6", IncomeType.COMPANY_CREATED_COUPON));
		incomes.add(newCouponIncome("Company 6", IncomeType.COMPANY_CREATED_COUPON));
		incomes.add(newCouponIncome("Company 6", IncomeType.COMPANY_UPDATED_COUPON));
		
		incomes.add(newCouponIncome("Company 2", IncomeType.COMPANY_CREATED_COUPON));
		
		for (Income income : incomes) {
			incomeRepositoryTemplate.storeIncome(income);
		}
		
		assertTrue(incomes.size() == incomeRepositoryTemplate.viewAllIncome().size());
	}


	private Income newCouponIncome(String name,IncomeType incomeType) {
		Income income = new Income();
		income.setAmount(100);
		income.setDate(LocalDate.now());
		income.setName(name);
		income.setType(incomeType);
		return income;
	}
}
