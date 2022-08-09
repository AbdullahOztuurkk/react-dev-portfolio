import React, { useContext } from 'react'
import ConfigContext from '../../context/ConfigContext'
import Skills from '../Skills/Skills'

const About = () => {
    const context = useContext(ConfigContext)
    const AboutInfo = context.about

    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto px-5 py-5">
                <div class="w-full">
                    <h1 class="title-font sm:text-3xl indent-8 text-2xl mb-4 font-medium text-gray-900">{AboutInfo.header}</h1>
                    <p class="mb-8 leading-9 indent-8 text-justify">{AboutInfo.greetings}</p>
                </div>
                <img className="rounded-lg mx-auto mb-10" width={250} height={250} src={AboutInfo.image} alt={AboutInfo.image_description} />
                <Skills />
            </div>
        </section>
    )
}

export default About
