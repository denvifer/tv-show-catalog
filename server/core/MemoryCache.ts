import { ShowModel } from "../models/ShowModel";
import { GenreModel } from "../models/GenreModel";

let showById: Map<number, ShowModel> | null = null;
let genreByName: Map<string, GenreModel> | null = null;
let orderedGenres: GenreModel[] | null = null;

export const MemoryCache = {
  getShowMap() {
    return showById ?? new Map<number, ShowModel>();
  },
  getGenreMap() {
    return genreByName ?? new Map<string, GenreModel>();
  },
  getOrderedGenres() {
    return orderedGenres ?? [];
  },

  setShowMap(value: Map<number, ShowModel>) {
    showById = value;
  },
  setGenreMap(value: Map<string, GenreModel>) {
    genreByName = value;
  },
  setOrderedGenres(value: GenreModel[]) {
    orderedGenres = value;
  },
};
