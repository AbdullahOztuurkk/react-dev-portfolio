import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto">
        <ExperienceItem companyName="Anadolu Kontrol Mühendislik" date="August 2022 - Present" description="test" title="Software Developer" />
        <ExperienceItem companyName="Inncrea Yazılım Bilişim San. Tic. Ltd. Şti." date="August 2021 - Sep 2021" description="test" title="Web Development Intern" />
        <ExperienceItem companyName="IBM Serii Information Technologies" date="June 2016 - July 2016" description="test" title="Logictics Support Personnel" />
      </div>
    </section>
  )
}

export default Experience
