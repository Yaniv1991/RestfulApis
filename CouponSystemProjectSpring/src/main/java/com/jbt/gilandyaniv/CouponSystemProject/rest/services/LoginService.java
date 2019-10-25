package com.jbt.gilandyaniv.CouponSystemProject.rest.services;


import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;

import com.jbt.gilandyaniv.CouponSystemProject.dao.CompanyRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CustomerRepository;
import com.jbt.gilandyaniv.CouponSystemProject.rest.controllers.Credentials;

@Service
public class LoginService implements ApplicationContextAware{
	@Value("${admin_service.email}")
	private String AdminEmail;
	
	@Value("${admin_service.password}")
	private String AdminPassword;

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CompanyRepository companyRepository;
	
	public ClientService login(Credentials credentials) {
		System.out.println(customerRepository);
		System.out.println(companyRepository);
		switch (credentials.getClientType()) {
		case ADMIN:{
			if ((credentials.getEmail().equals(AdminEmail) && credentials.getPassword().equals(AdminPassword))) {
				return ctx.getBean(AdminService.class);
			}
		}
		case COMPANY:{
			if(companyRepository.existsByEmailAndPassword(credentials.getEmail(), credentials.getPassword())) {
				return (CompanyService) ctx.getBean("companyService",companyRepository.findByEmailAndPassword(credentials.getEmail(), credentials.getPassword()).get());
			}
		}
		case CUSTOMER:{
			if(customerRepository.existsByEmailAndPassword(credentials.getEmail(), credentials.getPassword())) {
				return (CustomerService) ctx.getBean("customerService", customerRepository.findByEmailAndPassword(credentials.getEmail(), credentials.getPassword()).get());
			}
		}
		}
		return null;
	}

	private ApplicationContext ctx;

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		ctx= applicationContext;
	}
	
	
	
	
}
