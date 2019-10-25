package com.jbt.gilandyaniv.CouponSystemProject.rest.services;

import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;

@Service
public class VisitorService {

	@Autowired
	private CouponRepository repository;
	
	public Collection<Coupon> getAllCoupons(){
		return repository.findAll();
	}
}
