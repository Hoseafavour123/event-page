import { bolanle } from "../assets/images" 
import { email, phone } from "../assets/icons"

const Coordinator = () => {
  return (
    <section className="flex justify-wrap align-top max-xl:flex-col-reverse gap-10 max-container">
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
        <div className="flex mt-11 flex-wrap gap-4">
          <span className="text-bold align-top text-sm">Get in Touch: </span>
          <div className="flex flex-col">
            <div className="flex mb-2">
              <img src={phone} height={30} width={30} className="inline" />
              <p>
                <a href="tel:+2347087098382">
                +2347087098382
                </a>
              </p>
            </div>

            <a href="mailto:LinkedinLeadershipAcademy@gmail.com">
              <img
                src={email}
                height={30}
                width={30}
                alt=""
                className="inline"
              />{' '}
              <span>LinkedinLeadershipAcademy@gmail.com </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coordinator
