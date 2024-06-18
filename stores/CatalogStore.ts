import { CatalogSectionStore } from "./CatalogSectionStore";
import { getBasics, getGenreShows } from "~/api";
import type { AppTypes } from "~/types/appTypes";

export class CatalogStore {
  public order = ref<AppTypes.Order>("rating");
  public readonly sectionStores: Ref<CatalogSectionStore[]> = ref([]);

  public constructor() {
    markRaw(this);
  }

  public async loadBasics() {
    try {
      const data = await getBasics({ order: this.order.value });
      this.sectionStores.value = data.genres.map((genre) => {
        const sectionStore = new CatalogSectionStore(
          {
            title: genre.name,
            tiles: genre.shows,
            totalNumberOfTiles: genre.numberOfShows,
          },
          {
            getTiles: (offset: number) =>
              getGenreShows({
                genre: genre.name,
                order: this.order.value,
                offset,
              }),
          }
        );
        return sectionStore;
      });
    } catch (e) {
      // TODO: Handle error
    }
  }

  public setOrder(value: AppTypes.Order) {
    this.order.value = value;
  }
}
