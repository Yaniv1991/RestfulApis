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


@RestController
@RequestMapping("Customer")
public class CustomerRESTController {

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
	
	private CustomerService getService(HttpServletRequest req) {
		return (CustomerService) req.getSession(false).getAttribute("service");
	}
}