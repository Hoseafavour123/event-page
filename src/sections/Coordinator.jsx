import { bolanle } from "../assets/images" 
import { email, phone } from "../assets/icons"

const Coordinator = () => {
  return (
    <section className="flex justify-wrap align-top max-xl:flex-col gap-10 max-container">
      <div className="flex-1">
        <img
          src={bolanle}
          width={773}
          height={500}
          className="object-contain w-full"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-xl font-montserrat text-coral-red">
          Program Coordinator
        </h2>
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          Bolanle Emmanuel
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Bolanle, a graduate in English Language, possesses exceptional
          communication and interpersonal abilities. Presently, she serves as a
          research officer at a youth-led NGO based in Abuja, Nigeria.
          <br />
          Alongside her professional role, she demonstrates her creativity as a
          writer she is also an entrepreneur, specializing in importing
          affordable home decor items. Furthermore, she has moderated a webinar
          aimed at youth empowerment and co-hosted an entrepreneurship session
          targeting women. Bolanle is renowned for her diligence and continuous
          pursuit of personal and professional growth opportunities.
        </p>
      </div>
    </section>
  )
}

export default Coordinator
