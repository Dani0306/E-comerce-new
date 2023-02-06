import { Close } from '@mui/icons-material'
import { useRef } from 'react'

const ModalReusable = ({ children, root }) => {

    const ref = useRef(null);

    const callback = e => {
        root.unmount();
        document.getElementById("modal").remove();
    }

    const handleClick = () => {
        ref.current.classList.add("fadeOut")
        ref.current.addEventListener("animationend", callback, { once: true })
    }

  return (
    <div ref={ref} className='w-full h-full flex items-center justify-center'>
      <div className='modalView w-full h-full flex items-center justify-center'>
        <button onClick={handleClick} className='absolute right-3 top-5 lg:right-20 lg:top-4'>
          <Close className='text-white lg:text-black !w-8 !h-8'/>
        </button>
        { children }
      </div>
    </div>
  )
}

export default ModalReusable