export type Genre = {
  label: string
  selected: boolean
};

export type Mood = {
  label: string
  selected: boolean
};

export type Recommendation = {
  appid: number;
  name: string;
  price: string;
  reasoning: string;
  link: string;
  players: string;
  headerImage?: string;
  currentPrice?: string;
  discountPercent?: number;
  isFree?: boolean;
};

export type RecommendationRequest = {
  genres: string[];
  players: number;
  budget: number;
  wildcardAmount: number
  moods: string[]
  excludedGames: string[]
};
