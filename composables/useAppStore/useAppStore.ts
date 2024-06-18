import { AppStore } from "~/stores/AppStore";

export const useAppStore = () => inject(AppStore.injectionKey)!;
