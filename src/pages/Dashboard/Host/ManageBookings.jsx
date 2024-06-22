import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import BookingDataRow from '../../../components/Dashboard/TableRows/BookingDataRow'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
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

const ManageBookings = () => {
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
      const { data } = await axiosSecure.get(`/manage-bookings/${user?.email}`)

      return data
    },
  })

  console.log(bookings)
  if (isLoading) return <LoadingSpinner />
  return (
    <>
      <Helmet>
        <title>Manage Bookings</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8 hidden">
        <div className="">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Package Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Tourist Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Tour Date
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Tour price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Accept
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Reject
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
        <CardHeader className="px-7">
          <CardTitle>Assigned Tours</CardTitle>
          <CardDescription>Recent orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tourist</TableHead>
                <TableHead className="hidden sm:table-cell">Package</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden sm:table-cell">Amount</TableHead>
                <TableHead className=" text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-accent">
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className=" text-xs lg:text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Sale</TableCell>

                <TableCell className="hidden md:table-cell">
                  2023-06-23
                </TableCell>
                <TableCell className="hidden sm:table-cell">$250.00</TableCell>
                <TableCell className="text-right">
                  <Button
                    className="text-xs mr-2 bg-green-700 text-white hover:bg-green-600 rounded-2xl"
                    variant="secondary"
                    size="sm"
                  >
                    Accept
                  </Button>
                  <Button
                    className="text-xs rounded-2xl"
                    variant="destructive"
                    size="sm"
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className=" ">
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className=" text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Sale</TableCell>

                <TableCell className="hidden md:table-cell">
                  2023-06-23
                </TableCell>
                <TableCell className="hidden sm:table-cell">$250.00</TableCell>
                <TableCell className="text-right">
                  <Button
                    className="text-xs mr-2 bg-green-700 text-white hover:bg-green-600 rounded-2xl"
                    variant="secondary"
                    size="sm"
                  >
                    Accept
                  </Button>
                  <Button
                    className="text-xs rounded-2xl"
                    variant="destructive"
                    size="sm"
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className="">
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className=" text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Sale</TableCell>

                <TableCell className="hidden md:table-cell">
                  2023-06-23
                </TableCell>
                <TableCell className="hidden sm:table-cell">$250.00</TableCell>
                <TableCell className="text-right">
                  <Button
                    className="text-xs mr-2 bg-green-700 text-white hover:bg-green-600 rounded-2xl"
                    variant="secondary"
                    size="sm"
                  >
                    Accept
                  </Button>
                  <Button
                    className="text-xs rounded-2xl"
                    variant="destructive"
                    size="sm"
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}

export default ManageBookings
