import { Skeleton } from '../ui/skeleton'

const LoadingCart = () => {
  return (
    <>
      <div className="flex flex-col  space-y-3  rounded-lg shadow-md pb-3  ">
        <div className="">
          <Skeleton className="rounded-t-xl w-full mb-4 h-60 sm:h-96" />
          <div className="px-4 space-y-2">
            <div className="flex items-center gap-5">
              <Skeleton className="h-4 w-[124px]" />
              <Skeleton className="h-4 w-[125px]" />
            </div>
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-6 w-[250px]" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between px-4 ">
          <div className="space-x-2 flex">
            {/* share button */}
            <Skeleton className="h-2 w-[100px]" />

            {/* bookmark button */}
            <Skeleton className="h-2 w-[100px]" />
          </div>
        </div>
        <Skeleton className="h-10 mx-4" />
      </div>
    </>
  )
}

export default LoadingCart
