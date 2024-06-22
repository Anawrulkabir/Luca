import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import BookingDataRow from '../../../components/Dashboard/TableRows/BookingDataRow'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const MyBookings = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  //   Fetch Bookings Data
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['my-bookings', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-bookings/${user?.email}`)

      return data
    },
  })

  console.log(bookings)
  if (isLoading) return <LoadingSpinner />
  return (
    <>
      <Helmet>
        <title>My Bookings</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8 hidden">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Info
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table Row Data */}

                  {bookings.map((booking) => (
                    <BookingDataRow
                      key={booking._id}
                      booking={booking}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Card className="m-4 lg:m-10">
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
          <CardDescription>Manage your booking history.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">img</span>
                </TableHead>
                <TableHead>Guide</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>

                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <BookingDataRow
                  key={booking._id}
                  booking={booking}
                  refetch={refetch}
                />
              ))}
              <TableRow>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product img"
                    className="h-10 w-16 rounded-md object-cover"
                    src="https://ui.shadcn.com/placeholder.svg"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="outline">In Review</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">$499.99</TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
                <TableCell>
                  {}
                  <Button
                    size="sm"
                    variant=""
                    className="bg-blue-600  text-white hover:bg-blue-300 mr-2 w-full"
                  >
                    Cencel
                  </Button>
                  {/* <Button
                    size="sm"
                    variant=""
                    className="bg-blue-600  text-white hover:bg-blue-300 "
                  >
                    Pay
                  </Button> */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product img"
                    className="h-10 w-16 rounded-md object-cover"
                    src="https://ui.shadcn.com/placeholder.svg"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Accepted</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">$499.99</TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
                <TableCell>
                  {}
                  {/* <Button
                    size="sm"
                    variant=""
                    className="bg-blue-600  text-white hover:bg-blue-300"
                  >
                    Cencel
                  </Button> */}
                  <Button
                    size="sm"
                    variant=""
                    className="bg-blue-600  text-white hover:bg-blue-300 w-full"
                  >
                    Pay
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product img"
                    className="h-10 w-16 rounded-md object-cover"
                    src="https://ui.shadcn.com/placeholder.svg"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Rejected</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">$499.99</TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
                <TableCell>
                  {}
                  {/* <Button
                    size="sm"
                    variant=""
                    className="bg-blue-600  text-white hover:bg-blue-300"
                  >
                    Cencel
                  </Button>
                  <Button
                    size="sm"
                    variant=""
                    className="bg-blue-600  text-white hover:bg-blue-300"
                  >
                    Pay
                  </Button> */}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default MyBookings
