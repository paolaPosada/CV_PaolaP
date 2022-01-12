import React from 'react'

export const AcademicInformation = ({ Titulo, Institucion }) => {

    return (
        <div>
            <p className='itemInf sm:text-gray-900'>{Institucion}</p>
            <p className='font-xl'>{Titulo}</p>
        </div>
    )
}
