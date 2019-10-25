//package com.jbt.gilandyaniv.CouponSystemProject.income;
//
//import java.time.LocalDate;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//
//import org.springframework.context.annotation.Scope;
//import org.springframework.stereotype.Component;
//
//import lombok.Data;
//
////@Component
////@Scope("prototype")
////@Entity
// 
//public class Income {
//
//	public long getId() {
//		return id;
//	}
//
//	public void setId(long id) {
//		this.id = id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public LocalDate getDate() {
//		return date;
//	}
//
//	public void setDate(LocalDate date) {
//		this.date = date;
//	}
//
//	public double getAmount() {
//		return amount;
//	}
//
//	public void setAmount(double amount) {
//		this.amount = amount;
//	}
//
//	public IncomeType getDescription() {
//		return description;
//	}
//
//	public void setDescription(IncomeType description) {
//		this.description = description;
//	}
//
//	public long getCustomerId() {
//		return customerId;
//	}
//
//	public void setCustomerId(long customerId) {
//		this.customerId = customerId;
//	}
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private long id;
//
//	private String name;
//
//	private LocalDate date;
//
//	private double amount;
//
//	private IncomeType description;
//
//	private long customerId;
//}
