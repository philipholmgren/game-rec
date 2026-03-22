import type { Genre, Mood, Recommendation } from "./commonTypes";

export type FiltersComponentProps = {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  customGenres: string[];
  setCustomGenres: React.Dispatch<React.SetStateAction<string[]>>;
  playerAmount: number
  setPlayerAmount: React.Dispatch<React.SetStateAction<number>>;
  budgetAmount: number
  setBudgetAmount: React.Dispatch<React.SetStateAction<number>>;
  wildcardAmount: number;
  setWildcardAmount: React.Dispatch<React.SetStateAction<number>>;
  moods: Mood[];
  setMoods: React.Dispatch<React.SetStateAction<Mood[]>>;
  customMoods: string[];
  setCustomMoods: React.Dispatch<React.SetStateAction<string[]>>;
  excludeGames: string[];
  setExcludeGames: React.Dispatch<React.SetStateAction<string[]>>;
};

export type GenreComponentProps = {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  customGenres: string[];
  setCustomGenres: React.Dispatch<React.SetStateAction<string[]>>;
};

export type MoodComponentProps = {
  moods: Mood[];
  setMoods: React.Dispatch<React.SetStateAction<Mood[]>>;
  customMoods: string[];
  setCustomMoods: React.Dispatch<React.SetStateAction<string[]>>;
};

export type ExcludeGamesProps = {
  excludedGames: string[];
  setExcludedGames: React.Dispatch<React.SetStateAction<string[]>>;
};

export type GenerateRecommendationsProps = {
    genres: Genre[]
    playerAmount: number
    budgetAmount: number
}

export type CustomGenresModalProps = {
  isOpen: boolean;
  onClose: () => void;
  customGenres: string[];
  setCustomGenres: React.Dispatch<React.SetStateAction<string[]>>;
};

export type CustomMoodsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  customMoods: string[];
  setCustomMoods: React.Dispatch<React.SetStateAction<string[]>>;
};

export type RecommendationsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  recommendations: Recommendation[];
  onGenerateMore: () => void;
  isLoading: boolean;
};