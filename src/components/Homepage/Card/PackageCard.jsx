import { FcAlarmClock } from 'react-icons/fc'
import { LuCalendarDays } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HiOutlineStar } from 'react-icons/hi2'
import { BiDollar } from 'react-icons/bi'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { GoHeart } from 'react-icons/go'
import { GoHeartFill } from 'react-icons/go'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { axiosSecure } from '@/hooks/useAxiosSecure'
import toast from 'react-hot-toast'
import useAuth from '@/hooks/useAuth'
import useRole from '@/hooks/useRole'

const PackageCard = ({ image, title, id, price }) => {
  // if (isLoading)
  //   return (
  //     <>
  //       <div className="flex flex-col space-y-3">
  //         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  //         <div className="space-y-2">
  //           <Skeleton className="h-4 w-[250px]" />
  //           <Skeleton className="h-4 w-[200px]" />
  //         </div>
  //       </div>
  //       <div className="flex flex-col  space-y-3 overflow-hidden rounded-lg shadow-md pb-3">
  //         <div className="">
  //           <Skeleton className="rounded-xl w-full mb-4 h-60 sm:h-96" />
  //           <div className="px-4">
  //             <div className="flex items-center gap-5">
  //               <Skeleton className="h-4 w-[124px]" />
  //               <Skeleton className="h-4 w-[125px]" />
  //             </div>
  //             <Skeleton className="h-4 w-[200px]" />
  //             <Skeleton className="h-10 w-[250px]" />
  //           </div>
  //         </div>
  //         <div className="flex flex-wrap justify-between px-4 ">
  //           <div className="space-x-2">
  //             {/* share button */}
  //             <Skeleton className="h-2 w-[100px]" />

  //             {/* bookmark button */}
  //             <Skeleton className="h-2 w-[100px]" />
  //           </div>
  //         </div>
  //         <Skeleton className="h-5 w-[250px]" />
  //       </div>
  //     </>
  //   )

  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const [role, isLoading] = useRole()
  const navigate = useNavigate()

  const { mutateAsync } = useMutation({
    mutationFn: async (packageData) => {
      const { data } = await axiosSecure.post(`/addToWishlist`, packageData)
      return data
    },
    onSuccess: () => {
      console.log('Added to wishlist.')
      toast.success('Added to wishlist.')
      navigate('/test-dashboard/wishlists')
      setLoading(false)
    },
  })

  const handleBookmark = async () => {
    const packageInfo = {
      name: user?.displayName,
      email: user?.email,
      packageId: id,
      image: image,
      price: price,
    }
    setClicked(!clicked)
    console.log(user, id)

    try {
      await mutateAsync(packageInfo)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="flex flex-col  space-y-3 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 pb-3">
        <div className="">
          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="px-4">
            <div className="flex items-center gap-5">
              <div className="flex gap-2">
                {/* icon */}
                <FcAlarmClock />

                {/* text */}
                <p className="text-xs text-zinc-500">9 NIGHTS & 10 DAYS</p>
              </div>
              <div className="flex gap-2">
                {/* icon */}
                <LuCalendarDays />
                {/* text */}
                <p className="text-xs text-zinc-500">DEC - DEC</p>
              </div>
            </div>
            <h2 className="my-2 text-xl font-semibold">{title}</h2>
            <p className="text-sm dark:text-gray-600">
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad
              illud atqui apeirian...
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between px-4 ">
          <div className="space-x-2">
            {/* share button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  aria-label="Share this post"
                  type="button"
                  className="p-2 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-600"
                  >
                    <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                  </svg>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="border text-xs text-zinc-400 px-1 rounded-md bg-gray-100">
                  <p>Share</p>
                </div>
              </TooltipContent>
            </Tooltip>

            {/* bookmark button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleBookmark}
                  aria-label="Bookmark this post"
                  type="button"
                  className="p-2"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-600"
                  >
                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                  </svg> */}
                  {clicked ? <GoHeartFill color="red" /> : <GoHeart />}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="border text-xs text-zinc-400 px-1 rounded-md bg-gray-100">
                  <p>Bookmark</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <HiOutlineStar className="text-lg" />
              <span>30</span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.4">
              <BiDollar className="text-lg text-sky-700" />
              <span>{price}</span>
            </button>
          </div>
        </div>

        <Link
          to={`/package/details/${id}`}
          className=" flex items-center justify-center"
        >
          <Button className="w-full mx-3 text-zinc-300">View Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default PackageCard
