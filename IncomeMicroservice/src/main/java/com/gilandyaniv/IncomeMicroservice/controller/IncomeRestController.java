package com.gilandyaniv.IncomeMicroservice.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gilandyaniv.IncomeMicroservice.beans.Income;
import com.gilandyaniv.IncomeMicroservice.beans.IncomeType;
import com.gilandyaniv.IncomeMicroservice.repository.IncomeRepositoryTemplate;

@RestController
@RequestMapping("Income")
public class IncomeRestController {

	@Autowired
	private IncomeRepositoryTemplate incomeRepositoryTemplate;

	@Value("${income.coupon.created}")
	private String CompanyCreateCouponAmount;
	
	@Value("${income.coupon.updated}")
	private String CompanyUpdateCouponAmount;

	
	@PostMapping("Customer/StoreIncome/{amount}")
	public ResponseEntity<Object> storeCustomerIncome(@PathVariable("amount") double amount,
			@RequestBody long clientId) {
		return storeIncome(amount, "Customer " + clientId, IncomeType.CUSTOMER_PURCHASED_COUPON);
	}

	@PostMapping("Company/CreateCoupon")
	public ResponseEntity<Object> CompanyCreatedACoupon(@RequestBody long clientId){
		return storeIncome(100,"Company " + clientId,IncomeType.COMPANY_CREATED_COUPON);
	}
	
	
	@PostMapping("Company/UpdateCoupon")
	public ResponseEntity<Object> CompanyUpdatedACoupon(@RequestBody long clientId){
		return storeIncome(10,"Company " + clientId,IncomeType.COMPANY_UPDATED_COUPON);
	}
	
	
	@GetMapping("Admin/ViewAllIncome")
	public ResponseEntity<Object> adminRequestedAllIncome(){
		try {
			return new ResponseEntity<Object>(incomeRepositoryTemplate.viewAllIncome(), HttpStatus.OK);
		}
		catch(Exception e) {
			return errorResponse(e);
		}
	}
	@GetMapping("Admin/ViewIncomeByCustomer/{id}")
	public ResponseEntity<Object> adminRequestedIncomeByCustomer(@PathVariable long id){
		try {
			return new ResponseEntity<Object>(incomeRepositoryTemplate.viewIncomeByCustomer("Customer " + id),HttpStatus.OK);
		}
		catch(Exception e) {
			return errorResponse(e);
		}
	}
	@GetMapping("Company/ViewIncome/{id}")
	public ResponseEntity<Object> CompanyRequestedAllIncome(@PathVariable long id){
		try {
			return new ResponseEntity<Object>(incomeRepositoryTemplate.viewIncomeByCompany("Company " + id),HttpStatus.OK);
		}
		catch(Exception e) {
			return errorResponse(e);
		}
	}
	
	
	private ResponseEntity<Object> storeIncome(double amount, String clientName, IncomeType type) {
		try {
			Income income = new Income();
			income.setAmount(amount);
			income.setName(clientName);
			income.setDate(LocalDate.now());
			income.setType(type);
			incomeRepositoryTemplate.storeIncome(income);
			System.out.println("Stored income " + income);
			return new ResponseEntity<Object>(HttpStatus.OK);
		} catch (Exception e) {
			return errorResponse(e);
		}
	}

private ResponseEntity<Object> errorResponse(Exception e) {
	return new ResponseEntity<Object>(e.getMessage() + "at " + e.getStackTrace()[1], HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
