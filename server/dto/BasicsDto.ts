import { GenreBasicsDto } from "./GenreBasicsDto";

export class BasicsDto {
  public genres: GenreBasicsDto[];

  public constructor(genres: GenreBasicsDto[]) {
    this.genres = genres;
  }
}
