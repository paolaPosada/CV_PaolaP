import React from 'react'
import { ProgressBar } from '../progressBar'

export const InformationKnowledge = () => {
    return (
        <div>
            <p className='subtitleL xl:text-indigo-500'>Conocimientos</p>
            <br></br>
            <ProgressBar Nombre='JavaScript' porcentaje='75%'></ProgressBar>
            <ProgressBar Nombre='HTML' porcentaje='75%'></ProgressBar>
            <ProgressBar Nombre='CSS' porcentaje='50%'></ProgressBar>
            <ProgressBar Nombre='SQL' porcentaje='45%'></ProgressBar>
            <ProgressBar Nombre='Python' porcentaje='60%'></ProgressBar>
            <ProgressBar Nombre='React' porcentaje='65%'></ProgressBar>
        </div>
    )
}
