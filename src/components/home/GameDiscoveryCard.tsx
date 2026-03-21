import type { GameCardItem } from '../../types';

type GameDiscoveryCardProps = {
  game: GameCardItem;
};

export default function GameDiscoveryCard({ game }: GameDiscoveryCardProps) {
  return (
    <div className="group relative bg-surface-container-high rounded-xl overflow-hidden aspect-[4/5]">
      <img
        alt={game.title}
        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
        src={game.image}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />

      <div className="absolute bottom-6 left-6 right-6">
        <span
          className={
            game.featured
              ? 'px-3 py-1 bg-tertiary rounded-full text-[10px] font-bold text-on-tertiary-fixed mb-3 inline-block shadow-[0_0_15px_rgba(255,107,155,0.4)]'
              : 'px-3 py-1 bg-surface-variant rounded-full text-[10px] font-bold text-on-surface-variant mb-3 inline-block'
          }
        >
          {game.match}
        </span>

        <h4 className="font-headline text-2xl font-bold text-on-surface leading-tight">
          {game.title}
        </h4>

        <p className="text-on-surface-variant text-sm mt-1">{game.subtitle}</p>
      </div>
    </div>
  );
}