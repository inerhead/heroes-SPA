import { useMemo } from 'react';
import { getHeroesByPublisher } from '../';

import PropTypes from 'prop-types';
import { HeroCard } from './'

export const HeroList = ({publisher}) => {
    const heroresByPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroresByPublisher.map(hero => (
        <HeroCard key={hero.id} { ...hero } />
      ))}
    </div>
  )
}
HeroList.propTypes = {
    publisher: PropTypes.string.isRequired,
};

