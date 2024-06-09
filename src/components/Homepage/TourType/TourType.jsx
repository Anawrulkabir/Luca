import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import { FaCertificate } from 'react-icons/fa'

const TourType = () => {
  const types = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
      className="mySwiper m-12 py-12"
    >
      {types.map((item, index) => (
        <SwiperSlide key={index} className="mb-4">
          <div className=" border flex items-center flex-col rounded-xl p-2 lg:p-4 shadow-md">
            <FaCertificate className="text-green-600" />
            <p className="text-xl font-light text-purple-500 pt-3">
              Category {index + 1}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default TourType
