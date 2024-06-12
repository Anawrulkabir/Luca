// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from '@/components/ui/carousel'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'
// import { Button } from '@headlessui/react'
// import { ArrowUpRight, Badge } from 'lucide-react'
// import { Link } from 'react-router-dom'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export function BannerCarossel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  return (
    <Carousel
      plugins={[plugin.current]}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      opts={{
        align: 'start',
      }}
      className="w-full "
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-2/3 relative">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://i.ibb.co/Jrh3wLQ/mamun-srizon-qay3l-NDSHzc-unsplash.jpg"
              alt="Photo by Drew Beamer"
              // fill
              className="rounded-md object-cover "
            />
          </AspectRatio>
          <div className="absolute bottom-0 px-4 lg:px-10 py-3 lg:py-8 z-[10]">
            <p className="text-2xl lg:text-3xl font-bold text-zinc-200">
              Sundarbans
            </p>
            <p className="text-white font-light text-sx lg:text-sm">
              The world&apos;s largest mangrove forest, renowned for its unique
              ecosystem and Bengal tigers.
            </p>
          </div>

          {/* <div className="rounded-md w-full h-full absolute top-0 right-0 bg-gradient-to-b from-transparent to-zinc-900"></div> */}
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-2/3 relative">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://i.ibb.co/n6Q8765/ahmed-jubair-u-Fq-HGTdd-Bf-Y-unsplash.jpg"
              alt="Photo by Drew Beamer"
              // fill
              className="rounded-md object-cover "
            />
          </AspectRatio>
          <div className="absolute bottom-0 px-4 lg:px-10 py-3 lg:py-8 z-[10]">
            <p className="text-2xl lg:text-3xl font-bold text-zinc-200">
              Bagerhat
            </p>
            <p className="text-white font-light text-sx lg:text-sm">
              A historic city with 15th-century mosques, including the
              UNESCO-listed Sixty Dome Mosque.
            </p>
          </div>

          {/* <div className="rounded-md w-full h-full absolute top-0 right-0 bg-gradient-to-b from-transparent to-zinc-900"></div> */}
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-2/3 relative">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://i.ibb.co/2FZ8m8N/riashat-rafat-Ph5-VL5-Tilto-unsplash.jpg "
              alt="Photo by Drew Beamer"
              // fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div className="absolute bottom-0 px-4 lg:px-10 py-3 lg:py-8 z-[10]">
            <p className="text-2xl lg:text-3xl font-bold text-zinc-200">
              Cox&apos;s Bazar
            </p>
            <p className="text-white font-light text-sx lg:text-sm">
              Home to the longest natural sea beach in the world, stretching
              over 120 kilometers.
            </p>
          </div>

          {/* <div className="rounded-md w-full h-full absolute top-0 right-0 bg-gradient-to-b from-transparent to-zinc-900"></div> */}
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-2/3 relative">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://i.ibb.co/hgqqNBj/mosharraf-hossain-0cld8-OL3h-X0-unsplash.jpg"
              alt="Photo by Drew Beamer"
              // fill
              className="rounded-md object-cover "
            />
          </AspectRatio>
          <div className="absolute bottom-0 px-4 lg:px-10 py-3 lg:py-8 z-[10]">
            <p className="text-2xl lg:text-3xl font-bold text-zinc-200">
              Srimangal
            </p>
            <p className="text-white font-light text-sx lg:text-sm">
              The &quot;Tea Capital of Bangladesh&quot; famous for its lush tea
              gardens and natural beauty.
            </p>
          </div>

          {/* <div className="rounded-md w-full h-full absolute top-0 right-0 bg-gradient-to-b from-transparent to-zinc-900"></div> */}
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-2/3 relative">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://i.ibb.co/MBN2mF7/ashraful-pranto-z-Po6w-ZFUx-Mw-unsplash.jpg"
              alt="Photo by Drew Beamer"
              // fill
              className="rounded-md object-cover "
            />
          </AspectRatio>
          <div className="absolute bottom-0 px-4 lg:px-10 py-3 lg:py-8 z-[10]">
            <p className="text-2xl lg:text-3xl font-bold text-zinc-200">
              Saint Martin&apos;s Island
            </p>
            <p className="text-white font-light text-sx lg:text-sm">
              The only coral island in Bangladesh, known for its pristine
              beaches and clear blue waters.
            </p>
          </div>

          {/* <div className="rounded-md w-full h-full absolute top-0 right-0 bg-gradient-to-b from-transparent to-zinc-900"></div> */}
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious className="hidden md:block lg:block" />
      <CarouselNext className="hidden md:block lg:block" /> */}
    </Carousel>
  )
}
