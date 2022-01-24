import React from 'react';
import PropTypes from 'prop-types';

export const WorkingInformation = ({ Cargo, Institucion, Funcion }) => (
  <div>
    <br />
    <p className='itemInf sm:text-gray-900'>{Cargo}</p>
    <p className='subitem sm:text-gray-900'>{Institucion}</p>
    <ul className='list-disc list-inside pl-1 flex-col'>
      {Funcion.map((info) => (
        <li key={info.ID} className='font-xl'>
          {info.Definicion}
        </li>
      ))}
    </ul>
  </div>
);

WorkingInformation.propTypes = {
  Cargo: PropTypes.string.isRequired,
  Institucion: PropTypes.string.isRequired,
  Funcion: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};
