import React from 'react'
import { AboutMe } from '../components/aboutMe'
import { InformationKnowledge } from '../components/information/InformationKnowledge'
import { ListInformation } from '../components/information/ListInformation'

const Homepage = () => {
    return (
        <div className="flex w-auto h-full">
            <div className="itemIzq px-5 h-full">
                <AboutMe></AboutMe>
                <div className='lg:hidden md:flex-col md:items-center md:w-full'>
                    <br></br>
                    <InformationKnowledge></InformationKnowledge>
                    <br></br>
                    <ListInformation Tipo='Hobbies'></ListInformation>
                    <br></br>
                    <ListInformation Tipo='Idiomas'></ListInformation>
                </div>
                <div className='md:hidden lg:flex'>
                    <ListInformation Tipo='Idiomas'></ListInformation>
                </div>
                <br></br>
            </div>
            <div className="item">
                <div className="grid2">
                    <div className="row-start-1 col-start-1 col-end-3 flex items-center justify-center">
                        <div>
                            <p className='font-sans text-4xl not-italic font-bold text-center p-0 text-gray-500'>Paola Andrea Posada Restrepo</p>
                            <p className='font-2xl'>Estudiante de Ingeniería de sistemas</p>
                            <br></br>
                        </div>
                    </div>
                    <div className="box lg:row-start-2 lg:col-start-1">
                        <ListInformation Tipo='Academica'></ListInformation>
                    </div>
                    <div className="lg:box lg:row-start-2 lg:col-start-2  lg:block  lg:px-6 md:hidden">
                        <InformationKnowledge></InformationKnowledge>
                    </div>
                    <div className="box lg:row-start-3 lg:row-span-3 col-start-1 md:row-start-4 ">
                        <br></br>
                        <ListInformation Tipo='Laboral'></ListInformation>
                    </div>
                    <div className="lg:box lg:row-start-4 lg:col-start-2 lg:block lg:px-6  md:hidden">
                        <ListInformation Tipo='Hobbies'></ListInformation>
                    </div>
                    <div className="box lg:row-start-3 lg:col-start-2 md:row-start-6 md:col-start-1">
                        <br></br>
                        <ListInformation Tipo='Cursos'></ListInformation>
                        <br></br>
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