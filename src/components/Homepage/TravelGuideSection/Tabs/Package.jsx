import useAxiosCommon from '@/hooks/useAxiosCommon'
import PackageCard from '../../Card/PackageCard'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '@/components/Shared/LoadingSpinner'

const packages = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

export function Package() {
  const axiosCommon = useAxiosCommon()
  // eslint-disable-next-line no-unused-vars
  // const [params, setParams] = useSearchParams()
  // const category = params.get('category')

  // console.log(category)
  const { data: packages = [], isLoading } = useQuery({
    queryKey: ['packages'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/packages')

      return data
    },
  })
  console.log(packages)

  if (isLoading) return <LoadingSpinner />
  return (
    <div className="grid md:grid-cols-3 gap-8 grid-cols-1 ">
      {packages.map((item) => (
        <PackageCard
          key={item._id}
          image={item?.gallery[0]}
          title={item.packageName}
          id={item?._id}
          price={item?.bookingForm?.price}
        />
      ))}
    </div>
  )
}
