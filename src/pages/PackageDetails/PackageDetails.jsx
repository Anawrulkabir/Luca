import { useState, useEffect } from 'react'
import Container from '../../components/Shared/Container'
import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import Navbar from '@/components/Homepage/Navbar/Navbar'
import Footer from '@/components/Shared/Footer/Footer'

const PackageDetails = () => {
  const { id } = useParams()
  const axiosCommon = useAxiosCommon()
  const [thumbnailPosition, setThumbnailPosition] = useState('left')

  // get package details
  const {
    data: packageItem = {},
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ['package', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/package/details/${id}`)
      return data
    },
  })

  //  get all the tour guides
  const {
    data: guides = {},
    // isLoading,
    // refetch,
  } = useQuery({
    queryKey: ['guides'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/all-tour-guide`)
      return data
    },
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setThumbnailPosition('bottom')
      } else {
        setThumbnailPosition('left')
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial position

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isLoading) return <LoadingSpinner />
  console.log(packageItem)
  console.log(guides)

  const images = packageItem?.gallery?.map((image) => ({
    original: image,
    thumbnail: image,
  }))

  return (
    <>
      <Navbar />

      {/* Image gallery */}
      <Container>
        <Helmet>
          <title>{packageItem?.title}</title>
        </Helmet>
        <div className="border my-2">
          <ImageGallery items={images} thumbnailPosition={thumbnailPosition} />
        </div>
      </Container>

      {/* Content  */}
      {/* Tour Plan */}
      <section className="py-8 bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto">
          <div className="p-2 mx-auto text-center md:px-10 lg:px-10 xl:max-w-3xl">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              {packageItem?.packageName}
            </h2>
            <p className="px-2 my-4">{packageItem?.aboutTour}</p>
          </div>
          <section className="bg-gray-100 text-gray-800">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
              <div className="grid gap-4 mx-4 grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                  <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                    <h3 className="text-3xl font-semibold">Tour Plans</h3>
                    <span className="text-sm font-bold tracking-wider uppercase text-gray-600">
                      You can customize
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className=" relative px-4 col-span-8 space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300">
                    {packageItem &&
                      packageItem?.tourPlan.map((day, index) => (
                        <div
                          key={packageItem._id}
                          className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-violet-600"
                        >
                          <h3 className="text-xl font-semibold tracking-wide">
                            {day?.day}
                          </h3>
                          {/* <time className="text-xs tracking-wide uppercase text-gray-600">

                        </time> */}
                          <p className="mt-3">{day?.description}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Tour Guides */}
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            Our Tour Guides
          </h1>
          <p className="max-w-2xl text-center dark:text-gray-600">
            Our knowledgeable and passionate tour guides offer diverse,
            well-rounded experiences of Bangladesh's beauty and culture. With
            degrees ranging from Bachelor's to Master's, our team, aged late 20s
            to mid-40s, ensures memorable journeys in both cities and
            countryside.
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            {guides &&
              guides.map((guide) => (
                <div
                  key={guide?._id}
                  className="flex flex-col justify-center m-8 text-center"
                >
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src={
                      guide?.gender === 'Male'
                        ? guide?.profile_photo
                        : 'https://cdn-icons-png.flaticon.com/512/5301/5301978.png'
                    }
                  />
                  <p className="text-xl font-semibold leading-tight">
                    {guide?.name}
                  </p>
                  <p className="dark:text-gray-600">{guide?.contact}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Form */}

      <Footer />
    </>
  )
}

export default PackageDetails
