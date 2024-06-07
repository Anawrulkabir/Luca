import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import FullscreenButton from '../components/Shared/FullScreen/FullscreenButton'
const Main = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <FullscreenButton color={'#000'} />
      <Footer />
    </div>
  )
}

export default Main
