import { ChurchSeasons } from "../types";

type ISongProps = {
  id?: string;
  name: string;
  seasons: ChurchSeasons[];
  composer: string;
};

interface ISong {
  id: string | undefined;
  name: string;
  seasons: ChurchSeasons[];
  composer: string;
}

class Song implements ISong {
  private _id: string | undefined;

  private _name: string;

  private _seasons: ChurchSeasons[];

  private _composer: string;

  constructor(props: ISongProps) {
    this._id = props.id;
    this._name = props.name;
    this._seasons = props.seasons;
    this._composer = props.composer;
  }

  get id(): string | undefined {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get seasons(): ChurchSeasons[] {
    return this._seasons;
  }

  get composer(): string {
    return this._composer;
  }
}

export { Song, type ISong };
