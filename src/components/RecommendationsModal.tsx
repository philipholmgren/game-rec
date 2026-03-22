import type { RecommendationsModalProps } from '../types/componentPropTypes';

export default function RecommendationsModal({
  isOpen,
  onClose,
  recommendations,
  onGenerateMore,
  isLoading,
  mode
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

          <div className="flex items-center gap-3">
            <button
              onClick={onGenerateMore}
              disabled={isLoading}
              className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Generating...' : 'Generate 5 more'}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant">
                close
              </span>
            </button>
          </div>
        </div>
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {recommendations.map((recommendation) => (
              <div
                key={recommendation.appid ?? recommendation.link}
                className="rounded-xl bg-surface-container border border-outline-variant/10 p-4"
              >
                <div className="flex flex-col gap-4">
                  {recommendation.headerImage && (
                    <div className="w-40 h-20 shrink-0 rounded-lg bg-surface-container-low flex items-center justify-center overflow-hidden">
                      <img
                        src={recommendation.headerImage}
                        alt={recommendation.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">
                      {recommendation.name}
                    </h3>

                    <p className="text-secondary-fixed font-semibold mt-1">
                      {recommendation.currentPrice ?? recommendation.price}
                    </p>

                    {recommendation.discountPercent &&
                      recommendation.discountPercent > 0 && (
                        <span className="inline-block mt-2 px-2 py-1 rounded-full bg-tertiary/15 text-tertiary text-xs font-semibold border border-tertiary/20">
                          -{recommendation.discountPercent}%
                        </span>
                      )}

                    <p className="text-sm text-on-surface-variant mt-3">
                      {recommendation.reasoning}
                    </p>

                    <a
                      href={recommendation.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex mt-4 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {mode === 'pc' ? 'View on Steam' : 'Go to site'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}