import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import FullscreenButton from '@/components/Shared/FullScreen/FullscreenButton'
import { BannerCarossel } from '@/components/Homepage/Carossel/BannerCarossel'
import Navbar from '@/components/Homepage/Navbar/Navbar'
import { Tab } from '@/components/Homepage/TravelGuideSection/Tabs/Tab'
import TourType from '@/components/Homepage/TourType/TourType'
import Stories from '@/components/Homepage/Stories/Stories'
import Footer from '@/components/Shared/Footer/Footer'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full flex-col ">
        {/* Navbar */}

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {/* banner carossel */}
          <BannerCarossel />

          {/* Trusted partner section */}
          <h1 className="text-3xl font-bold text-zinc-800 text-center">
            See Our Growth
          </h1>

          {/* sliding carossel */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mb-8 md:mb-12">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Package Purchaged
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Happy Customers
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Packages
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+53</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* tabs */}
      <div className="mx-4 lg:mx-12">
        <Tab />
      </div>

      {/* tour type */}
      <h1 className="text-3xl font-bold text-zinc-800 text-center mt-10">
        Tour Types
      </h1>
      <div className="flex justify-center px-8 ">
        <TourType />
      </div>

      {/* Tourist story section  */}
      <Stories />

      {/* Footer page */}
      <Footer />

      {/* <SliderCarossel /> */}
      <FullscreenButton />
    </>
  )
}

export default HomeLayout
