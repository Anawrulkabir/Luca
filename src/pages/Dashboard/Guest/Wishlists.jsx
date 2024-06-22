import { MoreHorizontal } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import useAuth from '@/hooks/useAuth'
import useAxiosSecure from '@/hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '@/components/Shared/LoadingSpinner'
import WishlistRow from '@/components/Dashboard/TableRows/WishlistRow'

export default function Wishlists() {
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
    <Card className="m-4 lg:m-10">
      <CardHeader>
        <CardTitle>My Wishlists</CardTitle>
        <CardDescription>View your added wishlists items.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              {/* <TableHead>Status</TableHead> */}
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="table-cell md:hidden">Action</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <WishlistRow
                key={booking._id}
                booking={booking}
                refetch={refetch}
              />
            ))}
            <TableRow>
              <TableCell className=" sm:table-cell">
                <img
                  alt="Product img"
                  className="h-10 w-16 rounded-md object-cover"
                  src="https://ui.shadcn.com/placeholder.svg"
                />
              </TableCell>
              <TableCell className="font-medium hidden md:table-cell">
                Laser Lemonade Machine
              </TableCell>
              {/* <TableCell>
                <Badge variant="outline">In Review</Badge>
              </TableCell> */}
              <TableCell className="hidden md:table-cell">$499.99</TableCell>
              <TableCell className="hidden md:table-cell">
                2023-07-12 10:42 AM
              </TableCell>
              <TableCell>
                {}
                <Button
                  size="sm"
                  variant=""
                  className="bg-blue-600  text-white hover:bg-blue-300 mr-2 "
                >
                  Delete
                </Button>
                <Button
                  size="sm"
                  variant=""
                  className="bg-blue-600  text-white hover:bg-blue-300 "
                >
                  View Details
                </Button>
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
  )
}
