package com.boostedlife.exceptions;

import java.util.Date;

public class ExceptionResponse {

    /**
     * tiempo en el que se capturo la exception.
     */
    private final Date timestamp;
    /**
     * mensaje que se mostrara en el error.
     */
    private final String message;
    /**
     * detalles de la exception.
     */
    private final String details;

    /**
     * constructor.
     *
     * @param timestamp hora y fecha del error
     * @param message mensaje del error
     * @param details detalles del error
     */
    public ExceptionResponse(Date timestamp, String message, String details) {
        super();
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
    }

    /**
     * get time.
     *
     * @return timestamp
     */
    public Date getTimestamp() {
        return timestamp;
    }

    /**
     * get messaje.
     *
     * @return message
     */
    public String getMessage() {
        return message;
    }

    /**
     * get details.
     *
     * @return details
     */
    public String getDetails() {
        return details;
    }

}
