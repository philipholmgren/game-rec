import SliderCard from './SliderCard';
import GenreTags from './GenreTags';

export default function FiltersPanel() {
  return (
    <div className="lg:col-span-8 space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SliderCard
          icon="groups"
          title="Players"
          valueLabel="1 - 4"
          min={1}
          max={10}
          value={4}
          markers={['Solo', 'Small Group', 'Massive']}
        />

        <SliderCard
          icon="payments"
          title="Budget"
          valueLabel="$60"
          min={0}
          max={100}
          value={60}
          markers={['Free', 'Indie', 'AAA+']}
        />
      </section>

      <GenreTags />
    </div>
  );
}