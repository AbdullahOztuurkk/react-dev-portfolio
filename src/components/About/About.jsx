import React from 'react'
import Skills from '../Skills/Skills'

const About = ({value}) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto px-5 py-5">
                <div class="w-full">
                    <h1 class="title-font sm:text-3xl indent-8 text-2xl mb-4 font-medium text-gray-900">{value.header}</h1>
                    <p class="mb-8 leading-9 indent-8 text-justify">{value.greetings}</p>
                </div>
                <img className="rounded-lg mx-auto mb-10" width={250} height={250} src={"./img/about.svg"} alt="A image about programming" />
                <Skills />
            </div>
        </section>
    )
}

export default About
