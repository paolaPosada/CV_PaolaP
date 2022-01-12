import React from 'react'

export const InformationCourses = ({ Nombre, Plataforma }) => {

    return (
        <div>
            <p className='subitem sm:text-gray-900'>{Nombre}</p>
            <p className='font-xl'>{Plataforma}</p>
        </div>
    )
}
