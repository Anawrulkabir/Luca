import useAxiosCommon from '@/hooks/useAxiosCommon'
import PackageCard from '../../Card/PackageCard'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@/components/ui/skeleton'
import LoadingCart from '@/components/Sceleton/LoadingCart'

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
      <div className="grid md:grid-cols-3 gap-8 grid-cols-1 ">
        {skeletons.map((_, index) => (
          <LoadingCart key={index} />
        ))}
      </div>
    )

  return (
    <div className="grid md:grid-cols-3 gap-8 grid-cols-1 ">
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
  )
}
