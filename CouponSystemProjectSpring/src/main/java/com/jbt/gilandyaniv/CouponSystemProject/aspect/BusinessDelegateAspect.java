package com.jbt.gilandyaniv.CouponSystemProject.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;

@Aspect
@Component
public class BusinessDelegateAspect {

	@Autowired
	private RestTemplate restTemplate;

	@Value("${microservice.uri}")
	private String uri;

	@AfterReturning("@annotation(CustomerPurchasedCoupon)")
	public void CustomerPurchasedCouponAdvice(JoinPoint jp) {
		Coupon coupon = getType(jp.getArgs(),Coupon.class);
		
		delegate("Customer/StoreIncome/" + coupon.getAmount());
	}

	@AfterReturning("@annotation(CompanyCreatedCoupon)")
	public void CompanyCreatedCouponAdvice(JoinPoint jp) {
		delegate("Company/CreateCoupon");
	}

	@AfterReturning("@annotation(CompanyUpdatedCoupon)")
	public void CompanyUpdatedCouponAdvice(JoinPoint jp) {

	}

	private void delegate(String path) {
		restTemplate.getForObject(uri + path, String.class);
	}

	private <T> T getType(Object[] args, Class<T> type) {

		try {
			Class<?> clazz = Class.forName(type.getName());
			for (Object object : args) {
				if (object.getClass().equals(clazz)) {
					return (T) object;
				}
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
