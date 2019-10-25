package com.jbt.gilandyaniv.CouponSystemProject;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;
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
	
	@Before
	public void setup()
	{
		Company c = new Company();
		Customer newCust = new Customer();
		
		customerRepository.save(newCust);
		companyRepository.save(c);
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
	
	

}
