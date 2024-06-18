import type { AppTypes } from "~/types/appTypes";

interface Snapshot {
  title: string;
  tiles: AppTypes.ShowTile[];
  totalNumberOfTiles?: number;
}

interface Context {
  getTiles: (offset: number) => Promise<AppTypes.ShowTile[]>;
}

export class CatalogSectionStore {
  public readonly title: Ref<string>;
  public readonly tiles: Ref<AppTypes.ShowTile[]>;
  public readonly totalNumberOfTiles: Ref<number | undefined>;

  private readonly context: Context;

  private isBusy: boolean = false;

  public constructor(snapshot: Snapshot, context: Context) {
    this.title = ref(snapshot.title);
    this.tiles = ref(snapshot.tiles);
    this.totalNumberOfTiles = ref(snapshot.totalNumberOfTiles);

    this.context = context;

    markRaw(this);
  }

  public async loadNextPage() {
    if (this.isBusy) {
      return;
    }

    try {
      this.isBusy = true;
      const tiles = await this.context.getTiles(this.tiles.value.length);
      this.tiles.value.push(...tiles);
    } catch (e) {
      // TODO: Handle error
    } finally {
      this.isBusy = false;
    }
  }
}
