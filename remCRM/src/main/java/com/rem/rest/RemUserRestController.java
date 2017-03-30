package com.rem.rest;

import com.rem.model.RemUser;
import com.rem.service.RemUserService;
import com.rem.util.RestPreconditions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Colt on 3/19/2017.
 */
@RestController
public class RemUserRestController {


    @Autowired
    private RemUserService remUserService;

    @RequestMapping(value = "/user/", method = RequestMethod.GET)
    public List<RemUser> listAllRemUsers() {
        return RestPreconditions.checkFound(remUserService.findAllRemUsers());

    }
    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public RemUser addRemUser(@PathVariable("id")Integer id) {
        return RestPreconditions.checkFound(remUserService.findRemUserById(id));
    }
}
