import { FormData } from "../../pages/dashboard/admin/types";
import clientApi from "./apiService";

export async function getDatas([url, searchQuery]: string[]) {
  const res = await clientApi.get(url, {
    params: {
      q: searchQuery || "",
      per_page: 10,
    },
  });

  return res.data;
}

type CreateDataArg = {
  data: FormData;
};
export async function createData({ data }: CreateDataArg) {
  const res = await clientApi.post("/api/v1/register", data);
  return res.data;
}

type UpdateDataArg = {
  id: number;
  data: Omit<FormData, 'password'>;
};
export async function updateData({ id, data }: UpdateDataArg) {
  const res = await clientApi.put(`/api/v1/users/${id}`, data);
  return res.data;
}

type DeleteDataArg = {
  id: number;
};
export async function deleteData({ id }: DeleteDataArg) {
  const res = await clientApi.delete(`/api/v1/users/${id}`);
  return res.data;
}
