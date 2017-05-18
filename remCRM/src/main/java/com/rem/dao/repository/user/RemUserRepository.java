package com.rem.dao.repository.user;

import com.rem.model.user.RemUser;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Colt on 3/26/2017.
 */

public interface RemUserRepository extends CrudRepository<RemUser, Integer> {
}
