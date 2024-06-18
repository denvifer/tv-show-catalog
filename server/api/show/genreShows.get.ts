import { ApiTypes } from "~/server/apiTypes";
import { pageSize } from "~/server/const";
import { MemoryCache } from "~/server/core/MemoryCache";
import { ShowTileDto } from "~/server/dto/ShowTileDto";

const getGenreShows = (query: ApiTypes.Show.GenreShows.Query) => {
  const genreByName = MemoryCache.getGenreMap();
  const genre = genreByName.get(query.genre);
  const shows =
    query.order === "rating" ? genre?.topRatedShows : genre?.latestShows;

  const offset = query.offset || 0;
  const showsSlice = shows?.slice(offset, offset + pageSize);
  const showTiles = showsSlice?.map((x) => new ShowTileDto(x));

  return showTiles;
};

export default defineEventHandler((e) => {
  const query = getQuery<Record<string, any>>(e);

  return getGenreShows({
    genre: query.genre,
    order: query.order,
    offset: Number(query.offset),
  });
});
