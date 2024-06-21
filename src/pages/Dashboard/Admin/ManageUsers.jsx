import { Helmet } from 'react-helmet-async'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useMutation, useQuery } from '@tanstack/react-query'
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
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
import UserDataRow from '../../../components/Dashboard/TableRows/UserDataRow'
import { format } from 'date-fns'
import useAuth from '@/hooks/useAuth'
import { useState } from 'react'
import { toast } from '@/components/ui/use-toast'
const ManageUsers = () => {
  const axiosSecure = useAxiosSecure()

  //   Fetch users Data
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`)
      return data
    },
  })

  console.log(users)
  if (isLoading) return <LoadingSpinner />
  return (
    <>
      <Helmet>
        <title>Manage Users</title>
      </Helmet>
      {/* <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Status
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
                {users.map((user) => (
                  <UserDataRow key={user?._id} user={user} refetch={refetch} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      <Card className="lg:mx-10 lg:my-10 mx-4 my-3 ">
        <CardHeader>
          <CardTitle>Manage Users</CardTitle>
          <CardDescription className="">
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden lg:w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>

                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user) => (
                // <TableRow key={user?._id}>
                //   <TableCell className="hidden sm:table-cell">
                //     <img
                //       alt="Product image"
                //       className="aspect-square rounded-md object-cover"
                //       height="64"
                //       src="https://ui.shadcn.com/placeholder.svg"
                //       width="64"
                //     />
                //   </TableCell>
                //   <TableCell className="font-medium ">
                //     {user?.email.split('@')[0]}
                //   </TableCell>
                //   <TableCell>
                //     <DropdownMenu>
                //       <DropdownMenuTrigger asChild>
                //         <Button
                //           aria-haspopup="true"
                //           size="icon"
                //           variant="ghost"
                //         >
                //           <Badge variant="outline">{user?.role}</Badge>
                //         </Button>
                //       </DropdownMenuTrigger>
                //       <DropdownMenuContent align="end">
                //         <DropdownMenuLabel>Admin</DropdownMenuLabel>
                //         <DropdownMenuItem>Guide</DropdownMenuItem>
                //         <DropdownMenuItem>Torist</DropdownMenuItem>
                //       </DropdownMenuContent>
                //     </DropdownMenu>
                //   </TableCell>

                //   <TableCell className="hidden md:table-cell">
                //     {format(new Date(user?.timestamp), 'yyyy-MM-dd hh:mm aa')}
                //   </TableCell>
                //   <TableCell>
                //     <DropdownMenu>
                //       <DropdownMenuTrigger asChild>
                //         <Button
                //           aria-haspopup="true"
                //           size="icon"
                //           variant="ghost"
                //         >
                //           <MoreHorizontal className="h-4 w-4" />
                //           <span className="sr-only">Toggle menu</span>
                //         </Button>
                //       </DropdownMenuTrigger>
                //       <DropdownMenuContent align="end">
                //         <DropdownMenuItem>Delete</DropdownMenuItem>
                //       </DropdownMenuContent>
                //     </DropdownMenu>
                //   </TableCell>
                // </TableRow>
                <UserDataRow key={user?._id} user={user} refetch={refetch} />
              ))}
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

export default ManageUsers
