import React from 'react';
import PropTypes from 'prop-types';

export const InformationCourses = ({ Nombre, Plataforma }) => (
  <div>
    <p className='subitem sm:text-gray-900'>{Nombre}</p>
    <p className='font-xl'>{Plataforma}</p>
  </div>
);

InformationCourses.propTypes = {
  Nombre: PropTypes.string.isRequired,
  Plataforma: PropTypes.string.isRequired,
};
