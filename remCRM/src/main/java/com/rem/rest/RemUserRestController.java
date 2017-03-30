package com.rem.rest;


import com.rem.model.RemUser;

import com.rem.service.RemUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import java.util.List;

/**
 * Created by Colt on 3/19/2017.
 */
@RestController
public class RemUserRestController {


    @Autowired
    private RemUserService remUserService;

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public ResponseEntity<List<RemUser>> listAllRemUsers() {
        List<RemUser> users = remUserService.findAllRemUsers();
        if(users.isEmpty()){
            return new ResponseEntity<List<RemUser>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<RemUser>>(users, HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<RemUser> addRemUser(@PathVariable("id")Integer id) {
        RemUser user=remUserService.findRemUserById(id);
        if(user==null){
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<RemUser>(user,HttpStatus.OK);
    }

    @RequestMapping(value ="/users", method = RequestMethod.POST )
    public ResponseEntity<RemUser> create( @RequestBody RemUser remUser ){
        return new ResponseEntity<RemUser>(remUserService.createRemUser( remUser ),HttpStatus.CREATED);
    }

}
