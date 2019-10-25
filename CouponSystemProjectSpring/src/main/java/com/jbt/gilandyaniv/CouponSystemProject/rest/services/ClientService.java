package com.jbt.gilandyaniv.CouponSystemProject.rest.services;

import org.springframework.stereotype.Component;

@Component
public abstract class ClientService {

	public abstract boolean login(String email,String password);
}
