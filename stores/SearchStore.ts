import { searchShows } from "~/api";
import type { AppTypes } from "~/types/appTypes";

const minNumberOfCharacters = 3;

export class SearchStore {
  public searchText = ref("");
  public tiles = ref<AppTypes.ShowTile[]>([]);

  public async triggerSearch() {
    const searchText = this.searchText.value;

    if (searchText.length < minNumberOfCharacters) {
      if (this.tiles.value.length) {
        this.tiles.value = [];
      }
      return;
    }

    try {
      const tiles = await searchShows(searchText);
      this.tiles.value = tiles;
    } catch (e) {
      // TODO: Handle error
    }
  }
}
