package com.rem.util.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Colt on 3/26/2017.
 */
@ResponseStatus( value = HttpStatus.NOT_FOUND )
public final class MyResourceNotFoundException extends RuntimeException{
    private static final long serialVersionUID = -3357578235086772559L;
}