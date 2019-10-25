package com.jbt.gilandyaniv.CouponSystemProject.jobs;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.core.annotation.Order;
import org.springframework.scheduling.annotation.Scheduled;

import com.jbt.gilandyaniv.CouponSystemProject.dao.CouponRepository;

@SpringBootApplication
@Order(1)
public class CouponSystemExpirationDailyJob implements ApplicationContextAware {

	private static ApplicationContext context;
	private static final Logger logger = LoggerFactory.getLogger(CouponSystemExpirationDailyJob.class);
	  private static final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

	  
	@Scheduled(fixedRate = 1000 * 60 * 60 * 24)
	public void run() {
		context.getBean(CouponRepository.class).deleteAllExpiredCoupons();
	logger.info("Expired coupons were deleted - {}",dateTimeFormatter.format(LocalDateTime.now()));
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		context= applicationContext;
	}

}
