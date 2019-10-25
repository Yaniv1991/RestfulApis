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


import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CompanyService;

@WebFilter("/Company")
public class CompanyFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		if (((HttpServletRequest) request).getSession(false).getAttribute("service") instanceof CompanyService) {
			chain.doFilter(request, response);
		}

		else {
			((HttpServletResponse) response).sendError(405);
			return;
		}

	}
}