package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CustomerPurchasedCoupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.CouponType;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CustomerService;


/**
 * REST Controller for Customer metohds.
 * Contains all functionality for Customer type user.
 * @authors Yaniv Chen, Gil Gouetta & Yair Sher
 */

@RestController
@RequestMapping("Customer")
public class CustomerRESTController {
	/**
	 * Method used to purchase single coupon by customer.
	 * @param couponToPurchase
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	@CustomerPurchasedCoupon
	@PostMapping("Purchase")
	public ResponseEntity<Object> purchaseCoupon(@RequestBody Coupon couponToPurchase,HttpServletRequest req)  {
		try {
			getService(req).purchaseCoupon(couponToPurchase.getId());
			return new ResponseEntity<Object>(HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<Object>(e,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Read all method for Coupons.
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	
	@GetMapping("getAllPurchasedCoupons")
	public ResponseEntity<Object> getAllPurchasedCoupons(HttpServletRequest req)  {
		try {
			
			Collection<Coupon> coupons =  getService(req).getAllCouponsOfCustomer();
			return new ResponseEntity<Object>(coupons,HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<Object>(e,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	/**
	 * Read all method for Coupons, by category.
	 * @param category CouponType
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	@GetMapping("getAllPurchasedCoupons/{category}")
	public ResponseEntity<Object> getAllPurchasedCouponsByCategory(@PathVariable("category") CouponType category,HttpServletRequest req) {
		try {
			Collection<Coupon> couponsByCategory =  getService(req).getAllCouponsByCategory(category);
			return new ResponseEntity<Object>(couponsByCategory,HttpStatus.OK);			
		}
		catch (Exception e) {
			return new ResponseEntity<Object>(e,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	/**
	 * Read all method for Coupons, by price.
	 * @param price double
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	@GetMapping("getAllPurchasedCouponsByPrice")
	public ResponseEntity<Object> getAllPurchasedCouponsByPrice(@RequestParam("price") double price,HttpServletRequest req)  {
		try {
			Collection<Coupon> couponsByMaxPrice =  getService(req).getAllCouponsByMaxPrice(price);
			return new ResponseEntity<Object>(couponsByMaxPrice,HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<Object>(e,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	/**
	 * Internal method used to get a CustomerService object with the relevant customer.
	 * @param req HttpServletRequest
	 * @return CustomerService
	 */
	private CustomerService getService(HttpServletRequest req) {
		return (CustomerService) req.getSession(false).getAttribute("service");
	}
}
