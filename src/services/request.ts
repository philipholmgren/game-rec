import type { Genre, RecommendationRequest } from "../types/commonTypes";

export const buildRecommendationRequest = (
    genres: Genre[], 
    customGenres: string[], 
    moods: {label: string, selected: boolean}[], 
    customMoods: string[],
    excludedGames: string[],
    extraExcludedGames: string[] = [],
    playerAmount: number,
    budgetAmount: number,
    wildcardAmount: number,
    mode: 'pc' | 'browser'
): RecommendationRequest => {
  const selectedPredefinedGenres = genres
    .filter((genre) => genre.selected)
    .map((genre) => genre.label);

  const selectedGenres = [
    ...selectedPredefinedGenres,
    ...customGenres,
  ];

  const selectedPredefinedMoods = moods
    .filter((mood) => mood.selected)
    .map((mood) => mood.label);

  const selectedMoods = [
    ...selectedPredefinedMoods,
    ...customMoods,
  ];

  const combinedExcludedGames = [...excludedGames, ...extraExcludedGames];

  return {
    genres: selectedGenres,
    moods: selectedMoods,
    excludedGames: combinedExcludedGames,
    players: playerAmount,
    budget: budgetAmount,
    wildcardAmount: wildcardAmount,
    mode
  };
};