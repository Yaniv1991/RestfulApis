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

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.context.annotation.Scope;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Scope(scopeName = "prototype")
@ToString(exclude = {"id","password","coupons"})
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler","password"}, allowSetters = true)
public class Company {

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + id;
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Company other = (Company) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id != other.id)
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		return true;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	@Column(unique = true,updatable = false,nullable = false)
	private String name = null;
	@Column
	private String password;
	@Column
	private String email;

	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER,mappedBy = "company"
			,orphanRemoval = true
			)
	@OnDelete(action = OnDeleteAction.CASCADE)
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
	
	public void setName(String name) {
		if(this.name !=null) { throw new IllegalArgumentException("Name can only be set once");}
		this.name=name;
	}
	
}
