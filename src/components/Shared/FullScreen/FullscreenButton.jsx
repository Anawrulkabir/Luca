import { useState } from 'react'
import toast from 'react-hot-toast'
import { RiFullscreenFill } from 'react-icons/ri'
import { RiFullscreenExitLine } from 'react-icons/ri'

const FullscreenButton = ({ color }) => {
  const [clicked, setClicked] = useState(false)
  const handleFullscreen = () => {
    const docElm = document.documentElement
    if (!document.fullscreenElement) {
      setClicked(true)
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.mozRequestFullScreen) {
        // Firefox
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) {
        // Chrome, Safari, Opera
        docElm.webkitRequestFullScreen()
      } else if (docElm.msRequestFullscreen) {
        // IE/Edge
        docElm.msRequestFullscreen()
      }
    } else {
      setClicked(false)
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari, Opera
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen()
      }
    }
  }

  return (
    <>
      <button
        onClick={handleFullscreen}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          fontSize: '20px',
          backgroundColor: '',
          color: color,
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        {!clicked ? <RiFullscreenFill /> : <RiFullscreenExitLine />}
      </button>
      {/* {!clicked && toast.success('Full Screen for better view')} */}
    </>
  )
}

export default FullscreenButton
