
import { httpService } from "@/config/apiConfig";
import { END_POINTS } from "@/constants/end-points";
import { IAuthLogin, IAuthRegister } from "@/interfaces/authUserData";

// AUTH OPERATIONS


export const postLoginMutationFn = async (values: IAuthLogin) => {
    const response = await httpService.post(
      END_POINTS.USER_AUTH.USER_LOGIN,
      values
    );
    return response.data;
  };

  export const postRegisterMutationFn = async (values: IAuthRegister) => {
    const response = await httpService.post(
      END_POINTS.USER_AUTH.USER_REGISTER,
      values
    );
    return response.data;
  }

