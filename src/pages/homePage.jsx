import React from 'react'
import { AboutMe } from '../components/aboutMe'
import { InformationKnowledge } from '../components/information/InformationKnowledge'
import { ListInformation } from '../components/information/ListInformation'

const Homepage = () => {
    return (
        <div className="flex w-auto ">
            <div className="itemIzq px-5">
                <AboutMe></AboutMe>
                <ListInformation Tipo='Idiomas'></ListInformation>
                <br></br>
            </div>
            <div className="item">
                <div className="grid2 grid-cols-2">
                    <div className="name row-start-1 col-start-1 col-end-3 flex items-center justify-center">
                        <div>
                            <p className='font-sans text-4xl not-italic font-bold text-center p-0 text-gray-500'>Paola Andrea Posada Restrepo</p>
                            <p className='font-2xl'>Estudiante de Ingeniería de sistemas</p>
                            <br></br>
                        </div>
                    </div>
                    <div className="box row-start-2 col-start-1">
                        <ListInformation Tipo='Academica'></ListInformation>
                    </div>
                    <div className="box row-start-2 col-start-2">
                        <InformationKnowledge></InformationKnowledge>
                    </div>
                    <div className="box row-start-3 row-span-3 col-start-1">
                        <br></br>
                        <ListInformation Tipo='Laboral'></ListInformation>
                    </div>
                    <div className="box row-start-4 col-start-2">
                        <br></br>
                        <ListInformation Tipo='Hobbies'></ListInformation>
                    </div>
                    <div className="box row-start-3 col-start-2">
                        <ListInformation Tipo='Cursos'></ListInformation>
                    </div>
                    <div className='relative'>
                        <img className='absolute right-0 -bottom-0' src="https://i.ibb.co/dbFtbZy/Vector.png"></img>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Homepage;