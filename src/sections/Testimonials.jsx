import { testimonials } from '../constants'
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = () => {
 return (
   <section className="py-12 bg-gray-50">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       <h3 className="font-palanquin text-center text-4xl font-bold mb-5">
         {' '}
         Testimonial
         <span className="text-coral-red"> Highlights </span>
       </h3>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {testimonials.map((testimonial, index) => (
           <TestimonialCard
             key={index}
             review={testimonial.review}
             name={testimonial.name}
             imgURL={testimonial.imgURL}
           />
         ))}
       </div>
     </div>
   </section>
 )
}

export default Testimonials
