package com.jbt.gilandyaniv.CouponSystemProject;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

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

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = CouponSystemProjectApplication.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@AutoConfigureDataJpa()
@TestPropertySource("classpath:test.properties")
@DirtiesContext(classMode = ClassMode.BEFORE_EACH_TEST_METHOD)
//TODO test sql constraints
public class CouponSystemProjectRepositoryTests {
//
//	
//	@Configuration
//	static class Config{
//		
//		@Bean
//		public  CustomerRepository customerRepository() {
//			return Mockito.mock(CustomerRepository.class);
//		}
//	}

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

	@Test
//	@Transactional
	public void whenFindByEmailAndPassword_thenReturnCustomer() {
		Customer newCust = new Customer();
		newCust.setEmail("mail3@mail.com");
		newCust.setPassword("pass1");
		newCust.setName(mockName());
		customerRepository.save(newCust);
		customerRepository.flush();
//		
		assertEquals(newCust, customerRepository.findByEmailAndPassword("mail3@mail.com", "pass1").get());
		customerRepository.delete(newCust);
	}

	@Test
	public void whenCreatingCompany_thenCompanyIsFound() {
		Company c = new Company();
		c.setName("name");
		companyRepository.save(c);

		assertEquals(c, companyRepository.findByName("name").get());

	}

	@Test(expected = Exception.class)
	public void whenCreatingCompanyWithSameName_thenThrowException() {
		String name = "name";
		Company c = new Company();
		c.setName(name);
		companyRepository.save(c);
		Company c2 = new Company();
		c2.setName(name);
		companyRepository.save(c2);

	}

	@Test(expected = Exception.class)
	public void whenCreatingCustomersWithSameName_thenThrowException() {
		String name = "name";
		Customer c = new Customer();
		c.setName(name);
		customerRepository.save(c);
		Customer c2 = new Customer();
		c2.setName(name);
		customerRepository.save(c2);

	}

	@Test(expected = Exception.class)
	public void whenCreatingCouponsWithSameName_thenThrowException() {
		String name = "name";
		Company c = new Company();
		c.setName(name);
		companyRepository.save(c);
		Coupon coupon = new Coupon();
		coupon.setCompany(c);
		coupon.setTitle(name);
		Coupon coupon2 = new Coupon();
		coupon2.setCompany(c);
		coupon2.setTitle(name);

		couponRepository.save(coupon);
		couponRepository.save(coupon2);
	}

	@Test(expected = Exception.class)
	public void whenUpdatingCouponPrice_thenThrowException() {
		String name = "name";
		Company c = new Company();
		c.setName(name);
		companyRepository.save(c);
		Coupon coupon = new Coupon();
		coupon.setCompany(c);
		coupon.setTitle(name);
		coupon.setPrice((double) 40);
		couponRepository.save(coupon);
		Coupon fromDb = couponRepository.findById(1).get();
		couponRepository.flush();
		fromDb.setPrice(20D);
//		couponRepository.save(fromDb);
//		couponRepository.flush();
		couponRepository.saveAndFlush(fromDb);
	}

	@Test(expected = Exception.class)
	public void whenUpdatingCouponEndDate_thenThrowException() {
		String name = "name";
		Company c = new Company();
		c.setName(name);
		companyRepository.save(c);
		Coupon coupon = new Coupon();
		coupon.setCompany(c);
		coupon.setTitle(name);
		coupon.setEndDate(LocalDate.now());
		couponRepository.save(coupon);
		Coupon fromDb = couponRepository.findById(1).get();
		couponRepository.flush();
		fromDb.setEndDate(LocalDate.now().plusMonths(4));
//		couponRepository.save(fromDb);
//		couponRepository.flush();
		couponRepository.saveAndFlush(fromDb);
	}

	
	@Test(expected = Exception.class)
	public void whenUpdatingCompanyName_thenThrowException() {
		String name = "name";
		Company c = new Company();
		c.setName(name);
		companyRepository.save(c);
		Company fromDb = companyRepository.findById(1).get();
		fromDb.setName("2");
		companyRepository.saveAndFlush(fromDb);
	}

	
	//FIXME implement this test
	@Test(expected = Exception.class)
	public void whenUpdatingCustomerName_thenThrowException() {
		String name = "name";
		Company c = new Company();
		c.setName(name);
		companyRepository.save(c);
		Company fromDb = companyRepository.findById(1).get();
		fromDb.setName("2");
		companyRepository.saveAndFlush(fromDb);
	}

	// TODO
	@Test
	@Transactional
	public void whenPurchasedCouponGetsDeleted_thenCouponGetsDeletedFromCustomers() {
		Company c = new Company();
		c.setName(mockName());
		assertTrue(c.getCoupons() ==null);
		assertTrue(couponRepository.count() == 0);
		Coupon coupon = new Coupon();
		coupon.setCompany(c);
		coupon.setTitle(mockName());
		coupon.setAmount(30);
		coupon.setPrice(60D);
		companyRepository.save(c);
		couponRepository.save(coupon);
		Coupon couponFromDb =couponRepository.findById(1).get();
		c.addCoupon(couponFromDb);
		assertNotNull(c.getCoupons());
		assertTrue(c.getCoupons().size()==1);
		companyRepository.saveAndFlush(c);
		assertTrue(couponRepository.count() == 1);
//		Customer cust = new Customer();
//		cust.setName(mockName());
//		cust.addCoupon(couponFromDb);
//		customerRepository.save(cust);
		c.removeCoupon(couponFromDb);
		companyRepository.saveAndFlush(c);
		couponRepository.deleteAll();
		couponRepository.flush();
		assertTrue(c.getCoupons() == null);
		assertTrue(!couponRepository.findById(1).isPresent());
//		assertTrue(companyRepository.findById(1).get().getCoupons().size() == 0);
		couponRepository.flush();
		Customer fromDb = customerRepository.findById(1).get();
		assertTrue(fromDb.getCoupons().size() == 0);

	}

	@Test
	public void whenCompanyCreatesCoupon_thenCouponGetsReferencedToCompany() {
		Company c = new Company();
		c.setName(mockName());
		Coupon coupon = new Coupon();
		coupon.setTitle(mockName());
		coupon.setAmount(30);
		coupon.setPrice(60D);
		c.addCoupon(coupon);
		coupon.setCompany(c);
		companyRepository.saveAndFlush(c);
		couponRepository.saveAndFlush(coupon);
		Coupon fromDb = couponRepository.findById(1).get();
		assertTrue(fromDb.getCompany().equals(c));
	}
	
	
	@Test
	public void whenCreatingMultipleCompanies_thenViewAllCompanies() {
		Company company1 = newCompany("name");
		Company company2 = newCompany("name2");
		
		companyRepository.save(company1);
		companyRepository.save(company2);
		
		assertEquals(2, companyRepository.count());
		
	}
	
	private static Company newCompany() {
		Company company = new  Company();
		company.setName(mockName());
		return company;
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
}
