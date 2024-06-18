import { GenreModel } from "../models/GenreModel";
import { ShowTileDto } from "./ShowTileDto";

export class GenreBasicsDto {
  name: string;
  numberOfShows: number;
  shows: ShowTileDto[];

  public constructor(genreModel: GenreModel, shows: ShowTileDto[]) {
    this.name = genreModel.name;
    this.numberOfShows = genreModel.numberOfShows;
    this.shows = shows;
  }
}
