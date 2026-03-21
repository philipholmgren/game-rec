export type GameCardItem = {
  id: number;
  title: string;
  subtitle: string;
  match: string;
  image: string;
  featured?: boolean;
};

export type Genre = {
  id: string;
  label: string;
  selected?: boolean;
};

export type Platform = {
  id: string;
  label: string;
  selected?: boolean;
};

export type MaturityRating = {
  id: string;
  label: string;
  description: string;
  selected?: boolean;
};