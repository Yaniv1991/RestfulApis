package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers;

import com.jbt.gilandyaniv.CouponSystemProject.rest.services.ClientType;

import lombok.Data;

@Data
public class Credentials {

	private String email;
	private String password;
	private ClientType clientType;
}
