package com.jbt.gilandyaniv.CouponSystemProject.beans;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.context.annotation.Scope;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.jbt.gilandyaniv.CouponSystemProject.utils.NoNullSet;

import lombok.Data;

/**
 * Customer java bean.
 * @authors Gil Gouetta Yaniv Chen & Yair Sher
 */

@Data
@Entity
@Scope(scopeName = "prototype")
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler","password"}, allowSetters = true)
public class Customer {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;

	@Column
	(unique = true,updatable = false)
	private String name;


	@Column
	private String password;

	@Column
	private String email;

	
	@JoinTable(name = "customers_coupons",
			joinColumns = @JoinColumn(name = "customer_id"),
	inverseJoinColumns = @JoinColumn(name = "coupon_id"))
	@ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Set<Coupon> coupons;
	
	
	public void addCoupon(Coupon coupon) {
		if(coupons == null) {
			coupons = new NoNullSet<Coupon>();
		}
		coupons.add(coupon);
	}
	
	public void removeCoupon(Coupon coupon) {
		if(coupons.contains(coupon)) {
			coupons.remove(coupon);
		}
	}
	
}
