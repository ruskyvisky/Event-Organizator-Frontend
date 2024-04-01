
import { httpService } from "@/config/apiConfig";
import { END_POINTS } from "@/constants/end-points";
import { INewCommentData } from "@/interfaces/NewCommentData";
export const getComments = async () => {
    return await httpService.get(END_POINTS.COMMENT.COMMENT_ALL);
    }

export const getComment = async (id: string) => {
    return await httpService.get(END_POINTS.COMMENT.COMMENT_GET + id);
    }

export const createComment = async (values: INewCommentData) => {
    return await httpService.post(END_POINTS.COMMENT.COMMENT_CREATE, values);
    }

    export const deleteComment = async (id: string) => {
        return await httpService.delete(END_POINTS.COMMENT.COMMENT_DELETE + id);
        }