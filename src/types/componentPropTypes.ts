import type { Genre } from "./commonTypes";

export type FiltersComponentProps = {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  customGenres: string[];
  setCustomGenres: React.Dispatch<React.SetStateAction<string[]>>;
  playerAmount: number
  setPlayerAmount: React.Dispatch<React.SetStateAction<number>>;
  budgetAmount: number
  setBudgetAmount: React.Dispatch<React.SetStateAction<number>>;
};

export type GenreComponentProps = {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  customGenres: string[];
  setCustomGenres: React.Dispatch<React.SetStateAction<string[]>>;
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