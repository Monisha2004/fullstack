package com.agroinnovate.monisha.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.monisha.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}