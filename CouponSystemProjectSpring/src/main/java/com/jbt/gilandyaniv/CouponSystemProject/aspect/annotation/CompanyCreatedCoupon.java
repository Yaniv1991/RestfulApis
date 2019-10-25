package com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import org.springframework.stereotype.Component;

@Component
@Retention(RUNTIME)
@Target(METHOD)
public @interface CompanyCreatedCoupon {

}
