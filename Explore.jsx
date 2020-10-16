import React from 'react';
import { Link } from 'react-router-dom';

import ExploreHeader from '../components/ExploreHeader';
import Footer from '../components/Footer';

const Explore = () => (
  <div>
    <ExploreHeader title={'Explorar'} />
    <Link to="/explorar/comidas">
      <button type="button" data-testid="explore-food">
        Explorar Comidas
      </button>
    </Link>
    <Link to="/explorar/bebidas">
      <button type="button" data-testid="explore-drinks">
        Explorar Bebidas
      </button>
    </Link>
    <Footer />
  </div>
);

export default Explore;
