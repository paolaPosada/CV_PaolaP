import React from 'react'

export const AcademicInformation = ({ Titulo, Institucion }) => {

    return (
        <div>
            <br></br>
            <p className='itemInf'>{Institucion}</p>
            <p className='font-xl'>{Titulo}</p>
            
        </div>
    )
}
