package com.jbt.gilandyaniv.CouponSystemProject.rest.services;

import java.util.ArrayList;
import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.CouponType;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CompanyRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;

import lombok.NonNull;

@Service
@Scope("prototype")
@Transactional
public class CompanyService extends ClientService {

private Company company;


@Autowired
private CompanyRepository companyRepository;

@Autowired
private CouponRepository couponRepository;


@Override
	public boolean login(String email, String password) {
	System.out.println(companyRepository);
		return companyRepository.existsByEmailAndPassword(email, password);
	}

public CompanyService(@NonNull Company company) {
	super();
	this.company = company;
}



public void createCoupon(Coupon coupon) {
	
	company.addCoupon(coupon);
	coupon.setCompany(company);
	companyRepository.save(company);
//	System.out.println("Company is " + company);
//	System.out.println("Company Rep is " + companyRepository);
//	System.out.println("Coupon Rep is " + couponRepository);
//	couponRepository.save(coupon);
}

public void removeCoupon(Coupon coupon) {
	company.removeCoupon(coupon);
	couponRepository.delete(coupon);
	
}

public void updateCoupon(Coupon coupon) {
	couponRepository.saveAndFlush(coupon);
}

public Coupon read(int couponId) {
	return couponRepository.getOne(couponId);
}

public Collection<Coupon> returnAllCoupons() {
	return companyRepository.getOne(company.getId()).getCoupons();
}

public Collection<Coupon> returnAllCouponsByCategory(CouponType category) {
	Collection<Coupon> allCoupons = companyRepository.getOne(company.getId()).getCoupons();
	
	Collection<Coupon> result = new ArrayList<>();
	for (Coupon coupon : allCoupons) {
		if(coupon.getCouponType().equals(category)) {
			result.add(coupon);
		}
	}
	return result;
}





}
