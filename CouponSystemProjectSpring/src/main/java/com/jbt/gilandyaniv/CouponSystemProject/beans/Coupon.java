package com.jbt.gilandyaniv.CouponSystemProject.beans;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

//TODO add sql constraints
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
	
	@Column(unique = true,updatable = false,nullable = false)
	private String title;
	
	@Column
	private String description;
	
	@Enumerated(EnumType.ORDINAL)
	private CouponType couponType;

	@Column(updatable = false)
	private double price;
	
	@Column
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate startDate;
	
	@Column(updatable = false)
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate endDate;
	
	@Column
	private String image;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "Company")
	@ToString.Exclude
	private Company company;
	
	public void setTitle(String title) {
		this.title = company + "'s " + title;
	}
}

