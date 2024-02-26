import { missionVision } from '../assets/images/index'

const MissionAndVision = () => {
  return (
    <section
      id="mission"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          Mission <span className="text-coral-red">& </span> Vision
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          To raise leader's for global dominance
          <br/>
          To cultivate vissionaries for global prominence
        </p>
       
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={missionVision} width={570} height={522} className="obj" />
      </div>
    </section>
  )
}

export default MissionAndVision
