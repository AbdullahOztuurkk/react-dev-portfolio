import React from 'react'
import ServiceItem from './ServiceItem'

const Services = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <ServiceItem name="Backend Development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue magna, hendrerit eu convallis rutrum, ullamcorper in massa."/>
          <ServiceItem name="Frontend Development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue magna, hendrerit eu convallis rutrum, ullamcorper in massa." />
          <ServiceItem name="UI Designing" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue magna, hendrerit eu convallis rutrum, ullamcorper in massa." />
        </div>
      </div>
    </section>
  )};
  
  export default Services