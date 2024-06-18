import { TVMazeTypes } from "~/types";
import { ShowModel } from "../models/ShowModel";
import { GenreModel } from "../models/GenreModel";

export const aggregateData = (shows: TVMazeTypes.Show[]) => {
  const showById = new Map<number, ShowModel>();
  const showsByGenre = new Map<string, ShowModel[]>();

  shows.forEach((show) => {
    const showModel = new ShowModel(show);

    showById.set(show.id, showModel);
    show.genres.forEach((genre) => {
      if (!showsByGenre.has(genre)) {
        showsByGenre.set(genre, []);
      }
      showsByGenre.get(genre)?.push(showModel);
    });
  });

  const genreByName = new Map<string, GenreModel>();
  for (const [genre, genreShows] of showsByGenre.entries()) {
    genreByName.set(
      genre,
      new GenreModel(
        genre,
        [...genreShows].sort((a, b) => b.rating - a.rating),
        [...genreShows].sort((a, b) => b.premieredEpoc - a.premieredEpoc)
      )
    );
  }

  const orderedGenres = [...genreByName.values()].sort(
    (a, b) => b.numberOfShows - a.numberOfShows
  );

  return {
    showById,
    genreByName,
    orderedGenres,
  };
};
