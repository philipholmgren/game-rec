import type { Genre } from "./commonTypes";

export type FiltersComponentProps = {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  playerAmount: number
  setPlayerAmount: React.Dispatch<React.SetStateAction<number>>;
  budgetAmount: number
  setBudgetAmount: React.Dispatch<React.SetStateAction<number>>;
};

export type GenreComponentProps = {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
};

export type GenerateRecommendationsProps = {
    genres: Genre[]
    playerAmount: number
    budgetAmount: number
}