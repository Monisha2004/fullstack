package com.agroinnovate.monisha.repository;

// import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.monisha.model.Document;

public interface DocumentRepository extends JpaRepository<Document, String> {
    // Optional<Document> findByName(String fileName);

    // Optional<Document> findByEmail(String email);
}