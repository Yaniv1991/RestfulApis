package com.jbt.gilandyaniv.CouponSystemProject;

import static org.junit.Assert.assertEquals;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Customer;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CompanyRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CustomerRepository;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = CouponSystemProjectApplication.class)
@SpringBootTest
public class CouponSystemProjectBeansTests {

	
//	@Configuration
//	static class Config{
//		
//		@Bean
//		public  CustomerRepository customerRepository() {
//			return Mockito.mock(CustomerRepository.class);
//		}
//	}
	
	
	@Autowired
	private CustomerRepository customerRepository;
	
	
	@Test
	@Transactional
	public void whenFindByEmailAndPassword_thenReturnCoupon() {
		Customer newCust = new Customer();
		newCust.setEmail("mail3@mail.com");
		newCust.setPassword("pass1");
		
		customerRepository.save(newCust);
		customerRepository.flush();
		
		assertEquals(newCust, customerRepository.findByEmailAndPassword("mail3@mail.com", "pass1").get());
	}
	
	

}
