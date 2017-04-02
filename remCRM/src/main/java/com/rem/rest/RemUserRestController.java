package com.rem.rest;


import com.rem.model.RemUser;

import com.rem.service.RemUserService;

import lombok.extern.jbosslog.JBossLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import java.util.List;

/**
 * Created by Colt on 3/19/2017.
 */
@JBossLog
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
        RemUser user = remUserService.findRemUserById(id);
        if (user == null) {
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<RemUser>(user,HttpStatus.OK);
    }

    @RequestMapping(value ="/users", method = RequestMethod.POST )
    public ResponseEntity<RemUser> create(@RequestBody RemUser remUser ){
        log.info("User update info: " + remUser.toString());
        return new ResponseEntity<RemUser>(remUserService.createRemUser(remUser), HttpStatus.CREATED);
    }

    @RequestMapping(value ="/users/{id}", method = RequestMethod.PUT )
    public ResponseEntity<RemUser> create(@PathVariable("id")Integer id,@RequestBody RemUser user ){
        RemUser currentUser= remUserService.findRemUserById(id);
        if (currentUser == null) {
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        currentUser.setUserEmail(user.getUserEmail());
        currentUser.setUserName(user.getUserName());
        currentUser.setUserPassword(user.getUserPassword());
        return new ResponseEntity<RemUser>(remUserService.updateRemUser(currentUser),HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}",method = RequestMethod.DELETE)
    public ResponseEntity<RemUser> delete(@PathVariable("id") Integer id){
        RemUser user = remUserService.findRemUserById(id);
        if (user == null) {
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        remUserService.deleteTemUserById(id);
        return new ResponseEntity<RemUser>(HttpStatus.NO_CONTENT);
    }

}
