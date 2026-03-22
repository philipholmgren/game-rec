import { useState } from 'react';
import type { ExcludeGamesProps } from '../types/componentPropTypes';

export default function ExcludeGamesInput({
  excludedGames,
  setExcludedGames,
}: ExcludeGamesProps) {
  const [inputValue, setInputValue] = useState('');

  const handleAddGame = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) return;

    const exists = excludedGames.some(
      (game) => game.toLowerCase() === trimmed.toLowerCase()
    );

    if (exists) {
      setInputValue('');
      return;
    }

    setExcludedGames((prev) => [...prev, trimmed]);
    setInputValue('');
  };

  const handleRemoveGame = (gameToRemove: string) => {
    setExcludedGames((prev) =>
      prev.filter((game) => game !== gameToRemove)
    );
  };

  return (
    <section className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-tertiary">block</span>
        <h3 className="font-headline text-xl font-medium">Exclude Games</h3>
      </div>

      <div className="flex gap-3 mb-5">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddGame();
          }}
          placeholder="Add a game you don't want recommended..."
          className="flex-1 rounded-lg bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          onClick={handleAddGame}
          className="px-5 py-3 rounded-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors font-medium"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {excludedGames.length === 0 ? (
          <p className="text-sm text-on-surface-variant">
            No excluded games yet.
          </p>
        ) : (
          excludedGames.map((game) => (
            <div
              key={game}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 text-sm font-medium"
            >
              <span>{game}</span>
              <button
                onClick={() => handleRemoveGame(game)}
                className="flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label={`Remove ${game}`}
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}