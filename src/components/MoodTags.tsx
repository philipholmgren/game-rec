import { useState } from 'react';
import type { MoodComponentProps } from '../types/componentPropTypes';
import CustomFilterModal from './CustomFilterModal';

export default function MoodTags(props: MoodComponentProps) {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const selectAnyMood = () => {
    props.setMoods((moods) =>
      moods.map((mood) => ({
        ...mood,
        selected: mood.label === 'Any',
      }))
    );
  };

  const deselectAnyMood = () => {
    props.setMoods((moods) =>
      moods.map((mood) => ({
        ...mood,
        selected: mood.label === 'Any' ? false : mood.selected,
      }))
    );
  };

  const toggleMood = (label: string) => {
    props.setMoods((moods) => {
      if (label === 'Any') {
        props.setCustomMoods([]);

        return moods.map((mood) => ({
          ...mood,
          selected: mood.label === 'Any',
        }));
      }

      const updatedMoods = moods.map((mood) => {
        if (mood.label === 'Any') {
          return { ...mood, selected: false };
        }

        if (mood.label === label) {
          return { ...mood, selected: !mood.selected };
        }

        return mood;
      });

      const hasSelectedSpecificMood = updatedMoods.some(
        (mood) => mood.label !== 'Any' && mood.selected
      );

      if (!hasSelectedSpecificMood && props.customMoods.length === 0) {
        return updatedMoods.map((mood) => ({
          ...mood,
          selected: mood.label === 'Any',
        }));
      }

      return updatedMoods;
    });
  };

  const handleRemoveCustomMood = (moodToRemove: string) => {
    const remainingMoods = props.customMoods.filter(
      (customMood) => customMood !== moodToRemove
    );

    props.setCustomMoods(remainingMoods);

    const hasSelectedPredefinedMood = props.moods.some(
      (mood) => mood.label !== 'Any' && mood.selected
    );

    if (!hasSelectedPredefinedMood && remainingMoods.length === 0) {
      selectAnyMood();
    }
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
            <p className="text-sm text-on-surface-variant mb-3">Your custom moods</p>
            <div className="flex flex-wrap gap-3">
              {props.customMoods.map((mood) => (
                <div
                  key={mood}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-medium"
                >
                  <span>{mood}</span>
                  <button
                    onClick={() => handleRemoveCustomMood(mood)}
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

      <CustomFilterModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        customGenres={props.customMoods}
        setCustomGenres={props.setCustomMoods}
        onCustomAdd={deselectAnyMood}
        onCustomRemove={(remainingMoods) => {
          const hasSelectedPredefinedMood = props.moods.some(
            (mood) => mood.label !== 'Any' && mood.selected
          );

          if (!hasSelectedPredefinedMood && remainingMoods.length === 0) {
            selectAnyMood();
          }
        }}
      />
    </>
  );
}