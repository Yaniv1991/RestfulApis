package com.gilandyaniv.IncomeMicroservice;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import com.gilandyaniv.IncomeMicroservice.beans.Income;
import com.gilandyaniv.IncomeMicroservice.beans.IncomeType;
import com.gilandyaniv.IncomeMicroservice.service.IncomeService;

@RunWith(SpringRunner.class)
@DataJpaTest
@ComponentScan(basePackageClasses = IncomeMicroserviceApplication.class)
@TestPropertySource("classpath:test.properties")
public class IncomeMicroserviceServiceTests {

	@Autowired
	private IncomeService incomeService;
	

	@Test
	public void whenCreatingIncomeFromCompany_thenFindIncome() throws Exception {
		Income income1 = storeIncome(1,IncomeType.COMPANY_CREATED_COUPON);
		Income income2 = storeIncome(1,IncomeType.COMPANY_CREATED_COUPON);
		
		
		
		List<Income> incomes = (List<Income>) incomeService.viewIncomeByCompany(1);
		assertTrue(incomes.size() == 2);
		
	}
	
	@Test
	public void whenCreatingIncomeFromCustomer_thenFindIncome() throws Exception {
		Income income1 = storeIncome(3,IncomeType.CUSTOMER_PURCHASED_COUPON);
		Income income2 = storeIncome(3,IncomeType.CUSTOMER_PURCHASED_COUPON);
		
		
		List<Income> incomes = (List<Income>) incomeService.viewIncomeByCustomer(3);
		assertTrue(incomes.size() == 2);
		
	}
	
	@Test
	public void whenCreatingVariousIncomes_thenFindAllIncome() throws Exception {
		List<Income> incomes = new ArrayList<Income>();
		incomes.add(storeIncome(4, IncomeType.CUSTOMER_PURCHASED_COUPON));
		incomes.add(storeIncome(4, IncomeType.CUSTOMER_PURCHASED_COUPON));
		
		incomes.add(storeIncome(6, IncomeType.COMPANY_CREATED_COUPON));
		incomes.add(storeIncome(6, IncomeType.COMPANY_CREATED_COUPON));
		incomes.add(storeIncome(6, IncomeType.COMPANY_UPDATED_COUPON));
		
		incomes.add(storeIncome(2, IncomeType.COMPANY_CREATED_COUPON));
		
	
		assertTrue(incomes.size() == incomeService.viewAllIncome().size());
	}


	private Income storeIncome(long id,IncomeType incomeType) throws Exception {
		
	return	incomeService.storeIncome(100, id, incomeType);
	}
}
