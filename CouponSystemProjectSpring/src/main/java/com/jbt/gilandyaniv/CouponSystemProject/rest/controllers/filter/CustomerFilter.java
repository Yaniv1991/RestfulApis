package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CustomerService;
/**
 * WebFilter for Customer
 * @authors Yaniv Chen, Yair Sher & Gil Gouetta
 *
 */
@WebFilter("/Customer/*")
public class CustomerFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		if (((HttpServletRequest) request).getSession(false).getAttribute("service") instanceof CustomerService) {
			chain.doFilter(request, response);
		}

		else {
			((HttpServletResponse) response).sendError(405);
			return;
		}

	}
}
