package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Customer;
import com.jbt.gilandyaniv.CouponSystemProject.exceptions.CouponSystemException;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.AdminService;


@RestController
@RequestMapping("Admin")
public class AdminRESTController {

	@Autowired
	private AdminService service;
	
	@PostMapping("Company/Create")
	public ResponseEntity<Object> createCompany(@RequestBody Company company) {
		try {
			service.addCompany(company);
			return new ResponseEntity<Object>(HttpStatus.CREATED);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@DeleteMapping("Company/Remove/{id}")
	public ResponseEntity<Object> removeCompany(@PathVariable("id") int id) {
		try {
			service.removeCompany(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@PutMapping("Company/Update")
	public ResponseEntity<Object> updateCompany(@RequestBody Company company) {
		try {
			service.updateCompany(company);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@GetMapping("Company/Get")
	public ResponseEntity<Object> getCompany(@RequestParam("id") int companyId) {
		try {
			Company result = service.getCompanyById(companyId);
			return new ResponseEntity<>(result,HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@GetMapping("Company/GetAll")
	public ResponseEntity<Object> getAllCompanies() {
		try {
			Collection<Company> companies = service.getAllCompanies();
			return new ResponseEntity<>(companies,HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@PostMapping("Customer/Create")
	public ResponseEntity<Object> createCustomer(@RequestBody Customer customer) {
		try {

			service.addCustomer(customer);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@DeleteMapping("Customer/Remove")
	public ResponseEntity<Object> removeCustomer(@RequestBody Customer customer) {
		try {
			service.removeCustomer(customer);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@PutMapping("Customer/Update")
	public ResponseEntity<Object> updateCustomer(@RequestBody Customer customer) {
		try {
			service.updateCustomer(customer);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@GetMapping("Customer/Get")
	public ResponseEntity<Object> getCustomer(@RequestParam("id") int customerId) {
		try {
			Customer customer = service.getCustomerById(customerId);
			return new ResponseEntity<>(customer,HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	@GetMapping("Customer/GetAll")
	public ResponseEntity<Object> getAllCustomers() {
		try {
			Collection<Customer> customers = service.getAllCustomers();
			return new ResponseEntity<>(customers,HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}


	private ResponseEntity<Object> GetErrorResponseEntity(Exception e) {
		String errorMessage = e.getMessage();
		while (e.getCause() != null) {
			e = (Exception) e.getCause();
			errorMessage += e.getMessage();
		}

		return new ResponseEntity<>(errorMessage,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
