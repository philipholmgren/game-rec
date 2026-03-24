import { useState } from 'react';
import { validateCustomInput } from "../services/inputValidator";
import type { CustomFilterModalProps } from '../types/componentPropTypes';

export default function CustomGenresModal({
  isOpen,
  onClose,
  customGenres,
  setCustomGenres,
  onCustomAdd,
  onCustomRemove,
}: CustomFilterModalProps) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAddGenre = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      setError("Input cannot be empty");
      return;
    }

    if (customGenres.includes(trimmed)) {
      setError("Already added");
      setInputValue('');
      return;
    }

    const validateResult = validateCustomInput(trimmed);

    if (!validateResult.valid) {
      setError(validateResult.error || "Invalid input");
      return;
    }

    setCustomGenres((prev) => [...prev, trimmed]);
    onCustomAdd?.();

    setInputValue('');
    setError(null);
  };

  const handleRemoveGenre = (genreToRemove: string) => {
    const remainingItems = customGenres.filter((genre) => genre !== genreToRemove);
    setCustomGenres(remainingItems);
    onCustomRemove?.(remainingItems);
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
              onChange={(e) => {
                setInputValue(e.target.value);
                setError(null);
              }}
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

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

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