package com.agroinnovate.monisha.controller;

import static com.agroinnovate.monisha.utils.MyConstant.AUTH;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agroinnovate.monisha.dto.request.LoanRequest;
import com.agroinnovate.monisha.dto.request.UpdateLoanRequest;
import com.agroinnovate.monisha.dto.response.LoanResponse;
import com.agroinnovate.monisha.dto.response.UpdateLoanResponse;
import com.agroinnovate.monisha.model.Loan;
import com.agroinnovate.monisha.service.LoanService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RequestMapping(AUTH)
@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
@RequiredArgsConstructor
@Tag(name = "Loan", description = "Apply Loans")

@RestController
public class LoanController {
    private final LoanService loanService;

    @PreAuthorize("hasAnyAuthority('user:create', 'admin:read')")
    @PostMapping("/apply")
    public boolean add(@RequestBody Loan loan) {
        return loanService.addLoan(loan);
    }

    @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    @GetMapping("/getloan")
    public List<Loan> read() {
        return loanService.readLoan();
    }

    @PostMapping("/applyLoan")
    public ResponseEntity<LoanResponse> applyLoan(@RequestBody LoanRequest request) {
        LoanResponse response = new LoanResponse();
        try {
            response = loanService.applyLoan(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PreAuthorize("hasAuthority('admin:update')")
    @PutMapping("/updateLoanStatus")
    public ResponseEntity<UpdateLoanResponse> updateLoanStatus(@RequestBody UpdateLoanRequest request) {
        UpdateLoanResponse response = new UpdateLoanResponse();
        try {
            boolean updated = loanService.updatedLoanStatus(request.getLoanId(), request.getLoanStatus());
            if (updated) {
                response.setMessage("Success");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                response.setMessage("Failed to update loan status. Loan not found.");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            response.setMessage("Failed to update loan status due to an unexpected error.");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}