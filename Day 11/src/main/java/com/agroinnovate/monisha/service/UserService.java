package com.agroinnovate.monisha.service;

import java.util.List;

import com.agroinnovate.monisha.model.User;

public interface UserService {

    public User getUserByEmail(String email);

    List<User> getUser();

    boolean updateProfile(String name, String mobile, String email);

    public boolean deleteProfile(String email);

}