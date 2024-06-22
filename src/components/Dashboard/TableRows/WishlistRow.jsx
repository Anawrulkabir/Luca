import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
const WishlistRow = ({ booking, refetch }) => {
  const axiosSecure = useAxiosSecure()
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }

  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/booking/${id}`)
      return data
    },
    onSuccess: async (data) => {
      console.log(data)
      refetch()
      toast.success('Booking Canceled')
      //   Change Room booked status back to false
      await axiosSecure.patch(`/room/status/${booking?.roomId}`, {
        status: false,
      })
    },
  })

  //  Handle Delete
  const handleDelete = async (id) => {
    console.log(id)
    try {
      await mutateAsync(id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <tr className="hidden">
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={booking?.image}
                  className="mx-auto object-cover rounded h-10 w-15 "
                />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {booking?.title}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={booking?.guest?.image}
                  className="mx-auto object-cover rounded h-10 w-15 "
                />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {booking?.guest?.name}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">${booking?.price}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {format(new Date(booking?.from), 'P')}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {format(new Date(booking?.to), 'P')}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => setIsOpen(true)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Cancel</span>
          </button>
          {/* Delete Modal */}
          <DeleteModal
            handleDelete={handleDelete}
            closeModal={closeModal}
            isOpen={isOpen}
            id={booking?._id}
          />
        </td>
      </tr>
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
    </>
  )
}

WishlistRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}

export default WishlistRow
