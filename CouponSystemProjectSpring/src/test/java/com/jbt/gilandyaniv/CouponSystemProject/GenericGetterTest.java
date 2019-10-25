package com.jbt.gilandyaniv.CouponSystemProject;

import static org.junit.Assert.assertEquals;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;
import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;

@ContextConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
public class GenericGetterTest {

	@Test
	public void ifGivingACouponInObjectArray_ThenReturnCoupon() {
	Object[] objects = {"aaa",8,new Coupon(),new Company()};
		
	Coupon c = getType(objects,Coupon.class);
	
	assertEquals(objects[2], c);
	}
	
	@Test
	public void whenGivngAStringInObjectArray_ThenReturnString() {
		Object[] objects = {"aaa",8,new Coupon(),new Company()};
		
		String s = getType(objects,String.class);
		
		assertEquals(objects[0], s);
	}
	
	@Test
	public void whenGivingACompanyInObjectArray_ThenReturnCompany(){
	Object[] objects = {"aaa",8,new Coupon(),new Company()};
		
		Company c = getType(objects,Company.class);
		
		assertEquals(objects[3], c);
	}
	
	@Test
	public void whenGivingAnIntegerInObjectArray_ThenReturnInteger(){
		Object[] objects = {"aaa",8,new Coupon(),new Company()};
		
		int num = getType(objects,Integer.class);
		
		assertEquals(objects[1], num);
	}
	
	
	
private <T> T getType(Object[] args,Class<T> type) {
		
				try {
				Class<?> clazz =	Class.forName(type.getName());
		for (Object object : args) {
			if(object.getClass().equals(clazz)) {
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
