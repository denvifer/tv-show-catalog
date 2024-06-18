export namespace AppTypes {
  export type Order = "rating" | "date";

  export interface ShowTile {
    id: number;
    name: string;
    rating: number;
    premiered: string | null;
    language: string;
    imageMedium: string | null;
  }

  export interface Show {
    id: number;
    url: string;
    name: string;
    genres: string[];
    language: string;
    premiered: string | null;
    premieredEpoc: number;
    officialSite: string | null;
    rating: number;
    imageMedium: string | null;
    imageOriginal: string | null;
    summary: string;
  }
}
