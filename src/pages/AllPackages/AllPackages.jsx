import PackageCard from '@/components/Homepage/Card/PackageCard'
import Navbar from '@/components/Homepage/Navbar/Navbar'
import LoadingCart from '@/components/Sceleton/LoadingCart'
import BackButton from '@/components/Shared/Button/BackButton'
import Footer from '@/components/Shared/Footer/Footer'
import FullscreenButton from '@/components/Shared/FullScreen/FullscreenButton'
import useAxiosCommon from '@/hooks/useAxiosCommon'
import { useQuery } from '@tanstack/react-query'

const AllPackages = () => {
  const axiosCommon = useAxiosCommon()
  const skeletons = Array.from({ length: 3 })

  const { data: packages = [], isLoading } = useQuery({
    queryKey: ['packages'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/packages')

      return data
    },
  })
  console.log(packages)

  if (isLoading)
    return (
      <>
        <Navbar />
        <div className="grid md:grid-cols-3 gap-8 grid-cols-1 mt-8">
          {skeletons.map((_, index) => (
            <LoadingCart key={index} />
          ))}
        </div>
        <Footer />
      </>
    )

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-10">All Packages</h1>
      <div className="grid md:grid-cols-3 gap-8 grid-cols-1 mt-8 mx-4 lg:mx-12 my-10">
        {packages.map((item) => (
          <PackageCard
            key={item._id}
            image={item?.gallery[0]}
            title={item.packageName}
            id={item?._id}
            price={item?.bookingForm?.price}
            isLoading={isLoading}
          />
        ))}
      </div>
      <Footer />
      <FullscreenButton />
      <BackButton />
    </>
  )
}

export default AllPackages
