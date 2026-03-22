import SliderCard from './SliderCard';
import GenreTags from './GenreTags';
import type { FiltersComponentProps } from '../types/componentPropTypes';

export default function FiltersPanel(props: FiltersComponentProps) {
  return (
    <div className="lg:col-span-8 space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <SliderCard
          icon="groups"
          title="Players"
          valueLabel={props.playerAmount >= 6 ? '6+' : String(props.playerAmount)}
          min={1}
          max={6}
          value={props.playerAmount}
          onChange={props.setPlayerAmount}
          markers={['Solo', 'Small Group', 'Massive']}
        />

        <SliderCard
          icon="payments"
          title="Budget"
          valueLabel={
            props.budgetAmount === 0
              ? 'Free'
              : props.budgetAmount === 100
              ? 'No Budget'
              : `$${props.budgetAmount}`
          }
          min={0}
          max={100}
          value={props.budgetAmount}
          markers={['Free', 'Indie', 'No Budget']}
          onChange={props.setBudgetAmount}
        />
        <SliderCard
          icon="auto_awesome"
          title="Wildcard"
          valueLabel={`${props.wildcardAmount}%`}
          min={0}
          max={100}
          value={props.wildcardAmount}
          markers={['Focused', 'Balanced', 'Wild']}
          onChange={props.setWildcardAmount}
        />
      </section>

      <GenreTags 
        genres={props.genres} 
        setGenres={props.setGenres}
        customGenres={props.customGenres}
        setCustomGenres={props.setCustomGenres}
      />
    </div>
  );
}