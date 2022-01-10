import React from 'react'
import { LanguagesInformation } from './information/LanguagesInformation'
import { ListInformation } from './information/ListInformation'

export const AboutMe = () => {
    return (
        <div className='justify-items-center'>
            <div className='flex items-center content-center justify-center'>
                <img src="https://i.ibb.co/2jbtXwB/descarga.png" className="h-72 w-auto mt-3" />
            </div>
            <br></br>
            <p className='font-2xl'>paola.posada1@udea.edu.co</p>
            <br></br>
            <div className="flex flex-row items-center justify-center">
                <a className="mx-4 my-2 flex items-center rounded ">
                    <span className="iconify w-12 h-12" data-icon="fa-brands:linkedin"></span>
                </a>
                <br></br>
                <a className="mx-4 my-2 flex items-center rounded">
                    <span className="iconify w-12 h-12" data-icon="fa-brands:github"></span>
                </a>
            </div>
            <div>
            <br></br>
                <p className="font-3xl-SemiB">Información sobre mí</p>
                <br></br>
                <p className="font-xl">Soy una persona íntegra, responsable y respetuosa, me gusta estar en constante aprendizaje y cuento la capacidad de aprender rápidamente.
                    Busco crecer en el campo personal y profesional, aumentando y aplicando los conocimientos que he adquirido,
                    teniendo siempre presente los valores morales y éticos.</p>
            </div>
            <div>
            <br></br>
                <p className="font-3xl-SemiB">Idiomas</p>
                <br></br>
                <ListInformation Tipo='Idiomas'></ListInformation>
            </div>
            <br></br>
        </div>
    )
}
