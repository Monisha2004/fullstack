package com.agroinnovate.monisha.service;

import java.util.List;

import com.agroinnovate.monisha.dto.request.LoanRequest;
import com.agroinnovate.monisha.dto.response.LoanResponse;
import com.agroinnovate.monisha.model.Loan;

public interface LoanService {
    LoanResponse applyLoan(LoanRequest request);

    boolean addLoan(Loan loan);

    List<Loan> readLoan();

    boolean updatedLoanStatus(String loanId, String loanStatus);

}