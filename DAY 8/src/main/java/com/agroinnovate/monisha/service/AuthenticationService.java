package com.agroinnovate.monisha.service;

import java.io.IOException;

import com.agroinnovate.monisha.dto.request.LoginRequest;
import com.agroinnovate.monisha.dto.request.RegisterRequest;
import com.agroinnovate.monisha.dto.response.LoginResponse;
import com.agroinnovate.monisha.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}