import { TVMazeTypes } from "~/types";

export class ShowModel {
  public id: number;
  public url: string;
  public name: string;
  public genres: string[];
  public language: string;
  public premiered: string | null;
  public premieredEpoc: number;
  public officialSite: string | null;
  public rating: number;
  public imageMedium: string | null;
  public imageOriginal: string | null;
  public summary: string;

  constructor(show: TVMazeTypes.Show) {
    this.id = show.id;
    this.url = show.url;
    this.name = show.name;
    this.genres = show.genres;
    this.language = show.language;
    this.premiered = show.premiered;
    this.premieredEpoc = show.premiered ? Date.parse(show.premiered) : 0;
    this.officialSite = show.officialSite;
    this.rating = show.rating.average;
    this.imageMedium = show.image?.medium ?? null;
    this.imageOriginal = show.image?.original ?? null;
    this.summary = show.summary;
  }
}
