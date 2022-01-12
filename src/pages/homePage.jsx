import React from 'react'
import { AboutMe } from '../components/aboutMe'
import { InformationKnowledge } from '../components/information/InformationKnowledge'
import { ListInformation } from '../components/information/ListInformation'

const Homepage = () => {
    return (
        <div className="contenedor">
            <div className="itemIzq">

                <div className='sm:hidden md:flex-col md:items-center md:w-full lg:hidden xl:hidden'>
                    <AboutMe></AboutMe>
                    <br></br>
                    <InformationKnowledge></InformationKnowledge>
                    <br></br>
                    <ListInformation Tipo='Hobbies'></ListInformation>
                    <br></br>
                    <ListInformation Tipo='Idiomas'></ListInformation>
                </div>
                <div className='sm:hidden md:hidden lg:hidden xl:flex-col xl:items-center xl:w-full'>
                    <AboutMe></AboutMe>
                    <br></br>
                    <ListInformation Tipo='Hobbies'></ListInformation>
                    <br></br>
                    <ListInformation Tipo='Idiomas'></ListInformation>
                </div>
                <div className='sm:hidden md:hidden lg:flex-col xl:hidden'>
                    <AboutMe></AboutMe>
                    <ListInformation Tipo='Idiomas'></ListInformation>
                </div>
                <div className='md:hidden xl:hidden lg:hidden'>
                    <div className='my-2'>
                        <p className='font-sans text-4xl not-italic font-bold text-center p-0 text-gray-900'>Paola Andrea Posada Restrepo</p>
                        <p className='font-sans text-2xl not-italic font-normal text-center p-0.5 text-gray-900'>Estudiante de Ingeniería de sistemas</p>
                        <br></br>
                    </div>
                    <AboutMe></AboutMe>
                    <br></br>
                    <InformationKnowledge></InformationKnowledge>
                    <br></br>
                    <ListInformation Tipo='Academica'></ListInformation>
                    <br></br>
                    <ListInformation Tipo='Laboral'></ListInformation>
                    <br></br>
                    <ListInformation Tipo='Cursos'></ListInformation>
                    <br></br>
                    <ListInformation Tipo='Hobbies'></ListInformation>
                    <br></br>
                    <ListInformation Tipo='Idiomas'></ListInformation>
                </div>
            </div>
            <div className="item sm:hidden">
                <div className="grid2 pt-2">
                    <div className="row-start-1 col-start-1 col-end-3 flex items-center justify-center">
                        <div>
                            <p className='font-sans text-4xl not-italic font-bold text-center p-0 text-gray-500'>Paola Andrea Posada Restrepo</p>
                            <p className='font-sans text-2xl not-italic font-normal text-center p-0.5 text-gray-700'>Estudiante de Ingeniería de sistemas</p>
                            <br></br>
                        </div>
                    </div>
                    <div className="box lg:row-start-2 lg:col-start-1 
                                        sm:row-start-2 sm:col-start-1 ">
                        <ListInformation Tipo='Academica'></ListInformation>
                    </div>
                    <div className="lg:box lg:row-start-2 lg:col-start-2 lg:block lg:px-6 
                                    xl:box xl:row-start-2 xl:col-start-2 xl:block xl:px-6 
                                    md:hidden
                                    sm:row-start-3 sm:col-start-1">
                        <InformationKnowledge></InformationKnowledge>
                    </div>
                    <div className="box lg:row-start-3 lg:row-span-3 
                                        md:row-start-4 md:col-start-1 
                                        sm:row-start-4 sm:col-start-1">
                        <br></br>
                        <ListInformation Tipo='Laboral'></ListInformation>
                    </div>
                    <div className="box lg:row-start-4 lg:col-start-2 lg:flex lg:px-6
                                        xl:hidden
                                        md:hidden
                                        sm:row-start-5 sm:col-start-1">
                        <ListInformation Tipo='Hobbies'></ListInformation>
                    </div>
                    <div className="box lg:row-start-3 lg:col-start-2 
                                        xl:row-start-3 xl:col-start-2
                                        md:row-start-6 md:col-start-1
                                        sm:row-start-6 sm:col-start-1">
                        <br></br>
                        <ListInformation Tipo='Cursos'></ListInformation>
                        <br></br>
                    </div>
                    <div className='lg:relative xl:hidden md:hidden sm:hidden'>
                        <img className='absolute right-0 bottom-0' alt='vector' src="https://i.ibb.co/dbFtbZy/Vector.png"></img>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Homepage;