export type Genre = {
  label: string
  selected: boolean
};

export type Mood = {
  label: string
  selected: boolean
};

export type Recommendation = {
  name: string;
  price: string;
  reasoning: string;
  link: string;
  players: string;
};

export type RecommendationRequest = {
  genres: string[];
  players: number;
  budget: number;
  wildcardAmount: number
  moods: string[]
  excludedGames: string[]
};
