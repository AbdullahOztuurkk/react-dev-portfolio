import React, { useContext } from 'react'
import ConfigContext from "../../context/ConfigContext"
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  const context = useContext(ConfigContext)
  const experiences = context.experiences

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto">
          {experiences.map((exp)=>
            <ExperienceItem date={exp.date} companyName={exp.companyName} imageLink={exp.imageLink} title={exp.title} link={exp.link} />
          )}
      </div>
    </section>
  )
}

export default Experience
