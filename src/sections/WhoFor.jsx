import  WhoForCard  from "../components/whoForCard"
import { changeMakers, kingdom, sun} from '../assets/icons/index'

const WhoFor = () => {
  return (
    <section id="whofor" className="max-container ">
      <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold mb-3">
        Who is this <span className="text-coral-red"> Academy</span> For?
      </h2>
      <div className="flex justify-center flex-wrap gap-9">
        <WhoForCard imgURL={changeMakers} label={'Change Makers'} subtext={'The academy is for every young person who is passionate about making a change in their world'} />
        <WhoForCard imgURL={sun} label={'Lights of the World'} subtext={'It is for every young person that understands that they are here on the earch as a Light'} />
        <WhoForCard imgURL={kingdom} label={'Kingdom Vessels'} subtext={'It is for every young person whose desire is THY KINGDOM COME'} />
      </div>
    </section>
  )
}

export default WhoFor
