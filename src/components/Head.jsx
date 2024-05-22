import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

function Head({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`Discussify | ${title}`}</title>
      </Helmet>
    </HelmetProvider>
  );
}

Head.propType = {
  title: PropTypes.string,
};

export default Head;
