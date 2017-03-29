package com.rem.dao.repository;

import com.rem.model.RemUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;

/**
 * Created by Colt on 3/26/2017.
 */

public interface RemUserRepository extends CrudRepository<RemUser, Integer> {
}
