import { heroImage } from '../assets/images/index'
import { useState, useEffect} from 'react'


const Hero = () => {
  const futureDate = new Date('2024-04-01T00:00:00')
  
  const calculateTimeLeft = () => {
    const difference = +futureDate - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const futureEndRegistration = new Date('2024-03-20T00:00:00')
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [registrationStatus, setRegistrationStatus] = useState(true)


  useEffect(() => {
    const currentDate = new Date()
    if (currentDate.getTime() > futureEndRegistration.getTime()) {
      setRegistrationStatus(false)
    }
  }, [])


  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = []
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })


  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex flex-col gap-5 items-center text-center text-white">
        <h1 className="text-4xl font-bold ">LINKEDIN LEADERSHIP ACADEMY</h1>
        <span className="text-xl font-bold">COHORT 1</span>

        <button className="w-auto bg-red-500 hover:bg-red-300 text-white font-bold py-5 px-9 rounded focus:outline-none focus:shadow-outline mt-3">
          {registrationStatus ? (
            <a href="https://forms.gle/FHctTmVtQVZuUKxd8">Register Now</a>
          ) : (
            <a href="">Registeration has ended!</a>
          )}
        </button>
        <span className="m-2">
          Registration ends 20th March, 2024{' '}
        </span>
      </div>

      <div className="absolute bottom-[27px] bg-white h-auto flex flex-col items-center justify-center lg:w-[25%] sm:w-auto mt-2">
        <div className="text-3xl mb-2">
          <small className="text-sm">starts: </small>
          <small className="">
            {futureDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </small>
          <br />
          <small className="text-sm">ends: </small>{' '}
          <small>April 30, 2024</small>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="bg-gradient-to-br from-black via-black-500 to-red-500 rounded px-3">
            <div className="text-5xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-sm text-white">Days</div>
          </div>
          <div className="bg-gradient-to-br from-black via-black-500 to-red-500 rounded px-3">
            <div className="text-5xl font-bold text-white">
              {timeLeft.hours}
            </div>
            <div className="text-sm text-white">Hours</div>
          </div>
          <div className="bg-gradient-to-br from-black via-black-500 to-red-500 rounded px-3">
            <div className="text-5xl font-bold text-white">
              {timeLeft.minutes}
            </div>
            <div className="text-sm text-white">Minutes</div>
          </div>
          <div className="bg-gradient-to-br from-black via-black-500 to-red-500 rounded px-3">
            <div className="text-5xl font-bold text-white">
              {timeLeft.seconds}
            </div>
            <div className="text-sm text-white">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Hero