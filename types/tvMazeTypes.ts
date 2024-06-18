export namespace TVMazeTypes {
  export interface SearchResultEntry {
    show: Show;
    score: number;
  }

  export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string | null;
    ended: string;
    officialSite: string | null;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel: WebChannel | null;
    externals: Externals;
    image: Image | null;
    summary: string;
    updated: number;
    _links: Links;
  }

  export interface Schedule {
    time: string;
    days: string[];
  }

  export interface Rating {
    average: number;
  }

  export interface Network {
    id: number;
    name: string;
    country: Country;
    officialSite: string;
  }

  export interface Country {
    name: string;
    code: string;
    timezone: string;
  }

  export interface Externals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  }

  export interface Image {
    medium: string;
    original: string;
  }

  export interface Links {
    self: Link;
    previousepisode: LinkWithName;
  }

  export interface Link {
    href: string;
  }

  export interface LinkWithName extends Link {
    name: string;
  }

  export interface WebChannel {
    id: number;
    name: string;
    country: Country | null;
    officialSite: string;
  }
}
