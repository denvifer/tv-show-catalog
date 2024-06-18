import { ShowModel } from "./ShowModel";

export class GenreModel {
  public name: string;
  public topRatedShows: ShowModel[];
  public latestShows: ShowModel[];
  public numberOfShows: number;

  public constructor(
    name: string,
    topRatedShows: ShowModel[],
    latestShows: ShowModel[]
  ) {
    this.name = name;
    this.topRatedShows = topRatedShows;
    this.latestShows = latestShows;
    this.numberOfShows = topRatedShows.length;
  }
}
