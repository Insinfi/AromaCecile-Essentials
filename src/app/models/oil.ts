export class OilList {
  name!: string;
  type!: OilType;
  oilId!: number;

  constructor() {}
}

export class Oil extends OilList {
  price_fLask!: number;
  drop_per_ml!: number;
  flask_volume!: number;

  constructor() {
    super();
  }

  price_ml?(): number {
    return this.price_fLask / this.flask_volume;
  }

  price_drop?(): number | undefined {
    if (!this.price_ml) return undefined;
    return this.price_ml() / this.drop_per_ml;
  }
}

export enum OilType {
  Essentiel = 0,
  Végétale = 1,
}
