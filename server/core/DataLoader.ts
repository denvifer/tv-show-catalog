import { TVMazeTypes } from "~/types";
import { getTVMazeShows } from "../externalApi/tvMazeApi";

export class DataLoader {
  private shows: TVMazeTypes.Show[] = [];
  private nextPage = 0;

  public getShows() {
    return [...this.shows];
  }

  public async load() {
    this.shows = [];
    let isEndReached = false;
    let isRetrying = false;
    do {
      if (isRetrying) {
        console.log(`${DataLoader.name}: Delay before a retry.`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      console.log(`${DataLoader.name}: Loading page ${this.nextPage}.`);
      let response: Response | null = null;
      try {
        response = await getTVMazeShows(this.nextPage);
        if (!response.ok) {
          console.log(
            `${DataLoader.name}: Status code ${response.status} has been received for the page ${this.nextPage}.`
          );
          if (response.status === 404) {
            isEndReached = true;
          } else {
            isRetrying = true;
          }
          continue;
        }
      } catch (e) {
        console.log(
          `${DataLoader.name}: Error loading page ${this.nextPage}, ${e}.`
        );
        isRetrying = true;
        continue;
      }

      const shows = await response.json();
      this.shows.push(...shows);
      this.nextPage++;
    } while (!isEndReached);
    console.log(`${DataLoader.name}: Loading complete.`);
  }
}
