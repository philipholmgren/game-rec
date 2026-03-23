import { useState } from 'react';
import type { GenreComponentProps } from '../types/componentPropTypes';
import CustomGenresModal from './CustomGenresModal';

export default function GenreTags(props: GenreComponentProps) {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const toggleGenre = (label: string) => {
    props.setGenres((genres) => {
      if (label === 'Any') {
        return genres.map((genre) => ({
          ...genre,
          selected: genre.label === 'Any',
        }));
      }

      const updatedGenres = genres.map((genre) => {
        if (genre.label === 'Any') {
          return { ...genre, selected: false };
        }

        if (genre.label === label) {
          return { ...genre, selected: !genre.selected };
        }

        return genre;
      });

      const hasSelectedSpecificGenre = updatedGenres.some(
        (genre) => genre.label !== 'Any' && genre.selected
      );

      if (!hasSelectedSpecificGenre) {
        return updatedGenres.map((genre) => ({
          ...genre,
          selected: genre.label === 'Any',
        }));
      }

      return updatedGenres;
    });
  };

  return (
    <>
      <section className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-tertiary">category</span>
          <h3 className="font-headline text-xl font-medium">Select Genres</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {props.genres.map((genre) => (
            <button
              key={genre.label}
              onClick={() => toggleGenre(genre.label)}
              className={
                genre.selected
                  ? 'px-6 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 font-medium transition-all'
                  : 'px-6 py-2 rounded-lg bg-surface-variant text-on-surface-variant hover:bg-surface-bright transition-all'
              }
            >
              {genre.label}
            </button>
          ))}

          <button
            onClick={() => setIsCustomModalOpen(true)}
            className="px-6 py-2 rounded-lg border border-dashed border-secondary/30 text-secondary hover:bg-secondary/10 transition-all"
          >
            + Add custom genre
          </button>
        </div>

        {props.customGenres.length > 0 && (
          <div className="mt-6">
            <p className="text-sm text-on-surface-variant mb-3">Your custom genres</p>
            <div className="flex flex-wrap gap-3">
              {props.customGenres.map((genre) => (
                <div
                  key={genre}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-medium"
                >
                  <span>{genre}</span>
                  <button
                    onClick={() =>
                      props.setCustomGenres((prev) =>
                        prev.filter((customGenre) => customGenre !== genre)
                      )
                    }
                    className="flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                    aria-label={`Remove ${genre}`}
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <CustomGenresModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        customGenres={props.customGenres}
        setCustomGenres={props.setCustomGenres}
      />
    </>
  );
}