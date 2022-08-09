import React, { useContext } from 'react'
import ConfigContext from '../../context/ConfigContext';
import ServiceItem from './ServiceItem'

const Services = () => {
  const context = useContext(ConfigContext)
  const services = context.services

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">{context.settings.services_title}</h1>
          <p class="text-base leading-relaxed mx-auto mt-6 text-gray-500s">{context.settings.services_description}</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          {services.map((service) =>
            <ServiceItem name={service.name} description={service.description} />
          )}
        </div>
      </div>
    </section>
  )
};

export default Services