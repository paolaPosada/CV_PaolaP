import React from 'react'

export const InformationCourses = ({ Nombre, Plataforma }) => {

    return (
        <div>
            <p className='subitem'>{Nombre}</p>
            <p className='font-xl'>{Plataforma}</p>
        </div>
    )
}
