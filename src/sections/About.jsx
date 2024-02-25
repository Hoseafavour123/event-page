import { leadership } from '../assets/images/index'

const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          About the <span className="text-coral-red">Leadership</span> Academy
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
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={leadership} width={570} height={522} className="obj" />
      </div>
    </section>
  )
}

export default About
