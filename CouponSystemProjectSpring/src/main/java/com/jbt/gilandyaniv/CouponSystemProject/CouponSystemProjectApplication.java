package com.jbt.gilandyaniv.CouponSystemProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ServletComponentScan
@EnableJpaRepositories
@EntityScan
@EnableScheduling
@EnableAspectJAutoProxy
public class CouponSystemProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CouponSystemProjectApplication.class, args);
	}

}
