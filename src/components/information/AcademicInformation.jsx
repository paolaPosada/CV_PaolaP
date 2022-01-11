import React from 'react'

export const AcademicInformation = ({ Titulo, Institucion }) => {

    return (
        <div>
            <p className='itemInf'>{Institucion}</p>
            <p className='font-xl'>{Titulo}</p>
        </div>
    )
}
