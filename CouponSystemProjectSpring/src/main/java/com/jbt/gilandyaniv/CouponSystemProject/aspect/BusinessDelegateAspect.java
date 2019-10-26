package com.jbt.gilandyaniv.CouponSystemProject.aspect;

import javax.servlet.http.HttpServletRequest;

import org.apache.catalina.connector.RequestFacade;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.ClientService;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CompanyService;
import com.jbt.gilandyaniv.CouponSystemProject.rest.services.CustomerService;

@Aspect
@Component
public class BusinessDelegateAspect {

	
	private Logger logger = LoggerFactory.getLogger(BusinessDelegateAspect.class);

	
	private RestTemplate restTemplate;

	@Autowired
	private CouponRepository couponRepository;
	
	@Autowired
	public BusinessDelegateAspect(RestTemplateBuilder builder) {
		super();
		this.restTemplate = builder.build();
	}

	@Value("${microservice.uri}")
	private String uri;

	@Around("@annotation(com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CustomerPurchasedCoupon)")
	public void CustomerPurchasedCouponAdvice(JoinPoint pjp) throws Throwable {
		Coupon coupon = getCoupon(pjp.getArgs());
		System.out.println("Args number is" + pjp.getArgs().length);
		HttpServletRequest req =getRequest(pjp.getArgs());
		delegate("Customer/StoreIncome/" + coupon.getPrice(),getIdFromRequest(req));
	}

	@AfterReturning("@annotation(com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CompanyCreatedCoupon)")
	public void CompanyCreatedCouponAdvice(JoinPoint jp) {
		
		HttpServletRequest req = getRequest(jp.getArgs());
		delegate("Company/CreateCoupon",getIdFromRequest(req));
	}

	@AfterReturning("@annotation(com.jbt.gilandyaniv.CouponSystemProject.aspect.annotation.CompanyUpdatedCoupon)")
	public void CompanyUpdatedCouponAdvice(JoinPoint jp) {
		HttpServletRequest req = getRequest(jp.getArgs());
		delegate("Company/UpdateCoupon",getIdFromRequest(req));
	}

	private Coupon getCoupon(Object[] args) {
			for (Object object : args) {
				if (object instanceof Coupon) {
					Coupon transientCoupon = (Coupon) object;
					return couponRepository.findById(transientCoupon.getId()).get();
							
				}
			}
		return null;
	}
	
	private HttpServletRequest getRequest(Object[] args) {
		for (Object object : args) {
			if(object instanceof RequestFacade) {
				return (HttpServletRequest)object;
			}
		}
		return null;
	}
	
	private long getIdFromRequest(HttpServletRequest req) {
		ClientService service = (ClientService) req.getSession(false).getAttribute("service");
		
		if(service instanceof CustomerService) {
			CustomerService customerService = (CustomerService)service;
			return customerService.getCustomer().getId();
		}

		if(service instanceof CompanyService) {
			CompanyService companyService = (CompanyService)service;
			return companyService.getCompany().getId();
		}
		
		
		
		return 0;
	}

	//TODO implement method
		private void delegate(String path,long clientId) {
//			restTemplate.getForObject(uri + path, String.class);
			restTemplate.exchange(uri + path , HttpMethod.POST, new HttpEntity<Long>(clientId),String.class);
			logger.info("This will be delegated to income micro service ^_^");
			logger.info(path + "Client Id : " + clientId);
		}
}
