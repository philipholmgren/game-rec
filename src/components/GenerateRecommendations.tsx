type GenerateRecommendationsProps = {
  onGenerate: () => void;
  isLoading: boolean;
  label?: string;
  variant?: 'primary' | 'secondary';
};

export default function GenerateRecommendations({
  onGenerate,
  isLoading,
  label = 'Generate Recommendations',
  variant = 'primary',
}: GenerateRecommendationsProps) {
  const className =
    variant === 'primary'
      ? 'w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-xl font-bold uppercase tracking-wider shadow-[0_0_40px_rgba(208,149,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60'
      : 'w-full py-6 rounded-xl border border-secondary/30 bg-secondary/10 text-secondary font-headline text-xl font-bold uppercase tracking-wider hover:bg-secondary/15 active:scale-95 transition-all disabled:opacity-60';

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={onGenerate}
        disabled={isLoading}
        className={className}
      >
        {isLoading ? 'Generating...' : label}
      </button>
    </div>
  );
}