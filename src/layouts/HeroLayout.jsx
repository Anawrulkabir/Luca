import { Link, useNavigate } from 'react-router-dom'
import FullscreenButton from '../components/Shared/FullScreen/FullscreenButton'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { useState } from 'react'
import { PiSpinnerGapLight } from 'react-icons/pi'

const HeroLayout = () => {
  const [imageLoading, setImageLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleImageError = () => {
    setImageLoading(false)
    setError(true)
  }

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleButton = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      navigate('/home')
    }, 2000)
  }
  return (
    <>
      {/* for mobile device */}
      <div className="relative  lg:hidden md:hidden flex flex-col items-center">
        {/*  TODO
        {imageLoading && (
          <PiSpinnerGapLight className="animate-spin absolute z-[99] top-1/2 left-1/2 -translate-x-1/2" />
        )} */}

        <div>
          <img
            src="https://i.ibb.co/HtZ7XLd/luca-logo.png"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className="w-20   absolute left-1/2 -translate-x-1/2  z-20 "
          />
        </div>

        <img
          className="w-screen h-screen object-cover "
          src="https://i.ibb.co/ccHBpMj/1153952.png"
          alt=""
        />
        <div className="absolute z-20 top-1/2 -translate-y-1/2 flex flex-col  ">
          <p className=" text-6xl font-extrabold text-lime-100 capitalize drop-shadow-2xl text-center">
            Explore the <br /> world with <br /> vespa.
          </p>
          <Link>
            <button
              onClick={handleButton}
              className=" border-green-900 px-10 py-5 rounded-full text-3xl font-bold text-slate-50 mt-12 bg-lime-900 hover:bg-lime-900 flex items-center justify-between gap-3"
            >
              Explore today
              <span>
                {loading ? (
                  <PiSpinnerGapLight className="animate-spin" />
                ) : (
                  <IoArrowForwardOutline className="-rotate-45" />
                )}
              </span>
            </button>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-black to-transparent h-screen w-full absolute top-0 opacity-45 z-1 "></div>
        <FullscreenButton color={'white'} />
      </div>
      {/* for lg device */}
      <div className="relative hidden lg:block md:block">
        <div>
          <img
            src="https://i.ibb.co/HtZ7XLd/luca-logo.png"
            alt=""
            className="w-12 ml-3 mt-2 absolute   hidden md:block lg:block z-20 "
          />
        </div>
        <img
          className="w-full h-screen object-cover "
          src="https://i.ibb.co/ccHBpMj/1153952.png"
          alt=""
        />
        <div className="absolute lg:top-1/2  left-0 lg:px-32 z-20 lg:-translate-y-1/2 ">
          <p className="lg:text-8xl text-6xl font-extrabold text-lime-100 capitalize drop-shadow-2xl text-center lg:text-left">
            Explore the <br /> world with <br /> vespa.
          </p>
          <Link>
            <button
              onClick={handleButton}
              className=" border-green-900 px-10 py-5 rounded-full text-3xl font-bold text-slate-50 mt-12 bg-lime-900 hover:bg-lime-900 flex items-center justify-between gap-3"
            >
              Explore today
              <span>
                {loading ? (
                  <PiSpinnerGapLight className="animate-spin" />
                ) : (
                  <IoArrowForwardOutline className="-rotate-45" />
                )}
              </span>
            </button>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-black to-transparent h-screen w-full absolute top-0 opacity-45 z-1 "></div>
        <FullscreenButton color={'white'} />
      </div>
    </>
  )
}

export default HeroLayout
