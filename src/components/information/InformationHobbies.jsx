import React from 'react'

export const InformationHobbies = ({ Nombre }) => {

    return (
        <div>
            <ul className='font-xl list-disc list-inside pl-1 flex-col'>
                <li>{Nombre}</li>
            </ul>

        </div>
    )
}
