import React from 'react'

export const LanguagesInformation = ({ Contenido }) => {

    return (
        <div className='flex-col content-center justify-center'>
            <br></br>
            <p className="font-sans text-3xl  not-italic font-semibold text-center p-0 text-gray-900">Idiomas</p>
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
