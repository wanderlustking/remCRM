package com.rem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Colt on 4/8/2017.
 */
@Controller
@RequestMapping("/")
public class RemUserController {

    @RequestMapping(value = "UserManagement", method = RequestMethod.GET)
    public String getUserManagement() {
        return "UserManagement";
    }

    @RequestMapping(value = "resources/", method = RequestMethod.GET)
    public String getIndex() {
        return "index";
    }
}
