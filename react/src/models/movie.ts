export namespace TMDB {
  export interface Movies {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
  }

  export interface Movie {
    backdrop_path?: string
    first_air_date?: string
    genre_ids?: number[]
    id: number
    media_type: string
    name?: string
    origin_country?: string[]
    original_language?: string
    original_name?: string
    overview?: string
    popularity: number
    poster_path?: string
    vote_average?: number
    vote_count?: number
    adult?: boolean
    original_title?: string
    release_date?: string
    title?: string
    video?: boolean
    gender?: number
    known_for?: Knownfor[]
    known_for_department?: string
    profile_path?: string
    backdrop_image?: string
    poster_image?: string
  }

  export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Belongstocollection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    backdrop_image?: string
    poster_image?: string
  }

  interface Spokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }

  interface Productioncountry {
    iso_3166_1: string;
    name: string;
  }

  interface Productioncompany {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }

  interface Genre {
    id: number;
    name: string;
  }

  interface Belongstocollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  }

  interface Knownfor {
    adult?: boolean
    backdrop_path?: string
    genre_ids: number[]
    id: number
    media_type: string
    original_language: string
    original_title?: string
    overview: string
    poster_path?: string
    release_date?: string
    title?: string
    video?: boolean
    vote_average: number
    vote_count: number
    first_air_date?: string
    name?: string
    origin_country?: string[]
    original_name?: string
  }
}

export namespace TvMaze {
  export interface Movie {
    score: number
    show: Show
  }
  interface Show {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    ended: string
    officialSite: string
    schedule: Schedule
    rating: Rating
    weight: number
    network: Network
    webChannel?: any
    dvdCountry?: any
    externals: Externals
    image: Image
    summary: string
    updated: number
    _links: Links
  }
  interface Links {
    self: Self
    previousepisode: Self
  }
  interface Self {
    href: string
  }
  interface Image {
    medium: string
    original: string
  }
  interface Externals {
    tvrage: number
    thetvdb: number
    imdb: string
  }
  interface Network {
    id: number
    name: string
    country: Country
  }
  interface Country {
    name: string
    code: string
    timezone: string
  }
  interface Rating {
    average: number
  }
  interface Schedule {
    time: string
    days: string[]
  }
}
