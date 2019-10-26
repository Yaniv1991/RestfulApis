package com.jbt.gilandyaniv.CouponSystemProject.rest.services;

import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Customer;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CompanyRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CustomerRepository;
import com.jbt.gilandyaniv.CouponSystemProject.exceptions.CouponSystemException;

@Service
@Scope("prototype")
@Transactional
public class AdminService extends ClientService {

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private CompanyRepository companyRepository;

	@Autowired
	private CouponRepository couponRepository;
	
	@Value("${admin_service.email}")
	private String EMAIL;

	@Value("${admin_service.password}")
	private String PASSWORD;

	@Override
	public boolean login(String email, String password) {
		return (email.equals(EMAIL) && password.equals(PASSWORD));
	}

	public void addCompany(Company company) throws CouponSystemException {
		if (companyRepository.findByName(company.getName()).isPresent()) {
			throw new CouponSystemException("Company with same name already exists");
		}
		companyRepository.save(company);
	}

	
	//TODO implement my own cascading
	public void removeCompany(Company company) throws CouponSystemException {
		if (companyRepository.existsById(company.getId())) {
			companyRepository.delete(company);
		} else {
			throw new CouponSystemException("Company does not exist");
		}

	}
	
	public void removeCompany(int id) throws CouponSystemException {
		if (companyRepository.existsById(id)) {
//			Company company = companyRepository.findById(id).get();
			
			couponRepository.deleteAllCouponHistory(id);
			companyRepository.delete(companyRepository.findById(id).get());
		} else {
			throw new CouponSystemException("Company does not exist");
		}
		
	}
	

	public void updateCompany(Company company) throws CouponSystemException {
		if (companyRepository.existsById(company.getId())) {
			companyRepository.save(company);
		} else {
			throw new CouponSystemException("Company does not exist");
		}
	}

	public Company getCompanyById(int companyId) throws CouponSystemException {
		if (companyRepository.findById(companyId).isPresent()) {
			return companyRepository.findById(companyId).get();
		} else {
			throw new CouponSystemException("Company does not exist");
		}
	}

	public List<Company> getAllCompanies() throws CouponSystemException {
		return companyRepository.findAll();
	}

	public void addCustomer(Customer customer) throws CouponSystemException {
		if (customerRepository.findByName(customer.getName()).isPresent()) {
			throw new CouponSystemException("Company with same name already exists");
		}
		customerRepository.save(customer);
	}

	public void removeCustomer(Customer customer) throws CouponSystemException {

		if (customerRepository.findById(customer.getId()).isPresent()) {
			customerRepository.delete(customer);
		} else {
			throw new CouponSystemException("Customer does not exist");
		}

	}

	public void updateCustomer(Customer customer) throws CouponSystemException {
		if (customerRepository.findById(customer.getId()).isPresent()) {
			customerRepository.save(customer);
		} else {
			throw new CouponSystemException("Customer does not exist");
		}

	}

	public Customer getCustomerById(int customerId) throws CouponSystemException {
		if (customerRepository.findById(customerId).isPresent()) {
			return customerRepository.findById(customerId).get();
		} else {
			throw new CouponSystemException("Customer does not exist");
		}

	}

	public Collection<Customer> getAllCustomers() throws CouponSystemException {
		return customerRepository.findAll();
	}

}
