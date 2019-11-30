package com.jbt.gilandyaniv.CouponSystemProject.rest.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.CouponType;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Customer;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CustomerRepository;
import com.jbt.gilandyaniv.CouponSystemProject.exceptions.CouponSystemException;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Service
@Scope("prototype")
@NoArgsConstructor
@Transactional
public class CustomerService extends ClientService {

	@Getter
	private Customer customer;
	
	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private CouponRepository couponRepository;
	
	@Override
	public boolean login(String email, String password) {
		return customerRepository.existsByEmailAndPassword(email, password);
	}


	public CustomerService(Customer customer) {
		super();
		this.customer = customer;
	}

	
	//TODO Do i even need this?
	@PostConstruct
	private void postCtor() {
		this.customer= customerRepository.findById(customer.getId()).get();
	}

	public void purchaseCoupon(int id) throws CouponSystemException {
		Coupon coupon = couponRepository.findById(id).get();
		Customer customer = customerRepository.findById(this.customer.getId()).get();
		if(coupon.getAmount() > 0 ) {
			if(coupon.getEndDate().isBefore(LocalDate.now())){
				throw new CouponSystemException("Coupon has already expired");
			}
			if(customer.getCoupons().contains(coupon)) {
				throw new CouponSystemException("Coupon already purchased");
			}
			customer.addCoupon(coupon);
			
			coupon.setAmount(coupon.getAmount()-1);
		}
		else {
			throw new CouponSystemException("Coupon is out of stock");
		}
		
	}


	public Collection<Coupon> getAllCouponsOfCustomer() {
		Collection<Coupon> result = customerRepository.getOne(customer.getId()).getCoupons();
		
		return result;
	}


	public Collection<Coupon> getAllCouponsByMaxPrice(double price) {
		Collection<Coupon> allCoupons = customerRepository.getOne(customer.getId()).getCoupons();
		
		Collection<Coupon> result = new ArrayList<>();
		
		for (Coupon coupon : allCoupons) {
			if(coupon.getPrice() <= price) {
				result.add(coupon);
			}
		}
		return result;
	}


	public Collection<Coupon> getAllCouponsByCategory(CouponType category) {
		Collection<Coupon> allCoupons = customerRepository.getOne(customer.getId()).getCoupons();
		
		Collection<Coupon> result = new ArrayList<>();
		
		for (Coupon coupon : allCoupons) {
			if(coupon.getCouponType().equals(category)) {
				result.add(coupon);
			}
		}
		return result;
	}


	public Collection<Coupon> getAllCouponsByEndDate(LocalDate date) {
		Collection<Coupon> allCoupons = customerRepository.getOne(customer.getId()).getCoupons();
		
		Collection<Coupon> result = new ArrayList<Coupon>();
		
		for (Coupon coupon : allCoupons) {
			if(coupon.getEndDate().isAfter(date)) {
				result.add(coupon);
			}
		}
		
		return result;
	}

	
	
}
