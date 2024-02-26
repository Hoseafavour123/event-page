
import {
  Hero,
  Footer,
  About,
  WhoFor,
  Host,
  Register,
  MissionAndVision,
  Speakers,
  Coordinator
} from './sections/index'

const App = () => {
  return (
    <main className="relative">
      <section className="">
        <Hero />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <WhoFor />
      </section>
      <section className="padding">
        <MissionAndVision />
      </section>
      <section className="padding">
        <Host />
      </section>
      <section className="padding"><Coordinator/></section>
      <section className="padding bg-pale-blue">
        <Speakers />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Register />
      </section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  )
}

export default App
