import { genres } from '../../data/mockdata';

export default function GenreTags() {
  return (
    <section className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-tertiary">category</span>
        <h3 className="font-headline text-xl font-medium">Select Genres</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={
              genre.selected
                ? 'px-6 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 font-medium transition-all'
                : 'px-6 py-2 rounded-lg bg-surface-variant text-on-surface-variant hover:bg-surface-bright transition-all'
            }
          >
            {genre.label}
          </button>
        ))}
      </div>
    </section>
  );
}