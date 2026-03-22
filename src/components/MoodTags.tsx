import { useState } from 'react';
import type { MoodComponentProps } from '../types/componentPropTypes';
import CustomGenresModal from './CustomGenresModal';

export default function MoodTags(props: MoodComponentProps) {
const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const toggleMood = (label: string) => {
    props.setMoods((moods) =>
      moods.map((mood) =>
        mood.label === label ? { ...mood, selected: !mood.selected } : mood
      )
    );
  };

  return (
    <>
    <section className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-secondary">psychology</span>
        <h3 className="font-headline text-xl font-medium">Select Mood</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {props.moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => toggleMood(mood.label)}
            className={
              mood.selected
                ? 'px-6 py-2 rounded-lg bg-secondary/15 text-secondary border border-secondary/30 font-medium transition-all'
                : 'px-6 py-2 rounded-lg bg-surface-variant text-on-surface-variant hover:bg-surface-bright transition-all'
            }
          >
            {mood.label}
          </button>
        ))}
        <button
            onClick={() => setIsCustomModalOpen(true)}
            className="px-6 py-2 rounded-lg border border-dashed border-secondary/30 text-secondary hover:bg-secondary/10 transition-all"
          >
            + Add custom mood
        </button>
      </div>
      {props.customMoods.length > 0 && (
          <div className="mt-6">
            <p className="text-sm text-on-surface-variant mb-3">Your custom genres</p>
            <div className="flex flex-wrap gap-3">
              {props.customMoods.map((mood) => (
                <div
                  key={mood}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-medium"
                >
                  <span>{mood}</span>
                  <button
                    onClick={() =>
                      props.setCustomMoods((prev) =>
                        prev.filter((customMood) => customMood !== mood)
                      )
                    }
                    className="flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                    aria-label={`Remove ${mood}`}
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
            customGenres={props.customMoods}
            setCustomGenres={props.setCustomMoods}
          />
    </>
  );
}