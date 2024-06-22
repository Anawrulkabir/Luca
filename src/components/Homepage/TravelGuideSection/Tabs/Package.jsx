import useAxiosCommon from '@/hooks/useAxiosCommon'
import PackageCard from '../../Card/PackageCard'
import { useQuery } from '@tanstack/react-query'
import LoadingCart from '@/components/Sceleton/LoadingCart'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

export function Package() {
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
      <div className="grid md:grid-cols-3 gap-8 grid-cols-1 mt-8">
        {skeletons.map((_, index) => (
          <LoadingCart key={index} />
        ))}
      </div>
    )

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 grid-cols-1 mt-8">
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
      <Link to="/allPackages" className="flex justify-center mt-8 mb-12">
        <Button variant="outline">See All Packages</Button>
      </Link>
    </>
  )
}
