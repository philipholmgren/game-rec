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
              <div className="flex gap-4">
              {recommendation.headerImage && (
                <div className="flex gap-4">
                  <div className="flex-1">
                    <img
                    src={recommendation.headerImage}
                    alt={recommendation.name}
                    className="w-28 h-36 object-cover rounded-lg shrink-0"
                  />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-headline text-xl font-bold text-on-surface">
                  {recommendation.name}
                </h3>
                <p className="text-secondary-fixed font-semibold">
              {recommendation.currentPrice ?? recommendation.price}
            </p>
            {recommendation.discountPercent && recommendation.discountPercent > 0 && (
              <span className="inline-block mt-1 px-2 py-1 rounded-full bg-tertiary/15 text-tertiary text-xs font-semibold border border-tertiary/20">
                -{recommendation.discountPercent}%
              </span>
            )}
    <p className="text-sm text-on-surface-variant mt-2">
      {recommendation.reasoning}
    </p>
    <a
      href={recommendation.link}
      target="_blank"
      rel="noreferrer"
      className="inline-flex mt-4 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
    >
      View on Steam
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