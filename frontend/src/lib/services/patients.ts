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

