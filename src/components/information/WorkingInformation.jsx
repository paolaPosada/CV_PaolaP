import React from 'react';
import PropTypes from 'prop-types';

export const WorkingInformation = ({ Cargo, Institucion, Funcion }) => (
  <div>
    <br />
    <p className='itemInf sm:text-gray-900'>{Cargo}</p>
    <p className='subitem sm:text-gray-900'>{Institucion}</p>
    <ul className='list-disc list-inside pl-1 flex-col'>
      {Funcion.map((info, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className='font-xl'>
          {info}
        </li>
      ))}
    </ul>
  </div>
);

WorkingInformation.propTypes = {
  Cargo: PropTypes.string.isRequired,
  Institucion: PropTypes.string.isRequired,
  Funcion: PropTypes.arrayOf(PropTypes.string).isRequired,
};
