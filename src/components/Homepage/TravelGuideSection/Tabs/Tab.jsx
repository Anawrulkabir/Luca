import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Overview } from './Overview'
import { Package } from './Package'
import { TourGuide } from './TourGuide'

export function Tab() {
  return (
    <Tabs defaultValue="overview" className="">
      <TabsList className="grid  grid-cols-3 w-full lg:w-[400px] lg:mx-auto">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="packages">Packages</TabsTrigger>
        <TabsTrigger value="guides">Our Guides</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="">
        <Overview />
      </TabsContent>
      <TabsContent value="packages" className="">
        <Package />
      </TabsContent>
      <TabsContent value="guides" className="">
        <TourGuide />
      </TabsContent>
    </Tabs>
  )
}
