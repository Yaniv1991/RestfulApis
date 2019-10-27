package com.gilandyaniv.IncomeMicroservice.beans;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;

@Convert(converter = IncomeTypeConverter.class,attributeName = "id")
//@Entity
//@TypeDef(name = "IncomeType",typeClass = IncomeTypeMySQLEnumType.class)
public enum IncomeType {

	CUSTOMER_PURCHASED_COUPON(0,"Customer purchased coupon"),
	COMPANY_CREATED_COUPON(1,"Company created coupon"),
	COMPANY_UPDATED_COUPON(2,"Company updated coupon");
	
	private final static Map<Integer,IncomeType> intToIncomeType = new HashMap< >();
	
	static {
		for (IncomeType incomeType : IncomeType.values()) {
			intToIncomeType.put(incomeType.id, incomeType);
		}
	}
	
	
	public static IncomeType fromInteger(Integer id) {
		return intToIncomeType.get(id);
	}
	
	@Id
	private int id;
	
	@Column
	private String description;
	
	private IncomeType(int id,String description) {
		this.id=id;
		this.description = description;
	}

	public Integer getId() {
		return this.id;
	}
	
	
	@PostConstruct
	public void init(@Autowired EntityManager em) {
		EntityTransaction transaction = em.getTransaction();
		transaction.begin();
		for (IncomeType incomeT : IncomeType.values()) {
			em.persist(incomeT);
		}
		
		transaction.commit();
	}
}
