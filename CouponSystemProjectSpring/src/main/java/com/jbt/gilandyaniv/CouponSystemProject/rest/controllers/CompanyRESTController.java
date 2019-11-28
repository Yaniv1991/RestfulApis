package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CompanyCreatedCoupon;
import com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CompanyUpdatedCoupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.CouponType;
import com.jbt.gilandyaniv.CouponSystemProject.exceptions.CouponSystemException;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CompanyService;

/**
 * REST Controller for Company metohds.
 * Contains all functionality for Company type user.
 * @authors Yair Sher, Yaniv Chen & Gil Gouetta
 */

@RestController
@RequestMapping("Rest/Company")
@CrossOrigin
public class CompanyRESTController {
	
	/**
	 * Create method for Coupon.
	 * @param coupon
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	
	@CompanyCreatedCoupon
	@PostMapping("Create")
	public ResponseEntity<Object> createCoupon(@RequestBody Coupon coupon,HttpServletRequest req){
		try {
			getCompanyService(req).createCoupon(coupon);
			return new ResponseEntity<Object>(coupon,HttpStatus.ACCEPTED);
		}
		catch(Exception e) {
			return new ResponseEntity<Object>(e,HttpStatus.BAD_REQUEST);
		}
	}
	
	/**
	 * DELETE method for Coupon.
	 * @param couponId
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	@DeleteMapping("Remove")
	public ResponseEntity<Object> removeCoupon(@RequestParam ("id") int couponId,HttpServletRequest req)  {
		try {
			getCompanyService(req).removeCoupon(new Coupon(couponId));
			return new ResponseEntity<Object>(true,HttpStatus.ACCEPTED);
		}
		catch(CouponSystemException e) {
			return new ResponseEntity<Object>(e,HttpStatus.BAD_REQUEST);
		}
	}
	/**
	 * Update method for Coupon.
	 * @param coupon
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	@CompanyUpdatedCoupon
	@PutMapping("Update")
	public ResponseEntity<Object> updateCoupon(@RequestBody Coupon coupon,HttpServletRequest req)  {
		try {
			getCompanyService(req).updateCoupon(coupon);
			return new ResponseEntity<Object>(coupon,HttpStatus.OK);
		}
		catch(CouponSystemException e) {
			return new ResponseEntity<Object>(e,HttpStatus.BAD_REQUEST);
		}
	}
	/**
	 * Read method for Coupon.
	 * @param couponId
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	@GetMapping("Read")
	public ResponseEntity<Object> getCoupon(@RequestParam("couponId") int couponId,HttpServletRequest req)  {
		try {
			Coupon coupon = getCompanyService(req).read(couponId);
			return new ResponseEntity<Object>(coupon,HttpStatus.OK);
		}
		catch(CouponSystemException e) {
			return new ResponseEntity<Object>(e,HttpStatus.BAD_REQUEST);
		}
	}
	
	/**
	 * Read all method for Coupons.
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	@GetMapping("getAllCoupons")
	public ResponseEntity<Object>  getAllCoupons(HttpServletRequest req){
		try {
			Collection<Coupon> coupons = getCompanyService(req).returnAllCoupons();
			return new ResponseEntity<Object>(coupons,HttpStatus.OK);
		}
		catch(CouponSystemException e) {
			return new ResponseEntity<Object>(e,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	/**
	 * Read all method for Coupons, by category.
	 * @param category CouponType
	 * @param req HttpServletRequest
	 * @return Response entity of Object
	 */
	@GetMapping("getAllCoupons/{category}")
	public ResponseEntity<Object>  getCouponsByCategory(@PathVariable("category") CouponType category,HttpServletRequest req) {
		try {
			Collection<Coupon> couponsByCategory = getCompanyService(req).returnAllCouponsByCategory(category);
			return new ResponseEntity<Object>(couponsByCategory,HttpStatus.OK);
		}
		catch(CouponSystemException e) {
			return new ResponseEntity<Object>(e,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	/**
	 * Internal method used to get a CompanyService object with the relevant company.
	 * @param req HttpServletRequest
	 * @return CompanyService
	 * @throws CouponSystemException
	 */
	private CompanyService getCompanyService(HttpServletRequest req) throws CouponSystemException{
		System.out.println((CompanyService)req.getSession(false).getAttribute("service"));
		return (CompanyService)req.getSession(false).getAttribute("service");
	}
}
