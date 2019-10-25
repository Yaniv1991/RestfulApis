package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jbt.gilandyaniv.CouponSystemProject.rest.services.VisitorService;

@RestController
@RequestMapping("Visitor")
public class AnyRESTController {

	@Autowired
	private VisitorService service;
	
	@GetMapping
	public ResponseEntity<Object> getAllAvailableCoupons(){
		return new ResponseEntity<>(service.getAllCoupons(),HttpStatus.OK);
	}
}
