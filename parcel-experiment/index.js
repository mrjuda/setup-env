import { formatDistanceToNow } from 'date-fns'

const date = '1996-09-13 10:00:00';
document.body.textContent = formatDistanceToNow(new Date(date)) + ' ago';
