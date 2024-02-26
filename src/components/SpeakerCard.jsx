
const SpeakerCard = ({imgURL, name, about}) => {
  return (
    <div className="flex gap-5 mt-5 sm:items-center md:items-start sm:flex-col md:flex-row">
      <img
        src={imgURL}
        className="rounded-full object-cover w-[200px] h-[200px]"
      />
      <div className="flex-1">
        <h3 className="mt-1 font-palanquin text-3xl font-bold sm:text-center md:text-justify">
          {name}
        </h3>
        <p
          className="info-text md:text-justify"
          dangerouslySetInnerHTML={{ __html: about }}
        ></p>
      </div>
    </div>
  )
}

export default SpeakerCard