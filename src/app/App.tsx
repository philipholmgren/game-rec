import Title from '../components/Title';
import FiltersPanel from '../components/FiltersPanel';
import GenerateRecommendations from '../components/GenerateRecommendations';
import RecommendationsModal from '../components/RecommendationsModal';
import { useState } from 'react';
import { allGenres } from '../data/genres';
import type { Recommendation, RecommendationRequest } from '../types/commonTypes';
import { getRecommendations } from '../http/getRecommendations';

export default function App() {
  const [genres, setGenres] = useState(allGenres);
  const [playerAmount, setPlayerAmount] = useState(2);
  const [budgetAmount, setBudgetAmount] = useState(20);

  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateRecommendations = async () => {
    const selectedGenres = genres
      .filter((genre) => genre.selected)
      .map((genre) => genre.label);

    try {
      setIsLoading(true);
      const request: RecommendationRequest = {genres: selectedGenres, players: playerAmount, budget: budgetAmount};
      const response = await getRecommendations(request);
      setRecommendations(response);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to generate recommendations:', error);
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
            <FiltersPanel
              genres={genres}
              setGenres={setGenres}
              playerAmount={playerAmount}
              setPlayerAmount={setPlayerAmount}
              budgetAmount={budgetAmount}
              setBudgetAmount={setBudgetAmount}
            />
            </div>
          </div>

          <div className="flex justify-center">
  <GenerateRecommendations
    onGenerate={handleGenerateRecommendations}
    isLoading={isLoading}
  />
</div>
        </div>
      </main>

      <RecommendationsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recommendations={recommendations}
      />
    </div>
  );
}