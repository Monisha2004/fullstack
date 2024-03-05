package com.agroinnovate.monisha.service.Impl;

import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.agroinnovate.monisha.dto.response.UploadImageResponse;
import com.agroinnovate.monisha.model.Document;
import com.agroinnovate.monisha.repository.DocumentRepository;
import com.agroinnovate.monisha.service.DocumentService;
import com.agroinnovate.monisha.utils.DocumentUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class DocumentServiceImpl implements DocumentService {

    private final DocumentRepository documentRepository;

    @Override
    public UploadImageResponse uploadImage(MultipartFile file, String email) throws IOException {
        Document document = documentRepository.save(Document.builder()
                .name(file.getOriginalFilename())
                .email(email)
                .docType(file.getContentType())
                .imageData(DocumentUtils.compressImage(file.getBytes()))
                .build());
        documentRepository.save(document);
        return UploadImageResponse.builder()
                .message("Uploaded Successfully!")
                .build();
    }

    // @Override
    // public byte[] downloadImage(String email) {
    // Optional<Document> dbImageData = documentRepository.findByEmail(email);
    // byte[] images =
    // DocumentUtils.decompressImage(dbImageData.get().getImageData());
    // return images;
    // }
}