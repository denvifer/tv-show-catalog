import type { InjectionKey } from "vue";
import { CatalogStore } from "./CatalogStore";
import { SearchStore } from "./SearchStore";

export class AppStore {
  public readonly catalogStore = new CatalogStore();
  public readonly searchStore = new SearchStore();

  public static injectionKey: InjectionKey<AppStore> = Symbol(AppStore.name);
}
