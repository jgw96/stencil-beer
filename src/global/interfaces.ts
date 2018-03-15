export interface Beer {
  name: string,
  abv: string,
  ibu: string,
  description: string,
  id: string,
  labels: Labels
}

export interface Labels {
  medium: string,
  large: string
}

export interface Bar {
  name: string,
  vicinity: string,
  id: string
  rating: number;
}
