import useSWRMutation from "swr/mutation";
import clientApi from "../../lib/services/apiService";
import { storeCache } from "../../utils/cache";
import { LoginResponse } from "./types";
import { FormData } from "./types";

type Arg = { arg: FormData };
async function login(_: unknown, { arg }: Arg): Promise<LoginResponse> {
  const { data } = await clientApi.post("/api/v1/login", arg);
  console.log(data);
  storeCache("user", JSON.stringify(data));
  storeCache("token", data.access_token);
  window.location.href = "/";
  return data;
}

function useLogin() {
  const { trigger, data, isMutating } = useSWRMutation<LoginResponse, Error>(
    "/api/v1/login",
    login
  );

  return {
    isSignedIn: data,
    login: trigger,
    isLoading: isMutating,
  };
}

export default useLogin;
