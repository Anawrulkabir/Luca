import { ReviewCarrosel } from '@/components/Homepage/Carossel/ReviewCarrosel'
import Navbar from '@/components/Homepage/Navbar/Navbar'
import BackButton from '@/components/Shared/Button/BackButton'
import Footer from '@/components/Shared/Footer/Footer'
import LoadingSpinner from '@/components/Shared/LoadingSpinner'
import { Button } from '@/components/ui/button'
import { axiosCommon } from '@/hooks/useAxiosCommon'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const TourGuideDetails = () => {
  //  get all the tour guides
  const { id } = useParams()

  const {
    data: guideDetails = {},
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ['guideDetails'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/tourGuideDetails/${id}`)
      return data
    },
  })
  console.log(guideDetails)
  if (isLoading) <LoadingSpinner />
  return (
    <>
      <Navbar />
      <div className="md:p-12 p-4">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {guideDetails?.age}
                </p>
                <p className="text-gray-400">Age</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {guideDetails?.age + 12}
                </p>
                <p className="text-gray-400">Total tour</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {(guideDetails?.age / 6).toPrecision(2) > 5.0
                    ? '4.7'
                    : (guideDetails?.age / 6).toPrecision(2)}
                </p>
                <p className="text-gray-400">Rating</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  src={guideDetails?.profile_photo}
                  alt=""
                  className="h-24 w-24 rounded-full"
                />
              </div>
            </div>

            <div className="space-x-3 flex mx-auto mt-32 md:mt-0 md:justify-center">
              <Button className="text-white py-2 px-4 uppercase rounded  shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connect
              </Button>
              <Button className="text-white py-2 px-4 uppercase rounded  shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </Button>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {guideDetails?.name}
            </h1>
            <p className="font-light text-gray-600 mt-3">Dhaka, Bangladesh</p>

            <p className="mt-8 text-gray-500">Lead Tourist Guide</p>
            <p className="mt-8 text-gray-500">{guideDetails?.email}</p>
            <p className="mt-2 text-gray-500">
              {guideDetails?.education_level}
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-center py-3 md:py-5">
            Reviews
          </h2>
          <ReviewCarrosel />
          {/* <button className="text-indigo-500 py-2 px-4  font-medium mt-4 mx-auto">
            Show more
          </button> */}
          <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800 mx-auto">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-700"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-700"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-700"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-700"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  rows="3"
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none text-gray-800 bg-gray-50 border border-orange-950"
                ></textarea>
                <button
                  type="button"
                  className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-violet-600"
                >
                  Leave feedback
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm text-gray-600"
              >
                Maybe later
              </a>
            </div>
          </div>
        </div>
      </div>
      <BackButton />
      <Footer />
    </>
  )
}

export default TourGuideDetails
