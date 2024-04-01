import { API_URL } from "../config/apiRoute";

export const END_POINTS = {

    USER_AUTH : {
        USER_LOGIN: API_URL + "auth/login",
        USER_REGISTER: API_URL + "auth/register",
    },

    USER : {
        USER_GET: API_URL + "/user/",
        USER_ALL: API_URL + "/user/all",
    },
    EVENT: {
        EVENT_GET: API_URL + "/event/",
        EVENT_ALL: API_URL + "/event/all",
        EVENT_SINGLE: API_URL + "/event/",
        EVENT_CREATE: API_URL + "/event/create",
        EVENT_UPDATE: API_URL + "/event/",
        EVENT_DELETE: API_URL + "/event/",
        EVENT_JOIN: API_URL + "/event/join",
        EVENT_LEAVE: API_URL + "/event/leave",
        EVENT_PARTICIPANTS: API_URL + "/event/participants/",
    },
    COMMENT: {
        COMMENT_CREATE: API_URL + "/comment/",
        COMMENT_UPDATE: API_URL + "/comment/",
        COMMENT_DELETE: API_URL + "/comment/",
        COMMENT_GET: API_URL + "/comment/",
        COMMENT_ALL: API_URL + "/comment/all",
        COMMENT_BY_EVENT: API_URL + "/comment/event/",
    }

}