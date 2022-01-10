import React from 'react'

export const ProgressBar = ({ Nombre, porcentaje }) => {
    return (
        <div className="grid grid-cols-2 my-3">
            <div className="font-xl">{Nombre}</div>
            <div>
                <div className="progressBk rounded-md">
                    <div className="progressB text-gray-900 font-sans text-base font-bold text-center p-1 
                leading-none rounded-md" style={{ width: `${porcentaje}` }}>
                        {porcentaje}
                    </div>
                </div>
            </div>
        </div>

    )
}
