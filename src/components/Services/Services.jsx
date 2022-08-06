import React from 'react'
import ServiceItem from './ServiceItem'

const Services = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Provided Services</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <ServiceItem name="Backend Development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue magna, hendrerit eu convallis rutrum, ullamcorper in massa."/>
          <ServiceItem name="Frontend Development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue magna, hendrerit eu convallis rutrum, ullamcorper in massa." />
          <ServiceItem name="Desktop Development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue magna, hendrerit eu convallis rutrum, ullamcorper in massa." />
        </div>
      </div>
    </section>
  )};
  
  export default Services