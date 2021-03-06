import React from 'react';
import PropTypes from 'prop-types';

export const LanguagesInformation = ({ Contenido }) => (
  <div className='flex-col content-center justify-center'>
    <br />
    <p className='font-sans text-3xl  not-italic font-semibold text-center p-0 text-gray-900'>
      Idiomas
    </p>
    <br />
    <ul className='font-xl list-disc list-inside pl-1 flex-col'>
      {Contenido.map((info) => (
        <li key={info.ID}>{info.Definicion}</li>
      ))}
    </ul>
    <br />
  </div>
);

LanguagesInformation.propTypes = {
  Contenido: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};
