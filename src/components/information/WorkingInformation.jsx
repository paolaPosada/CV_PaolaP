import React from 'react'

export const WorkingInformation = ({ Cargo, Institucion, Funcion }) => {

    return (
        <div>
            <br></br>
            <p className='itemInf'>{Cargo}</p>
            <p className='subitem'>{Institucion}</p>
            <ul className='list-disc list-inside pl-1 flex-col'>
                {
                    Funcion.map((info, index) => 
                    (<li key={index} className='font-xl'>{info}</li>)
                    )
                }
            </ul>


        </div>
    )
}
