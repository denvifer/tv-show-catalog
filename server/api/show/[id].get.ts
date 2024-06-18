import { MemoryCache } from "~/server/core/MemoryCache";

const getShow = (id: number) => MemoryCache.getShowMap().get(id);

export default defineEventHandler((e) =>
  getShow(Number(getRouterParam(e, "id")))
);
