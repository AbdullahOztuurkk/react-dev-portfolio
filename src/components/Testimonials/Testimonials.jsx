import React,{useContext} from 'react'
import ConfigContext from '../../context/ConfigContext'
import TestimonialsItem from './TestimonialsItem'

const Testimonials = () => {
  const context = useContext(ConfigContext)
  const testimonials = context.testimonials

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto">
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-6 text-center">{context.settings.testimonials_title}</h1>
        <h3 className='text-xl text-gray-900 mb-6 text-center'>{context.settings.testimonials_description}</h3>
        <div class="flex flex-wrap -m-4">
          {testimonials.map((testimonial) =>
            <TestimonialsItem name={testimonial.name} title={testimonial.title} content={testimonial.content} imageLink={testimonial.imageLink} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
