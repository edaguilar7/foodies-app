import React from 'react';
import { NotificationManager } from 'react-notifications';
import moment from 'moment';

export const processResponse = response => {
    const { status, data } = response;
    switch(status) {
        case 404: 
            const { error } = data;
            NotificationManager.error(`Ocurrió un error durante la operación. Código de error: ${status}. Error: ${error}`);
            return { ok: false };
        case 442: 
            const { message } = data;
            NotificationManager.error(`Ocurrió un error durante la operación. Código de error: ${status}. Error: ${message}`);
            return { ok: false };
        default: 
            const { data: result } = data;
            return { ok: true, payload: result }
    }
}

export const getFormattedHour = (str, format) => {
    if(!str) return "";
    const pieces = str.split(':');
    const today = moment().hour(pieces[0]).minute(pieces[1]);
    return today.format(format);
}