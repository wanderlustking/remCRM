package com.rem.rest;


import com.rem.model.user.RemUser;

import com.rem.service.user.RemUserService;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
public class RemUserRestController {

    @Autowired
    private RemUserService remUserService;

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public ResponseEntity<List<RemUser>> listAllRemUsers() {
        List<RemUser> users = remUserService.findAllRemUsers();
        if (users.isEmpty()) {
            return new ResponseEntity<List<RemUser>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<RemUser>>(users, HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<RemUser> getRemUserById(@PathVariable("id") Integer id) {
        RemUser user = remUserService.findRemUser(id);
        if (user == null) {
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<RemUser>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<RemUser> createRemUser(@Valid @RequestBody RemUser remUser) {
        return new ResponseEntity<RemUser>(remUserService.createRemUser(remUser), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
    public ResponseEntity<RemUser> updateRemUser(@PathVariable("id") Integer id, @RequestBody RemUser user) {
        RemUser currentUser = remUserService.findRemUser(id);
        if (currentUser == null) {
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        currentUser.setUserEmail(user.getUserEmail());
        currentUser.setUserName(user.getUserName());
        currentUser.setUserPassword(user.getUserPassword());
        return new ResponseEntity<RemUser>(remUserService.updateRemUser(currentUser), HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<RemUser> deleteRemUser(@PathVariable("id") Integer id) {
        RemUser user = remUserService.findRemUser(id);
        if (user == null) {
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        remUserService.deleteRemUser(id);
        return new ResponseEntity<RemUser>(HttpStatus.NO_CONTENT);
    }

}
