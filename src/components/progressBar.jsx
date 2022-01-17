import React from 'react';
import PropTypes from 'prop-types';

export const ProgressBar = ({ Nombre, porcentaje }) => (
  <div className='grid grid-cols-2 my-3'>
    <div className='font-xl'>{Nombre}</div>
    <div>
      <div className='progressBk rounded-md'>
        <div
          className='progressB text-gray-900 font-sans text-base font-bold text-center p-1 
                leading-none rounded-md'
          style={{ width: `${porcentaje}` }}
        >
          {porcentaje}
        </div>
      </div>
    </div>
  </div>
);

ProgressBar.propTypes = {
  Nombre: PropTypes.string.isRequired,
  porcentaje: PropTypes.string.isRequired,
};
