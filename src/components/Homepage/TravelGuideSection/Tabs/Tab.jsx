import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Overview } from './Overview'
import { Package } from './Package'
import { TourGuide } from './TourGuide'

export function Tab() {
  return (
    <div className="">
      <Tabs defaultValue="overview" className="">
        <TabsList className="grid  grid-cols-3 w-[350px] lg:w-[400px] lg:mx-auto mx-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="packages">Packages</TabsTrigger>
          <TabsTrigger value="guides">Our Guides</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mx-4">
          <Overview />
        </TabsContent>
        <TabsContent value="packages" className="mx-4">
          <Package />
        </TabsContent>
        <TabsContent value="guides" className="mx-4">
          <TourGuide />
        </TabsContent>
      </Tabs>
    </div>
  )
}
