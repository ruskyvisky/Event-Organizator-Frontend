
import { httpService } from "@/config/apiConfig";
import { END_POINTS } from "@/constants/end-points";



export const getEvents = async () => {
  return await httpService.get(END_POINTS.EVENT.EVENT_ALL);
};

export const getEvent = async (id: string) => {
  return await httpService.get(END_POINTS.EVENT.EVENT_SINGLE + id);
};

export const createEvent = async (values: INewEventData) => {
  return await httpService.post(END_POINTS.EVENT.EVENT_CREATE, values);
};

export const joinEvent = async (eventId: string) => {
    return await httpService.post(END_POINTS.EVENT.EVENT_JOIN, { eventId });
    }

