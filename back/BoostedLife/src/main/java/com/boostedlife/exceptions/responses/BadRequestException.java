package com.boostedlife.exceptions.responses;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author jhonfre
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {

    /**
     * use este error en los siguientes casos. - no se pudo eliminar un
     * elemento, no se pudo completar el proceso por algun error, hubo un error
     * con los datos enviados a la api.
     *
     * @param exception excepcion capturada
     */
    public BadRequestException(String exception) {
        super(exception);
    }

}
