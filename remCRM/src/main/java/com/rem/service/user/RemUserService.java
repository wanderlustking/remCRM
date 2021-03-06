package com.rem.service.user;

import com.rem.dao.repository.user.RemUserRepository;
import com.rem.model.user.RemUser;
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

    public RemUser findRemUser(Integer integer) {
        return remUserRepository.findOne(integer);
    }
    public List<RemUser> findAllRemUsers(){
        return (List<RemUser>) remUserRepository.findAll();
    }
    public RemUser createRemUser(RemUser user) {
        return remUserRepository.save(user);
    }
    public RemUser updateRemUser(RemUser user) {
        return remUserRepository.save(user);
    }
    public void deleteRemUser(Integer id){
        remUserRepository.delete(id);
    }
}
