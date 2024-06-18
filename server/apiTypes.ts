import { AppTypes } from "~/types/appTypes";
import { type BasicsDto } from "./dto/BasicsDto";
import { type ShowTileDto } from "./dto/ShowTileDto";
import { type ShowModel } from "./models/ShowModel";

export namespace ApiTypes {
  export namespace Basics {
    export interface Query {
      order: AppTypes.Order;
    }

    export type Response = BasicsDto;
  }

  export namespace Show {
    export type ShowTiles = ShowTileDto[];

    export namespace GenreShows {
      export interface Query {
        genre: string;
        offset?: number;
        order: AppTypes.Order;
      }
    }

    export namespace GetShow {
      export type Response = ShowModel;
    }
  }
}
