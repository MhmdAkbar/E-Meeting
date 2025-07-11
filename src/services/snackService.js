
import { api } from './../utils/api';
export async function fetchSnacks({ page = 1, page_size = 10 } = {}) {
  const response = await api.get("/snacks", {
    params: { page, page_size },
  });
  return response.data.snacks;
}
