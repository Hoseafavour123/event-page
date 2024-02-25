import Button  from "../components/Button"
import { linkedIn, twitterX, facebook } from "../assets/icons"
import { hostImage } from "../assets/images"


const Host = () => {
  return (
    <section className="flex justify-wrap align-top  max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
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
          Meet the Host
        </h2>
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          Aanuoluwapo Emmanuel
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish nikey arrival, feel free to bounce in those! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam delectus
          maxime quidem. Quidem animi et doloremque at asperiores veniam
          voluptates voluptas,
        </p>
        <p className="mt-6 mb-6 lg:max-w-lg info-text">
          corporis hic. Minus sapiente temporibus ex molestiae, distinctio ab?
        </p>
        <div className="flex mt-11 flex-wrap gap-4">
          <span className="text-bold align-top text-sm">Connect: </span>
          <a href=""><img src={linkedIn} width={30} height={30} /></a>
          <a href=""><img src={twitterX} width={30} height={30} /></a>
          <a href=""><img src={facebook} width={30} height={30}/></a>
          
        </div>
      </div>
    </section>
  )
}

export default Host
