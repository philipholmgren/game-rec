type GenerateRecommendationsProps = {
  onGenerate: () => void;
  isLoading: boolean;
};

export default function GenerateRecommendations({
  onGenerate,
  isLoading,
}: GenerateRecommendationsProps) {
  return (
    <div className="space-y-4 w-full max-w-xl flex flex-col items-center">
      <button 
        onClick={onGenerate}
        disabled={isLoading}
        className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-xl font-bold uppercase tracking-wider shadow-[0_0_40px_rgba(208,149,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60"
      >
        {isLoading ? 'Generating...' : 'Generate Games'}
      </button>
    </div>
  );
}