import { DataLoader } from "../core/DataLoader";
import { MemoryCache } from "../core/MemoryCache";

async function startup() {
  const dataLoader = new DataLoader();

  await dataLoader.load();
  const shows = dataLoader.getShows();
  const { showById, genreByName, orderedGenres } = aggregateData(shows);

  MemoryCache.setShowMap(showById);
  MemoryCache.setGenreMap(genreByName);
  MemoryCache.setOrderedGenres(orderedGenres);
}

export default defineNitroPlugin(startup);
