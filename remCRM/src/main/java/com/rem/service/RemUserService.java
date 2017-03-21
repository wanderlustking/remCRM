package com.rem.service;

import com.rem.model.RemUser;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Colt on 3/19/2017.
 */
@Service
public class RemUserService {
    public List<RemUser> findAllRemUsers(){
        List<RemUser> remUsers= new ArrayList<RemUser>();
        remUsers.add(new RemUser(1,"Maksym","Kmets"));
        remUsers.add(new RemUser(2,"Pavlo","Zubko"));
        remUsers.add(new RemUser(3,"Anastasiya","Milinchuk"));
        return remUsers;
    }
}
