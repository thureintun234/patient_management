import useSWR from "swr";
import {
  getDatas,
  getData,
} from "../../../lib/services/record";
import { Record, RecordCollection,History } from "./types";

export function useRecord(searchQuery: string = "") {
  const { data, error, isLoading, isValidating, mutate } = useSWR<Record[], Error>(
    ["/api/v1/regions", searchQuery],
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

export function useSingleRecord(id: number) {
  const { data, error, isLoading, isValidating, mutate } = useSWR<RecordCollection, Error>(
    ["/api/records", id],
    getData
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
    refetch: mutate
  };
}

export function useViewHistory(id: number) {
  const { data, error, isLoading, isValidating, mutate } = useSWR<History[], Error>(
    ["/api/message-history?telegramChatID="+id, {}],
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




