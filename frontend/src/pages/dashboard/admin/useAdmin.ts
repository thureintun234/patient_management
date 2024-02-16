import useSWR from "swr";
import {
  getDatas,
} from "../../../lib/services/admin";
import { Admin } from "./types";

export function useAdmin(searchQuery: string = "") {
  const { data, error, isLoading , isValidating, mutate } = useSWR<Admin[], Error>(
    ["/api/v1/users", searchQuery],
    getDatas
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
    refetch: mutate
  };
}