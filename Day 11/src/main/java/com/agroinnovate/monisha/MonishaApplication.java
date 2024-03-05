package com.agroinnovate.monisha;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.agroinnovate.monisha.dto.request.RegisterRequest;
import com.agroinnovate.monisha.service.AuthenticationService;

@SpringBootApplication
public class MonishaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MonishaApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService authenticationService) {
		return args -> {
			var admin = RegisterRequest.builder()
					.name("Admin")
					.email("admin@gmail.com").password("Admin@123")
					.mobile("9344290971")
					.role("admin")
					.build();
			System.out.println("Admin Registration: " + authenticationService.register(admin).getMessage());

			var user = RegisterRequest.builder()
					.name("John")
					.email("john@gmail.com").password("John@123")
					.mobile("9344290971")
					.role("user")
					.build();
			System.out.println("User Registration: " + authenticationService.register(user).getMessage());
		};
	}

}