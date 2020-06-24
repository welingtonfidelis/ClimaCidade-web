import { format } from 'date-fns';

export default {
    dateTimeToString(date) {
        date = date ? new Date(date) : new Date();
        return format(date, 'dd/MM/yyyy HH:mm');
    },
}