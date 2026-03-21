type SliderCardProps = {
  icon: string;
  title: string;
  valueLabel: string;
  min: number;
  max: number;
  value: number;
  markers: [string, string, string];
};

export default function SliderCard({
  icon,
  title,
  valueLabel,
  min,
  max,
  value,
  markers,
}: SliderCardProps) {
  return (
    <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-headline text-xl font-medium flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">{icon}</span>
          {title}
        </h3>
        <span className="text-secondary-fixed font-bold text-2xl font-headline">
          {valueLabel}
        </span>
      </div>

      <input className="w-full" max={max} min={min} type="range" value={value} readOnly />

      <div className="flex justify-between mt-4 text-xs font-label text-on-surface-variant">
        <span>{markers[0]}</span>
        <span>{markers[1]}</span>
        <span>{markers[2]}</span>
      </div>
    </div>
  );
}