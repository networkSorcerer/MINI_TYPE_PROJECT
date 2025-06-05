import { Artist } from "./artist";
import { ExternalURLS, Images, Restriction } from "./commonType";

export interface getNewReleasesResponse {
  albums: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
    items: SimplifiledAlbum[];
  };
}

export interface SimplifiledAlbum {
  album_type: string;
  total_tracks: string;
  available_markets: string[];
  external_urls: ExternalURLS;
  href: string;
  id: string;
  images: Images[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: Restriction;
  type: string;
  url: string;
  artists: Artist[];
}
