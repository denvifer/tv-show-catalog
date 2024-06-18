export const tvMazeBaseUrl = "https://api.tvmaze.com/";

export const getTVMazeShows = (page: number) =>
  fetch(`${tvMazeBaseUrl}shows?page=${page}`);
