package com.agroinnovate.monisha.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.agroinnovate.monisha.dto.response.UploadImageResponse;
import com.agroinnovate.monisha.service.DocumentService;
import com.agroinnovate.monisha.utils.MyConstant;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.AUTH)
@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
@RequiredArgsConstructor
@Tag(name = "Document")

public class DocumentController {
    private final DocumentService documentService;

    // @PostMapping("/{email}")
    // public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile
    // file, @PathVariable String email)
    // throws IOException {
    // String uploadImage = documentService.uploadImage(file, email);
    // return ResponseEntity.status(HttpStatus.OK)
    // .body(uploadImage);
    // }

    // @GetMapping("/document/{email}")
    // public ResponseEntity<?> downloadImage(@PathVariable String email) {
    // byte[] imageData = documentService.downloadImage(email);
    // return ResponseEntity.status(HttpStatus.OK)
    // .contentType(MediaType.valueOf("image/png"))
    // .body(imageData);
    // }

    @PostMapping("/upload/{email}")
    public ResponseEntity<UploadImageResponse> uploadImage(@RequestParam("file") MultipartFile file,
            @PathVariable String email) {
        try {
            UploadImageResponse response = documentService.uploadImage(file, email);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (IOException e) {
            e.printStackTrace(); // Log the exception for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new UploadImageResponse());
        }
    }

}