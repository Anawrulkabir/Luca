import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

import {
  FaUmbrellaBeach,
  FaLandmark,
  FaPaw,
  FaMonument,
  FaCity,
  FaTree,
  FaSpa,
  FaHiking,
  FaUtensils,
  FaCalendarAlt,
} from 'react-icons/fa'

const types = [
  {
    type: 'Beach Escapes',
    icon: <FaUmbrellaBeach />,
  },
  {
    type: 'Cultural Heritage',
    icon: <FaLandmark />,
  },
  {
    type: 'Wildlife Adventures',
    icon: <FaPaw />,
  },
  {
    type: 'Historical Tours',
    icon: <FaMonument />,
  },
  {
    type: 'City Highlights',
    icon: <FaCity />,
  },
  {
    type: 'Nature Trails',
    icon: <FaTree />,
  },
  {
    type: 'Relaxation Retreats',
    icon: <FaSpa />,
  },
  {
    type: 'Adventure Expeditions',
    icon: <FaHiking />,
  },
  {
    type: 'Food and Culinary Tours',
    icon: <FaUtensils />,
  },
  {
    type: 'Festivals and Events',
    icon: <FaCalendarAlt />,
  },
]

const TourType = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={6}
      // pagination={{
      //   clickable: true,
      // }}
      breakpoints={{
        300: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper m-4 lg:m-12 lg:py-12"
    >
      {types.map((type, index) => (
        <SwiperSlide key={index} className="mb-4">
          <div className=" border flex items-center flex-col rounded-xl p-2 lg:p-4 shadow-md">
            {type.icon}
            <p className="text-base font-light text-zinc-500 pt-3">
              {type.type}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default TourType
