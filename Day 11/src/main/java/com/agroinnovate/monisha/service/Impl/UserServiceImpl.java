package com.agroinnovate.monisha.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.agroinnovate.monisha.model.User;
import com.agroinnovate.monisha.repository.UserRepository;
import com.agroinnovate.monisha.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public List<User> getUser() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).get();
    }

    @Override
    public boolean updateProfile(String name, String mobile, String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setName(name);
            user.setMobile(mobile);
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteProfile(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            userRepository.delete(user);
            return true;
        }
        return false;
    }
}