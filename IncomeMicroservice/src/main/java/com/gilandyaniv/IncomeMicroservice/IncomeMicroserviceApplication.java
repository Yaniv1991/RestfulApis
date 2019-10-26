package com.gilandyaniv.IncomeMicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class IncomeMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(IncomeMicroserviceApplication.class, args);
	}

}
