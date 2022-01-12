import React from 'react'
import PropTypes from 'prop-types'

export const AcademicInformation = ({ Titulo, Institucion }) => {

    return (
        <div>
            <p className='itemInf sm:text-gray-900'>{Institucion}</p>
            <p className='font-xl'>{Titulo}</p>
        </div>
    )
}

AcademicInformation.propTypes = {
    Titulo: PropTypes.string.isRequired,
    Institucion: PropTypes.string.isRequired,
};