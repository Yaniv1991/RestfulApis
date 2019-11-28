package com.jbt.gilandyaniv.CouponSystemProject.rest.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jbt.gilandyaniv.CouponSystemProject.rest.services.ClientService;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.LoginService;

/**
 * REST Controller for login service.
 * @authors Yaniv Chen, Yair Sher & Gil Gouetta
 *
 */

@RestController
@RequestMapping
@CrossOrigin
public class LoginRESTController {

	@Autowired
	private LoginService loginService;

	/**
	 * Login method.
	 * @param credentials
	 * @param req HttpServletRequest
	 * @return Response entity of Boolean
	 */
	
	@PostMapping("Rest/Login")
	public ResponseEntity<Boolean> Login(@RequestBody Credentials credentials,HttpServletRequest req){
		
		Logout(req);
		HttpStatus status = HttpStatus.ACCEPTED;
		ClientService service = loginService.login(credentials);
		if(service != null) {
			req.getSession(true);
			req.getSession(false).setAttribute("service", service);
			return new ResponseEntity<Boolean>(true,status);
		}
		return new ResponseEntity<Boolean>(false,status);
	}
	/**
	 * Logout method
	 * @param req HttpServletRequest
	 * @return Response entity of Boolean
	 */
	
	@GetMapping("Logout")
	public ResponseEntity<Boolean> Logout(HttpServletRequest req){
		if(req.getSession(false) != null){
	req.getSession(false).invalidate();
	}
		return new ResponseEntity<Boolean>(HttpStatus.OK);
	}
	
}
