import React from 'react'
import TestimonialsItem from './TestimonialsItem'

const Testimonials = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto">
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-6 text-center">Testimonials</h1>
        <h3 className='text-xl text-gray-900 mb-6 text-center'>Customers who benefits provided services by me</h3>
        <div class="flex flex-wrap -m-4">
          <TestimonialsItem name="Abdullah Öztürk" title="Software Developer" content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, accusantium commodi "} />
          <TestimonialsItem name="John Doe" title="Software Development Lead" content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, accusantium commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, accusantium commodi "} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
