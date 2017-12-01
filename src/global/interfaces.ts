export interface Beer {
  name: string,
  abv: string,
  ibu: string,
  description: string,
  id: string,
  labels: Labels
}

export interface Labels {
  medium: string
}

export interface Bar {
  name: string,
  vicinity: string,
  id: string
  brewery: {
    name: string
  }
}