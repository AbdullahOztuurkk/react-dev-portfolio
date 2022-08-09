import React, { useContext } from 'react'
import ConfigContext from '../../context/ConfigContext'
import SkillList from './SkillList'

const Skills = () => {
    const skills = useContext(ConfigContext).skills
    console.log(skills)
    return (
        <footer class="text-gray-600 body-font">
            <div class="container px-5 mx-auto flex h-20 md:items-center lg:items-end md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Tech Stack</span>
                    </a>
                    <p class="mt-2 text-sm text-gray-500">Used Technologies and Tools </p>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-5 -mb-5 md:mt-0 mt-5 md:text-left text-center">
                    <SkillList skills={skills.slice(0,4)} />
                    <SkillList skills={skills.slice(4,8)} />
                    <SkillList skills={skills.slice(8,12)} />
                </div>
            </div>
        </footer>
    )
}

export default Skills
