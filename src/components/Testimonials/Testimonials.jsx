import React from 'react'
import TestimonialsItem from './TestimonialsItem'

const Testimonials = ({ value }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto">
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-6 text-center">Testimonials</h1>
        <h3 className='text-xl text-gray-900 mb-6 text-center'>Customers who benefits provided services by me</h3>
        <div class="flex flex-wrap -m-4">
          {value.map((testimonial) =>
            <TestimonialsItem name={testimonial.name} title={testimonial.title} content={testimonial.content} imageLink={testimonial.imageLink} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
