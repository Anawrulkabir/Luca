import useAuth from '../../../hooks/useAuth'
import { Helmet } from 'react-helmet-async'
import useRole from '../../../hooks/useRole'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'

const Profile = () => {
  const { user, loading } = useAuth() || {}
  const [role, isLoading] = useRole()

  console.log(user)
  if (isLoading || loading) return <LoadingSpinner />
  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {/* <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full'>
            {role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="bg-white  ">
        <div className="relative flex">
          <div className="h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4  bg-gray-100  lg:block"></div>

          <div className=" rounded-lg container flex flex-col   w-full  px-6  mx-auto lg:absolute lg:inset-x-0">
            <div className="mt-10 lg:mt-20 lg:flex lg:items-center ">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96 border"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                }
                alt=""
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 className=text-white lg:w-72 text-center lg:text-left">
                  Trying to give best experience ever.
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 className=text-gray-400">
                  “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  {user?.displayName}
                </h3>
                <p className="text-gray-600 className=text-gray-300 ">
                  <span className="capitalize">{role}</span> at Luca Inc.
                </p>
              </div>
            </div>
            {/* <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 className=border-gray-700 className=text-gray-200 className=hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                title="right arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 className=border-gray-700 className=text-gray-200 className=hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
