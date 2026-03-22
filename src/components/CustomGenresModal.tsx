import { useState } from 'react';
import type { CustomGenresModalProps } from '../types/componentPropTypes';

export default function CustomGenresModal({
  isOpen,
  onClose,
  customGenres,
  setCustomGenres,
}: CustomGenresModalProps) {
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  const handleAddGenre = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) return;
    if (customGenres.includes(trimmed)) {
      setInputValue('');
      return;
    }

    setCustomGenres((prev) => [...prev, trimmed]);
    setInputValue('');
  };

  const handleRemoveGenre = (genreToRemove: string) => {
    setCustomGenres((prev) => prev.filter((genre) => genre !== genreToRemove));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-surface-container-high border border-outline-variant/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Add your own genres
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant">
              close
            </span>
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddGenre();
              }}
              placeholder="Type a genre..."
              className="flex-1 rounded-lg bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={handleAddGenre}
              className="px-5 py-3 rounded-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors font-medium"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {customGenres.length === 0 ? (
              <p className="text-sm text-on-surface-variant">
                No custom genres added yet.
              </p>
            ) : (
              customGenres.map((genre) => (
                <div
                  key={genre}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                >
                  <span>{genre}</span>
                  <button
                    onClick={() => handleRemoveGenre(genre)}
                    className="flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-sm">
                      close
                    </span>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}