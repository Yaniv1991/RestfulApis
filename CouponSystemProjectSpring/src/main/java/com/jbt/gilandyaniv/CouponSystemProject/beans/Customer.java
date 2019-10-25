package com.jbt.gilandyaniv.CouponSystemProject.beans;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;

import org.springframework.context.annotation.Scope;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.jbt.gilandyaniv.CouponSystemProject.utils.NoNullSet;

import lombok.Data;

@Data
@Entity
@Scope(scopeName = "prototype")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;

	@Column(unique = true,updatable = false,nullable = false)
	private String name;


	@Column
	@JsonIgnore
	private String password;

	@Column
	private String email;

	@JoinColumn
	@ManyToMany(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
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
