

import cookie from "js-cookie";
import { useMutation } from "react-query";
import { postLoginMutationFn , postRegisterMutationFn} from "@/api/queryFns/AuthQueryFns";
import { useRouter } from "next/navigation";
import { toastError, toastSuccess } from "@/components/toastComponent";
const useAuth =  ()=>{
    const router = useRouter();
    
    const { mutate, isLoading: loginLoading } = useMutation(postLoginMutationFn, {
        onSuccess(data) {
          cookie.set("authToken", data.data, {
            expires: 1,
            sameSite: "none",
            secure: true,
          });
          router.push("/events");
        },
        onError() {
          toastError("Giriş Başarısız");
        },
      });

    const {mutate:userRegister , isLoading: registerLoading} = useMutation(postRegisterMutationFn, {

        onSuccess(data){
             toastSuccess("Kayıt Başarılı");
             router.push("/events");
        },
        onError(){
            toastError("Kayıt Başarısız");
        }
    })
    
    return {mutate, loginLoading, userRegister,registerLoading}


}

export default useAuth;