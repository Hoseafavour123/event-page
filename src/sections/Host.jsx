import Button  from "../components/Button"
import { linkedIn, twitterX, facebook } from "../assets/icons"
import { hostImage } from "../assets/images"


const Host = () => {
  return (
    <section className="flex justify-wrap align-top max-xl:flex-col gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={hostImage}
          width={773}
          height={500}
          className="object-contain w-full"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-xl font-montserrat text-coral-red">
          Meet the Founder
        </h2>
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          Aanuoluwapo Emmanuel
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Aanuoluwapo Emmanuel is a youth who is passionate about young people
          gaining clarity early in life and living out their God ordained life.
          <br/>
          Her passion revolves around youth empowerment and Leadership
          development and she's also a personal branding Coach. She's a Law
          graduate from the federal university of Abuja Nigeria forging her
          career path in Environmental Law. She's a podcaster, a blogger and an
          author.
          <br/>She recently launched her second book titled YOU AND LINKEDIN
          which is centered on helping people grow on LinkedIn.
          <br/>
        
        </p>
        {/*<div className="flex mt-11 flex-wrap gap-4">
          <span className="text-bold align-top text-sm">Connect: </span>
          <a href="">
            <img src={linkedIn} width={30} height={30} />
          </a>
          <a href="">
            <img src={twitterX} width={30} height={30} />
          </a>
          <a href="">
            <img src={facebook} width={30} height={30} />
          </a>
  </div>*/}
      </div>
    </section>
  )
}

export default Host
