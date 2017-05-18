package com.rem.service.user;


import com.rem.dao.repository.user.RemRoleRepository;
import com.rem.model.user.RemRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
