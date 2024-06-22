import PropTypes from 'prop-types'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'
import useAuth from '../../../hooks/useAuth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { format } from 'date-fns'

const UserDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = useAuth()
  const [selected, setSelected] = useState(user.role)

  const axiosSecure = useAxiosSecure()
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${user?.email}`,
        role
      )
      return data
    },
    onSuccess: (data) => {
      refetch()
      console.log(data)
      toast.success('User role updated successfully!')
    },
  })

  //   modal handler
  const modalHandler = async (selected) => {
    if (loggedInUser.email === user.email) {
      toast.error('Action Not Allowed')
      return
    }

    const userRole = {
      role: selected,
      status: 'Verified',
    }

    try {
      await mutateAsync(userRole)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  const check = (value) => {
    console.log('clicked', value)
  }

  const handleSelect = (value) => {
    setSelected(value)
    check(value)
  }
  console.log(selected)
  return (
    <TableRow key={user?._id}>
      <TableCell className="hidden sm:table-cell">
        <img
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src="https://ui.shadcn.com/placeholder.svg"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium ">
        {user?.email.split('@')[0]}
      </TableCell>
      <TableCell>
        <DropdownMenu onClick={() => modalHandler(selected)}>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <Badge variant="outline">{user?.role}</Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => handleSelect('admin')}>
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleSelect('guide')}>
              Guide
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleSelect('tourist')}>
              Tourist
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {format(new Date(user?.timestamp), 'yyyy-MM-dd hh:mm aa')}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
}

export default UserDataRow
