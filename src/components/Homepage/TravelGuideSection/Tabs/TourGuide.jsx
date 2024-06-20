/* eslint-disable react/no-unescaped-entities */
// import LoadingSpinner from '@/components/Shared/LoadingSpinner'
import useAxiosCommon from '../../../../hooks/useAxiosCommon'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@/components/ui/skeleton'
import { Link } from 'react-router-dom'

export function TourGuide() {
  const axiosCommon = useAxiosCommon()
  const skeletons = Array.from({ length: 10 })

  //  get all the tour guides
  const {
    data: guides = {},
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ['guides'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/all-tour-guide')
      return data
    },
  })
  console.log(guides)
  if (isLoading)
    return (
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
          <div className="flex flex-row flex-wrap-reverse justify-center gap-4">
            {skeletons.map((_, index) => (
              <div key={index} className="flex flex-col items-center gap-4 m-8">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="gap-2 flex flex-col items-center justify-center">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  return (
    <div>
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
              guides?.map((guide) => (
                <Link
                  to={`/tourGuideDetails/${guide?._id}`}
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
                  <p className="dark:text-gray-600">{guide?.email}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
