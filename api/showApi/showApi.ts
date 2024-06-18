import type { ApiTypes } from "~/server/apiTypes";
import { fetchJson } from "../common";
import { tvMazeBaseUrl } from "~/server/externalApi/tvMazeApi";
import type { TVMazeTypes } from "~/types";
import type { AppTypes } from "~/types/appTypes";

export const getGenreShows = (query: ApiTypes.Show.GenreShows.Query) => {
  const searchParams = new URLSearchParams();
  searchParams.append("genre", query.genre);
  searchParams.append("order", query.order);
  searchParams.append("offset", `${query.offset || 0}`);

  return fetchJson<ApiTypes.Show.ShowTiles>(
    `/api/show/genreShows?${searchParams}`
  );
};

export const getShow = (id: number) =>
  fetchJson<ApiTypes.Show.GetShow.Response>(`/api/show/${id}`);

export const searchShows = async (searchText: string) => {
  const searchParams = new URLSearchParams({
    q: searchText,
  });

  const shows = await fetchJson<TVMazeTypes.SearchResultEntry[]>(
    `${tvMazeBaseUrl}/search/shows?${searchParams}`
  );
  const tiles = shows.map(mapSearchResultEntry);
  return tiles;
};

const mapSearchResultEntry = ({
  show,
}: TVMazeTypes.SearchResultEntry): AppTypes.ShowTile => ({
  id: show.id,
  name: show.name,
  rating: show.rating.average,
  premiered: show.premiered,
  language: show.language,
  imageMedium: show.image?.medium ?? null,
});
