import useSWR from "swr";
import {
  getDatas,
} from "../../../lib/services/patients";
import { Patient } from "./types";

export function useAdmin(searchQuery: string = "") {
  const { data, error, isLoading , isValidating, mutate } = useSWR<Patient[], Error>(
    ["/api/v1/patients", searchQuery],
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