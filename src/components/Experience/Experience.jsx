import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = ({ value }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto">
          {value.map((exp)=>
            <ExperienceItem date={exp.date} companyName={exp.companyName} imageLink={exp.imageLink} title={exp.title} link={exp.link} />
          )}
      </div>
    </section>
  )
}

export default Experience
