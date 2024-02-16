import { FormData } from "../../pages/dashboard/volunteer/types";
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
  const res = await clientApi.post("/api/v1/volunteers", data);
  return res.data;
}

type UpdateDataArg = {
  id: number;
  data: FormData;
};
export async function updateData({ id, data }: UpdateDataArg) {
  const res = await clientApi.put(`/api/v1/volunteers/${id}`, data);
  return res.data;
}

type DeleteDataArg = {
  id: number;
};
export async function deleteData({ id }: DeleteDataArg) {
  console.log(id);
  
  const res = await clientApi.delete(`/api/v1/volunteers/${id}`);
  return res.data;
}
