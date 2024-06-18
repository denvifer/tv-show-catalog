import { fetchJson } from "../common";
import type { ApiTypes } from "~/server/apiTypes";

export const getBasics = (query: ApiTypes.Basics.Query) => {
  const searchParams = new URLSearchParams();
  searchParams.append("order", query.order);

  return fetchJson<ApiTypes.Basics.Response>(`/api/basics?${searchParams}`);
};
