package com.agroinnovate.monisha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.monisha.model.Loan;

public interface LoanRepository extends JpaRepository<Loan, String> {

}
