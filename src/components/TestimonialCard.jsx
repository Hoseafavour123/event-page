
const TestimonialCard = ({name, review, imgURL}) => {
   return (
     <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
       <img
         src={imgURL}
         alt=""
         className=" rounded-full object-cover w-[200px] h-[200px]"
       />
       <blockquote className="italic text-lg text-gray-700">
         <div>"{review}"</div>
       </blockquote>
       <div className="mt-4 text-right">
         <p className="font-semibold text-gray-900">{name}</p>
       </div>
     </div>
   )
}

export default TestimonialCard
