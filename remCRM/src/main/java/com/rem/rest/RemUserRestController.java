package com.rem.rest;


import com.rem.model.RemUser;

import com.rem.service.RemUserService;


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
        log.info("listAllRemUsers: {}", users);
        if (users.isEmpty()) {
            return new ResponseEntity<List<RemUser>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<RemUser>>(users, HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<RemUser> getRemUserById(@PathVariable("id") Integer id) {
        RemUser user = remUserService.findRemUser(id);
        if (user == null) {
            log.info("getRemUserById: Id: " + id + " Not found!");
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        log.info("getRemUserById: {}", user);
        return new ResponseEntity<RemUser>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<RemUser> createRemUser(@Valid @RequestBody RemUser remUser) {
        log.debug("createRemUser: {}", remUser.toString());
        return new ResponseEntity<RemUser>(remUserService.createRemUser(remUser), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
    public ResponseEntity<RemUser> updateRemUser(@PathVariable("id") Integer id, @RequestBody RemUser user) {
        RemUser currentUser = remUserService.findRemUser(id);
        if (currentUser == null) {
            log.info("updateRemUser: Id: " + id + " Not found!");
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        currentUser.setUserEmail(user.getUserEmail());
        currentUser.setUserName(user.getUserName());
        currentUser.setUserPassword(user.getUserPassword());
        log.debug("updateRemUser: {}", currentUser.toString());
        return new ResponseEntity<RemUser>(remUserService.updateRemUser(currentUser), HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<RemUser> deleteRemUser(@PathVariable("id") Integer id) {
        RemUser user = remUserService.findRemUser(id);
        if (user == null) {
            return new ResponseEntity<RemUser>(HttpStatus.NOT_FOUND);
        }
        remUserService.deleteRemUser(id);
        log.debug("deleteRemUser: {}", id);
        return new ResponseEntity<RemUser>(HttpStatus.NO_CONTENT);
    }

}
