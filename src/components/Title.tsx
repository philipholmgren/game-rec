export default function Title() {
  return (
    <header className="mb-16 text-center flex flex-col items-center">
      <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-on-surface">
        Next Game <span className="text-secondary-fixed"></span>
      </h1>
      <p className="text-on-surface-variant text-lg max-w-2xl font-light text-center">
        Find your next favorite game
      </p>
    </header>
  );
}