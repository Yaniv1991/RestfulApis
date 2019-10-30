package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jbt.gilandyaniv.CouponSystemProject.beans.CouponType;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.VisitorService;

@RestController
@RequestMapping("Visitor")
public class AnyRESTController {

	@Autowired
	private VisitorService service;
	
	@GetMapping("GetAllCoupons")
	public ResponseEntity<Object> getAllAvailableCoupons(){
		return new ResponseEntity<>(service.getAllCoupons(),HttpStatus.OK);
	}

	@GetMapping("GetAllCoupons/{category}")
	public ResponseEntity<Object> getAllAvailableCouponsByCategory(@PathVariable("category") CouponType type){
		return new ResponseEntity<>(service.getAllCoupons(type),HttpStatus.OK);
	}
	
	@GetMapping("GetAllCouponsByPrice")
	public ResponseEntity<Object> getAllAvailableCouponsByPrice(@RequestParam("price") double price){
		return new ResponseEntity<>(service.getAllCoupons(price),HttpStatus.OK);
	}
	
	@GetMapping("GetOne/{id}")
	public ResponseEntity<Object> getSingleCoupon(@RequestParam("id") int id){
		return new ResponseEntity<>(service.getCoupon(id),HttpStatus.OK);
	}
}
