package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers.filter;
/**
 * CORS handling filter.
 * @authors Yaniv Chen, Gil Gouetta & Yair Sher
 *
 */
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;
@WebFilter("*")
public class AllowCorsFilter implements Filter {

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse response = (HttpServletResponse)res;
//		System.out.println("Allowing CORS");
		response.addHeader("Access-Control-Allow-Origin", "http://localhost:4200"); // or "*"
		response.addHeader("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
		response.addHeader("Access-Control-Allow-Credentials", "true");
		response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
	chain.doFilter(req, res);
	}

}
