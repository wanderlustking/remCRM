package com.rem.service;

import com.rem.dao.repository.RemUserRepository;
import com.rem.model.RemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Colt on 3/19/2017.
 */
@Service
public class RemUserService {
    @Autowired
    private RemUserRepository remUserRepository;

    public RemUser findRemUserById(Integer integer){
        return remUserRepository.findOne(integer);
    }

    public List<RemUser> findAllRemUsers(){
        return (List<RemUser>) remUserRepository.findAll();
    }
    public RemUser createRemUser(RemUser user){
        return remUserRepository.save(user);
    }
}
