import type { Recommendation } from '../types/commonTypes';

type RecommendationsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  recommendations: Recommendation[];
};

export default function RecommendationsModal({
  isOpen,
  onClose,
  recommendations,
}: RecommendationsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl rounded-2xl bg-surface-container-high border border-outline-variant/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Your Recommendations
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

        <div className="p-6 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {recommendations.map((recommendation) => (
              <div
                key={recommendation.link}
                className="rounded-xl bg-surface-container border border-outline-variant/10 p-5 flex flex-col justify-between min-h-[220px]"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">
                      {recommendation.name}
                    </h3>

                    <span className="shrink-0 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/20">
                      {recommendation.price}
                    </span>
                  </div>

                  <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-4">
                    {recommendation.reasoning}
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href={recommendation.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/15 transition-colors text-sm font-medium"
                  >
                    View Game
                    <span className="material-symbols-outlined text-base">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}