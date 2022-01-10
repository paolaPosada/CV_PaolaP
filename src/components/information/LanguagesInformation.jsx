import React from 'react'

export const LanguagesInformation = ({ Contenido }) => {

    return (
        <div>
            <ul className="font-xl list-disc list-inside pl-1">
                <li>{Contenido[0]}</li>
                <li>{Contenido[1]}</li>
            </ul>
        </div>
    )
}
