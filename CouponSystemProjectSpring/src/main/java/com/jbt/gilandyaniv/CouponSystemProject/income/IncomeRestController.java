//package com.jbt.gilandyaniv.CouponSystemProject.income;
//
//import java.time.LocalDate;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("Income")
//public class IncomeRestController {
//
//	@Autowired
//	private IncomeRepository repository;
//
//	@PostMapping("Customer/StoreIncome/{amount}")
//	public ResponseEntity<Object> storeCustomerIncome(@PathVariable("amount") double amount,
//			@RequestBody long clientId) {
//		return storeIncome(amount, clientId, IncomeType.CUSTOMER_PURCHASE);
//	}
//
//	@PostMapping("Company/CreateCoupon")
//	public ResponseEntity<Object> CompanyCreatedACoupon(@RequestBody long clientId){
//		return storeIncome(100,clientId,IncomeType.COMPANY_NEW_COUPON);
//	}
//	
//	
//	@PostMapping("Company/UpdateCoupon")
//	public ResponseEntity<Object> CompanyUpdatedACoupon(@RequestBody long clientId){
//		return storeIncome(10,clientId,IncomeType.COMPANY_UPDATE_COUPON);
//	}
//	
////	@PostMapping("StoreIncome/{amount}&{clientId}")
//	private ResponseEntity<Object> storeIncome(double amount, long clientId, IncomeType type) {
//		try {
//			Income income = new Income();
//			income.setAmount(amount);
//			income.setCustomerId(clientId);
//			income.setDate(LocalDate.now());
//			income.setDescription(type);
//			repository.save(income);
//			return new ResponseEntity<Object>(HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//
//}
