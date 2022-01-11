import React from 'react'

export const LanguagesInformation = ({ Contenido }) => {

    return (
        <div className='flex-col content-center justify-center'>
            <br></br>
            <p className="font-3xl-SemiB">Idiomas</p>
            <br></br>
            <ul className="font-xl list-disc list-inside pl-1 flex-col ">
                {
                    Contenido.map((info,index) => <li key={index}>{info}</li>
                    )
                }
            </ul>
            <br></br>
        </div>
    )
}
