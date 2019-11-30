package com.jbt.gilandyaniv.CouponSystemProject.rest.services;

import java.time.LocalDate;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.CouponType;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;

@Service
public class VisitorService {

	@Autowired
	private CouponRepository repository;
	
	public Collection<Coupon> getAllCoupons(){
		return repository.findAll();
	}

	public Collection<Coupon> getAllCoupons(CouponType type) {
		return repository.findAllByCouponType(type);
	}

	public Collection<Coupon> getAllCoupons(double price) {
		return repository.findAllByMaxPrice(price);
	}

	public Collection<Coupon> getAllCoupons(LocalDate endDate) {
		return repository.findallByEndDate(endDate);
	}
	
	public Coupon getCoupon(int id) {
		return repository.findById(id).get();
	}
	
	
}
