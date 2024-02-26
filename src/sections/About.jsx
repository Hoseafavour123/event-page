import { leadership } from '../assets/images/index'

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          About the <span className="text-coral-red">Leadership</span> Academy
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          The LinkedIn Leadership Academy is an academy where young people are
          trained, equipped and nurtured to be agents of change in their world.
          <br />
          The academy is on a mission to raise young leaders who will
          positively impact the society and become problem solver's and solution
          providers.
          <br />
          Simultaneously, participants of the academy will engage in a 30 days
          LinkedIn consistency challenge and they will be trained on how to make
          use of LinkedIn to network with other professionals, connect with like
          minds and leverage LinkedIn to pursue their goals.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={leadership} width={570} height={522} className="obj" />
      </div>
    </section>
  )
}

export default About
