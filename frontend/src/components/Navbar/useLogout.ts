import useSWRMutation from "swr/mutation";
import clientApi from "../../lib/services/apiService";
import { removeCache } from "../../utils/cache";

export async function signOut() {
 // const { data } = await clientApi.get("/api/logout");
  removeCache("token");
  removeCache("user");
  window.location.href = "/auth/login";
  return true;
}

function useLogout() {
  const { trigger, isMutating } = useSWRMutation("/api/login", signOut);

  return {
    logout: trigger,
    isLoading: isMutating,
  };
}

export default useLogout;
