package com.jbt.gilandyaniv.CouponSystemProject.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.context.annotation.Scope;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Scope(scopeName = "prototype")
@ToString(exclude = {"id","password","coupons"})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	@ToString.Exclude
	private int id;
	@Column
	private String name;
	@Column
	@JsonIgnore
	private String password;
	@Column
	private String email;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER,mappedBy = "company")
	@ToString.Exclude
	@JsonIgnore
	private List<Coupon> coupons;
	
	public void addCoupon(Coupon coupon) {
		if(coupons == null) {
			coupons = new ArrayList<Coupon>();
		}
		coupons.add(coupon);
	}
	
	public void removeCoupon(Coupon coupon) {
		if(coupons.contains(coupon)) {
			coupons.remove(coupon);
		}
	}
	
}
