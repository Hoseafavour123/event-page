import { speakers } from "../constants"
import SpeakerCard from "../components/SpeakerCard"

const Speakers = () => {
  return (
    <section id="speakers" className="max-container relative">
      <h3 className="font-palanquin text-center text-4xl font-bold"> Meet 
        <span className="text-coral-red"> Event </span>
        Speakers
      </h3>
      <div className="mt-6 flex flex-col gap-5">
        { speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} imgURL={speaker.imgURL} name={speaker.name} about={speaker.about} />
        ))}
      </div>
    </section>
  )
}

export default Speakers