package com.rem.util;

import com.rem.util.exceptions.MyResourceNotFoundException;

import java.util.List;

/**
 * Created by Colt on 3/26/2017.
 */
public class RestPreconditions {
    public static <T> T checkFound(final T resource) {
        if (resource == null) {
            throw new MyResourceNotFoundException();
        }
        return resource;
    }
    public static List checkFound(final List resources){
        if (resources == null) {
            throw new MyResourceNotFoundException();
        }
        return resources;
    }
}
