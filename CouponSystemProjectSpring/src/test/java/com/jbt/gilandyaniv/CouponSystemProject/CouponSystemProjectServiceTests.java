package com.jbt.gilandyaniv.CouponSystemProject;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Customer;
import com.jbt.gilandyaniv.CouponSystemProject.exceptions.CouponSystemException;
import com.jbt.gilandyaniv.CouponSystemProject.rest.controllers.Credentials;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.AdminService;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.ClientType;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CompanyService;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CustomerService;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.LoginService;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = CouponSystemProjectApplication.class)
@AutoConfigureTestDatabase(replace = Replace.NONE)
@AutoConfigureDataJpa()
@TestPropertySource("classpath:test.properties")
@DirtiesContext(classMode = ClassMode.BEFORE_EACH_TEST_METHOD)

//TODO test sql constraints
public class CouponSystemProjectServiceTests {


	public static int counter = 0;

	public static String mockName() {
		return "name" + counter++;
	}

//	@Before
//	public void setup() {
//		couponRepository.deleteAll();
//		customerRepository.deleteAll();
//		companyRepository.deleteAll();
//	}
//
//	@Autowired
//	private CustomerRepository customerRepository;
//
//	@Autowired
//	private CouponRepository couponRepository;
//
//	@Autowired
//	private CompanyRepository companyRepository;
//

	@Autowired
	private AdminService adminService = new AdminService();

	@Autowired
	private LoginService loginService = new LoginService();
	
	@Test(expected = Exception.class)
	@Transactional
	public void whenCustomerPurchasesExpiredCoupon_thenThrowException() throws CouponSystemException {
		Company company = newCompany();
		adminService.addCompany(company);

		Customer customer = newCustomer();
		adminService.addCustomer(customer);
		
		CompanyService companyService =login(company);
		
		
		Coupon coupon = newCoupon(company);
		coupon.setEndDate(LocalDate.now().minusYears(2));
		companyService.createCoupon(coupon);
		
		CustomerService customerService = login(customer);
		
		customerService.purchaseCoupon(coupon.getId());
		
		
	}

	
	private  Company newCompany(String name,String email,String password) {
		Company company = new Company();
		company.setName(name);
		company.setEmail(email);
		company.setPassword(password);
		return company;
	}
	
	private Company newCompany(String name) {
		return newCompany(name,name,name);
	}
	
	private Company newCompany() {
		return newCompany("a","a","a");
	}
	
	private Coupon newCoupon(Company company) {
		Coupon coupon = new Coupon();
		coupon.setCompany(company);
		coupon.setTitle(mockName());
		coupon.setAmount(30);
		coupon.setPrice(60D);
		return coupon;
	}
	
	private Customer newCustomer() {
		return newCustomer(mockName());
	}

	private Customer newCustomer(String name) {
		Customer customer= new  Customer();
		customer.setName(name);
		customer.setEmail(name);
		customer.setPassword(name);
		return customer;
	}
	
	private CompanyService login(Company company) {
		Credentials credentials = new Credentials();
		credentials.setClientType(ClientType.COMPANY);
		credentials.setEmail(company.getEmail());
		credentials.setPassword(company.getPassword());
		return (CompanyService)loginService.login(credentials);
	}

	private CustomerService login(Customer customer) {
		Credentials credentials = new Credentials();
		credentials.setClientType(ClientType.CUSTOMER);
		credentials.setEmail(customer.getEmail());
		credentials.setPassword(customer.getPassword());
		return (CustomerService)loginService.login(credentials);
	}
}
