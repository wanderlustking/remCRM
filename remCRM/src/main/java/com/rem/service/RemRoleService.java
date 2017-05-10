package com.rem.service;


import com.rem.dao.repository.RemRoleRepository;
import com.rem.model.RemRole;
import com.rem.model.RemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RemRoleService {
    @Autowired
    private RemRoleRepository remRoleRepository;

    public RemRole createRemRole(RemRole role){
        return remRoleRepository.save(role);
    }

    public RemRole updateRemRole(RemRole remRole) {
        return remRoleRepository.save(remRole);
    }

    public void deleteRemRole(int idRemRole) {
        remRoleRepository.delete(idRemRole);
    }

    public RemRole findRemRole(int idRemRole) {
        return remRoleRepository.findOne(idRemRole);
    }
}
