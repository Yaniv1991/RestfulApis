package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Customer;
import com.jbt.gilandyaniv.CouponSystemProject.exceptions.CouponSystemException;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.AdminService;

/**
 * REST Controller for Admin metohds.
 * Contains all functionality for Admin tye user.
 * @authors Yaniv Chen, Gil Gouetta & Yair Sher
 */
@RestController
@RequestMapping("Rest/Admin")
@CrossOrigin(origins = {"http://localhost:4200"} ,methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
public class AdminRESTController {

	@Autowired
	private AdminService service;
	/**
	 * Create method for company.
	 * Receives a Company object in request body and returns a response.
	 * @param company
	 * @return Response entity of Object
	 */
	@PostMapping("Company/Create")
	public ResponseEntity<Object> createCompany(@RequestBody Company company) {
		try {
			service.addCompany(company);
			return new ResponseEntity<Object>(HttpStatus.CREATED);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * DELETE method for Company.
	 * Receives company id through path variable and returns a response.
	 * @param id
	 * @return Response entity of Object
	 */
	@DeleteMapping("Company/Remove/{id}")
	public ResponseEntity<Object> removeCompany(@PathVariable("id") int id) {
		try {
			service.removeCompany(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * Update method for company.
	 * Receives a Company object in request body and returns a response.
	 * @param company
	 * @return Response entity of Object
	 */
	@PutMapping("Company/Update")
	public ResponseEntity<Object> updateCompany(@RequestBody Company company) {
		try {
			service.updateCompany(company);
			System.out.println("Updating company " + company);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * Read method for Company.
	 * Receives a company id as request param and returns response.
	 * @param companyId
	 * @return Response entity of Object
	 */
	@GetMapping("Company/Get")
	public ResponseEntity<Object> getCompany(@RequestParam("id") int companyId) {
		try {
			Company result = service.getCompanyById(companyId);
			return new ResponseEntity<>(result,HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * Read all method for comapny.
	 * @return Response entity of Object
	 */
	@GetMapping("Company/GetAll")
	public ResponseEntity<Object> getAllCompanies() {
		try {
			Collection<Company> companies = service.getAllCompanies();
			return new ResponseEntity<>(companies,HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * Create method for Customer.
	 * Receives a Customer object in reuest body and returns a response.
	 * @param customer
	 * @return sponse entity of Object
	 */
	@PostMapping("Customer/Create")
	public ResponseEntity<Object> createCustomer(@RequestBody Customer customer) {
		try {
			System.out.println("Customer Create is working. Customer = " + customer);
			service.addCustomer(customer);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * DELETE method for Customer.
	 * Receives customer id through path variable and returns a response.
	 * @param id
	 * @return Response entity of Object
	 */
	@DeleteMapping("Customer/Remove/{id}")
	public ResponseEntity<Object> removeCustomer(@PathVariable("id") int id) {
		try {
			service.removeCustomer(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * Update method for Customer.
	 * Receives a Customer object in request body and returns a response.
	 * @param customer
	 * @return Response entity of Object
	 */
	@PutMapping("Customer/Update")
	public ResponseEntity<Object> updateCustomer(@RequestBody Customer customer) {
		try {
			service.updateCustomer(customer);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * Read method for Customer.
	 * Receives a customer id as request param and returns response.
	 * @param customerId
	 * @return Response entity of Object
	 */
	@GetMapping("Customer/Get")
	public ResponseEntity<Object> getCustomer(@RequestParam("id") int customerId) {
		try {
			Customer customer = service.getCustomerById(customerId);
			return new ResponseEntity<>(customer,HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}
	/**
	 * Read all method for customer.
	 * @return Response entity of Object
	 */
	@GetMapping("Customer/GetAll")
	public ResponseEntity<Object> getAllCustomers() {
		try {
			Collection<Customer> customers = service.getAllCustomers();
			return new ResponseEntity<>(customers,HttpStatus.OK);
		} catch (CouponSystemException e) {
			return GetErrorResponseEntity(e);
		}
	}

	/**
	 * Private exception handling method.
	 * @param e Exception
	 * @return Response entity of Object
	 */
	private ResponseEntity<Object> GetErrorResponseEntity(Exception e) {
		String errorMessage = e.getMessage();
		while (e.getCause() != null) {
			e = (Exception) e.getCause();
			errorMessage += e.getMessage();
		}

		return new ResponseEntity<>(errorMessage,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
