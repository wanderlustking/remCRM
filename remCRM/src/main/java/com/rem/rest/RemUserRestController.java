package com.rem.rest;

import com.rem.model.RemUser;
import com.rem.service.RemUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Colt on 3/19/2017.
 */
@RestController
public class RemUserRestController {


    @Autowired
    private RemUserService remUserService;

    @RequestMapping(value = "/user/", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<RemUser>> listAllRemUsers() {
        List<RemUser> users = remUserService.findAllRemUsers();
        if(users.isEmpty()){
            return new ResponseEntity<List<RemUser>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<RemUser>>(users, HttpStatus.OK);
    }
}
