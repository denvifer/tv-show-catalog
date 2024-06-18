import { MemoryCache } from "~/server/core/MemoryCache";
import { ShowTileDto } from "../dto/ShowTileDto";
import { GenreBasicsDto } from "../dto/GenreBasicsDto";
import { BasicsDto } from "../dto/BasicsDto";
import { ApiTypes } from "../apiTypes";
import { pageSize } from "../const";

const getBasics = (query: ApiTypes.Basics.Query) => {
  const ordredGenres = MemoryCache.getOrderedGenres();

  return new BasicsDto(
    ordredGenres.map((genre) => {
      const shows =
        query.order === "rating" ? genre?.topRatedShows : genre?.latestShows;

      const showTiles = shows
        .slice(0, pageSize)
        .map((show) => new ShowTileDto(show));
      return new GenreBasicsDto(genre, showTiles);
    })
  );
};

export default defineEventHandler((e) => {
  const query = getQuery<Record<string, any>>(e);

  return getBasics({
    order: query.order,
  });
});
