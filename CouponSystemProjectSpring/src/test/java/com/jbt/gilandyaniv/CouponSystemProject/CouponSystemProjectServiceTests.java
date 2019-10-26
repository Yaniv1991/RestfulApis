package com.jbt.gilandyaniv.CouponSystemProject;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Customer;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CompanyRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CustomerRepository;
import com.jbt.gilandyaniv.CouponSystemProject.exceptions.CouponSystemException;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.AdminService;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CompanyService;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CustomerService;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = CouponSystemProjectApplication.class)
@DataJpaTest
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

	@Before
	public void setup() {
		couponRepository.deleteAll();
		customerRepository.deleteAll();
		companyRepository.deleteAll();
	}

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private CouponRepository couponRepository;

	@Autowired
	private CompanyRepository companyRepository;


	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private CompanyService companyService;
	
	@Autowired
	private AdminService adminService;

	@Test(expected = Exception.class)
	@Transactional
	public void whenCustomerPurchasesExpiredCoupon_thenThrowException() throws CouponSystemException {
		Company company = newCompany();

		adminService.addCompany(company);
		
		
		Coupon coupon = newCoupon(company);
		coupon.setEndDate(LocalDate.now().minusYears(2));
		companyService.createCoupon(coupon);
		
		
		Customer customer = newCustomer();
		customer.addCoupon(coupon);
		
	}

	
	private  Company newCompany() {
		return newCompany(mockName());
	}
	
	private Company newCompany(String name) {
		Company company = new  Company();
		company.setName(name);
		return company;
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
		return customer;
	}
}
