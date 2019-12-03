package com.jbt.gilandyaniv.CouponSystemProject.beans;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jbt.gilandyaniv.CouponSystemProject.utils.NoNullSet;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Coupon java bean.
 * @authors Yaniv Chen, Gil Gouetta & Yair Sher
 */

@Data
@NoArgsConstructor
@Component
@Scope(scopeName = "prototype")
@Entity
public class Coupon {

	public Coupon(int couponId) {
		this.id= couponId;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	
	@Column
	private int amount;
	
	@Column
	(unique = true,updatable = false,nullable = false)
	private String title;
	
	@Column
	private String description;
	
	@Enumerated(EnumType.ORDINAL)
	private CouponType couponType;

	@Column(updatable = false)
	private Double price;
	
	@Column
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate startDate;
	
	@Column(updatable = false)
	@JsonFormat(pattern = "yyyy-MM-dd")
	
	private LocalDate endDate;
	
	@Column
	private String image;
	
	
	@ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
	@JoinColumn(name = "Company")
	@ToString.Exclude
	@JsonIgnore
	private Company company;
	
	
	@JsonIgnore
	@ManyToMany(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH},mappedBy = "coupons")
	@OnDelete(action = OnDeleteAction.NO_ACTION)
	private Set<Customer> customers = new NoNullSet<Customer>();
	
	
	public void setCompany(Company company) {
		if(this.company != null ) throw new RuntimeException("Company can only be set once");
		this.company = company;
		setTitle(getTitle());
	}
	
	public void setTitle(String title) {
		this.title =company==null?  title : company.getName() + "'s " + title;
	}
	
	public void setEndDate(LocalDate endDate) {
		if(this.endDate == null) this.endDate=endDate;
		else
		throw new RuntimeException("End date can only be set once");
	}
	
	public void setPrice(Double price) {
		if(this.price == null) this.price=price;
		else
		throw new RuntimeException("Price can only be set once");
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Coupon other = (Coupon) obj;
		if (company == null) {
			if (other.company != null)
				return false;
		} else if (!company.equals(other.company))
			return false;
		if (id != other.id)
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((company == null) ? 0 : company.hashCode());
		result = prime * result + id;
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}
}

