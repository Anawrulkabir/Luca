import LoadingSpinner from '@/components/Shared/LoadingSpinner'
import useAxiosCommon from '../../../../hooks/useAxiosCommon'
import { useQuery } from '@tanstack/react-query'

export function TourGuide() {
  const axiosCommon = useAxiosCommon()

  //  get all the tour guides
  const {
    data: guides = {},
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ['guides'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/all-tour-guide`)
      return data
    },
  })
  if (isLoading) return <LoadingSpinner />
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
                  <p className="dark:text-gray-600">{guide?.email}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
