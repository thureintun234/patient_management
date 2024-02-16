import useSWR from "swr";
import {
  getDatas,
} from "../../../lib/services/admin";
import { Volunteer } from "./types";

export function useAdmin(searchQuery: string = "") {
  const { data, error, isLoading , isValidating, mutate } = useSWR<Volunteer[], Error>(
    ["/api/v1/volunteers", searchQuery],
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