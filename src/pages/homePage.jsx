import React from 'react'
import { AboutMe } from '../components/aboutMe'
import { Avatar } from '../components/avatar'
import { ListInformation } from '../components/information/ListInformation'

const Homepage = () => {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen w-auto">
            <div className="itemIzq h-auto flex-wrap px-5 ">
                <AboutMe></AboutMe>
            </div>
            <div className="item h-auto flex-auto">
                <p>Paola</p>
            </div>
        </div>
    )
}

export default Homepage;