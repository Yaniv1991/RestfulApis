//package com.gilandyaniv.IncomeMicroservice.beans;
//
//import javax.annotation.PostConstruct;
//import javax.persistence.Entity;
//import javax.persistence.EntityManager;
//import javax.persistence.EntityTransaction;
//import javax.persistence.Id;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import lombok.Getter;
//import lombok.Setter;
//
//@Entity
//public class IncomeTypeTable {
//
//	@Id
//	@Getter
//	@Setter
//	private int id;
//	
//	private IncomeType[] incomeType = IncomeType.values();
//	
//	
//	
//	@PostConstruct
//	public void onInit(@Autowired EntityManager em) {
//		EntityTransaction transaction = em.getTransaction();
//	
//	}
//}
