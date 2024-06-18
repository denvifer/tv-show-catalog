import { ShowModel } from "../models/ShowModel";

export class ShowTileDto {
  public id: number;
  public name: string;
  public rating: number;
  public premiered: string | null;
  public language: string;
  public imageMedium: string | null;

  public constructor(showModel: ShowModel) {
    this.id = showModel.id;
    this.name = showModel.name;
    this.rating = showModel.rating;
    this.premiered = showModel.premiered;
    this.language = showModel.language;
    this.imageMedium = showModel.imageMedium;
  }
}
