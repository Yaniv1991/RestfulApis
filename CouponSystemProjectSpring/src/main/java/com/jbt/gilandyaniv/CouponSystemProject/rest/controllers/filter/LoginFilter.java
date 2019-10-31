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
import javax.servlet.http.HttpSession;

import org.springframework.core.annotation.Order;

/**
 * Login Filter for the coupon system.
 * @authors Yair Sher, Yaniv Chen & Gil Gouetta
 *
 */

@WebFilter("*")
@Order(1)
public class LoginFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest)request;
		//System.out.println("trying to connect");
			if(loginIsRequired(httpRequest) && 
					(
							!(httpRequest.getRequestURI().equals("/Login") 
									|| (httpRequest.getRequestURI().startsWith("/Visitor")))
					)
					) {
//				System.out.println("Did not connect");
				HttpServletResponse httpResponse = (HttpServletResponse)response;
				httpResponse.sendError(405);
				return;
			}
				
			// pass the request along the filter chain
				chain.doFilter(request, response);
				
	}

	
	private boolean loginIsRequired(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			return true;
		}
		return(session.getAttribute("service")==null);
	}
}
