import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const requestMenu = () => axios.get(apiUrl + "/categories/");

export const requestCarousel = () => axios.get(apiUrl + "/slides");

export const requestHotlinks = () => axios.get(apiUrl +"/hotlinks");

export const sendNotificationEmail = body => axios.post("http://localhost:1337"+"/email/userNotification",body);

export const sendAdminNotificationEmail = body => axios.post("http://localhost:1337"+"/email/adminNotification",body);