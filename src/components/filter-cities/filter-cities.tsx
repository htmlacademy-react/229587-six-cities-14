import {memo} from 'react';
import {citiesForFilter} from '../../const';
import {ButtonFilterComponent} from '../button-filter-component/button-filter-component';

function FilterCitiesMemo () {

  return (
    <div className="tabs" data-testid ='filterCities'>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesForFilter.map((city) => <ButtonFilterComponent city={city} key={city}/>)}
        </ul>
      </section>
    </div>
  );
}

const FilterCities = memo(FilterCitiesMemo);

export {FilterCities};
