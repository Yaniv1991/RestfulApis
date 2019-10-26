package com.jbt.gilandyaniv.CouponSystemProject.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;

@Aspect
@Component
public class BusinessDelegateAspect {

	
	private Logger logger = LoggerFactory.getLogger(BusinessDelegateAspect.class);

	
	private RestTemplate restTemplate;

	
	@Autowired
	public BusinessDelegateAspect(RestTemplateBuilder builder) {
		super();
		this.restTemplate = builder.build();
	}

	@Value("${microservice.uri}")
	private String uri;

	@AfterReturning("@annotation(com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CustomerPurchasedCoupon)")
	public void CustomerPurchasedCouponAdvice(JoinPoint jp) {
		Coupon coupon = getType(jp.getArgs(), Coupon.class);

		delegate("Customer/StoreIncome/" + coupon.getAmount());
	}

	//TODO implement method
	@AfterReturning("@annotation(com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CompanyCreatedCoupon)")
	public void CompanyCreatedCouponAdvice(JoinPoint jp) {
		delegate("Company/CreateCoupon");
	}

	@AfterReturning("@annotation(com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CompanyUpdatedCoupon)")
	public void CompanyUpdatedCouponAdvice(JoinPoint jp) {

	}

	//TODO implement method
	private void delegate(String path) {
//		restTemplate.getForObject(uri + path, String.class);
		logger.info("This will be delegated to income micro service ^_^");
	}

	@SuppressWarnings("unchecked")
	private <T> T getType(Object[] args, Class<T> type) {

		try {
			Class<?> clazz = Class.forName(type.getName());
			for (Object object : args) {
				if (object.getClass().equals(clazz)) {
					return (T) object;
				}
			}
		} catch (ClassNotFoundException e) {
			logger.info(e.getMessage());
		}
		return null;
	}
}
