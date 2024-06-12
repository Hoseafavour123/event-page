
const TestimonialCard = ({name, review}) => {
   return (
     <div className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
       <blockquote className="italic text-lg text-gray-700">
         "{review}"
       </blockquote>
       <div className="mt-4 text-right">
         <p className="font-semibold text-gray-900">{name}</p>
       </div>
     </div>
   )
}

export default TestimonialCard
