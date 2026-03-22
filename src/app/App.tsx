import Title from '../components/Title';
import FiltersPanel from '../components/FiltersPanel';
import GenerateRecommendations from '../components/GenerateRecommendations';
import RecommendationsModal from '../components/RecommendationsModal';
import { useState } from 'react';
import { allGenres } from '../data/genres';
import type { Recommendation } from '../types/commonTypes';
import { getRecommendations } from '../http/getRecommendations';
import { allMoods } from '../data/moods';
import { getRandomInt, getRandomSelectedItems } from '../services/randomizer';
import { buildRecommendationRequest } from '../services/request';

export default function App() {
  const [genres, setGenres] = useState(allGenres);
  const [customGenres, setCustomGenres] = useState<string[]>([]);
  const [playerAmount, setPlayerAmount] = useState(2);
  const [budgetAmount, setBudgetAmount] = useState(20);
  const [wildcardAmount, setWildcardAmount] = useState(25);
  const [moods, setMoods] = useState(allMoods);
  const [customMoods, setCustomMoods] = useState<string[]>([]);
  const [excludedGames, setExcludedGames] = useState<string[]>([]);
  const [recommendationMode, setRecommendationMode] = useState<'pc' | 'browser'>('pc');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateBrowserGames = async () => {
    const request = buildRecommendationRequest(
      genres,
      customGenres,
      moods,
      customMoods,
      excludedGames,
      undefined,
      playerAmount,
      budgetAmount,
      wildcardAmount,
      'browser'
    );

    try {
      setIsLoading(true);
      setRecommendationMode('browser');
      const response = await getRecommendations(request);
      setRecommendations(response);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to generate browser game recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateRecommendations = async () => {
    const request = buildRecommendationRequest(
      genres,
      customGenres,
      moods,
      customMoods,
      excludedGames,
      undefined,
      playerAmount,
      budgetAmount,
      wildcardAmount,
      'pc'
    );

    try {
      setIsLoading(true);
      setRecommendationMode('pc');
      const response = await getRecommendations(request);
      setRecommendations(response);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to generate recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRandomizeFilters = () => {
    setGenres(getRandomSelectedItems(allGenres, 1, 4));
    setCustomGenres([]);

    setMoods(getRandomSelectedItems(allMoods, 1, 3));
    setCustomMoods([]);

    setExcludedGames([]);

    setPlayerAmount(getRandomInt(1, 6));
    setBudgetAmount(getRandomInt(0, 100));
    setWildcardAmount(getRandomInt(0, 100));
  };

  const handleGenerateMoreRecommendations = async () => {
    try {
      setIsLoading(true);
      setRecommendationMode('pc');

      const alreadyRecommendedGames = recommendations.map(
        (recommendation) => recommendation.name
      );

      const request = buildRecommendationRequest(
        genres,
      customGenres,
      moods,
      customMoods,
      excludedGames,
      alreadyRecommendedGames,
      playerAmount,
      budgetAmount,
      wildcardAmount,
      recommendationMode
      );

      const response = await getRecommendations(request);
      setRecommendations(response);
    } catch (error) {
      console.error('Failed to generate more recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-32 pb-24 min-h-screen kinetic-bloom px-6 max-w-5xl mx-auto">
        <Title />
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-8 items-start justify-items-center">
            <div className="w-full max-w-4xl">
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleRandomizeFilters}
                  className="px-6 py-3 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition-all font-medium"
                >
                  Randomize Filters
                </button>
              </div>
            <FiltersPanel
              genres={genres}
              setGenres={setGenres}
              customGenres={customGenres}
              setCustomGenres={setCustomGenres}
              playerAmount={playerAmount}
              setPlayerAmount={setPlayerAmount}
              budgetAmount={budgetAmount}
              setBudgetAmount={setBudgetAmount}
              wildcardAmount={wildcardAmount}
              setWildcardAmount={setWildcardAmount}
              moods={moods}
              setMoods={setMoods}
              customMoods={customMoods}
              setCustomMoods={setCustomMoods}
              excludeGames={excludedGames}
              setExcludeGames={setExcludedGames}
            />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-3xl">
              <GenerateRecommendations
                onGenerate={handleGenerateRecommendations}
                isLoading={isLoading}
                label="Generate PC Recommendations"
              />

              <GenerateRecommendations
                onGenerate={handleGenerateBrowserGames}
                isLoading={isLoading}
                label="Generate Browser Games"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </main>

      <RecommendationsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recommendations={recommendations}
        onGenerateMore={handleGenerateMoreRecommendations}
        isLoading={isLoading}
        mode={recommendationMode}
      />
    </div>
  );
}