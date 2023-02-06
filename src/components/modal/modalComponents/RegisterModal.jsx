import { Facebook, Person } from '@mui/icons-material'
import { signUpWithPopup } from '../../../firebase/auth'

const RegisterModal = () => {


  const handleRegister = async () => {
    await signUpWithPopup();
  }

  return (
    <div className='register-modal w-[90%] h-[70vh] rounded-xl flex flex-col items-center justify-center'>
      <Person className='!w-[65px] !h-[65px]'/>
      <h2 className='font-bold text-4xl my-4 register-title'>Register</h2>
      <span className='text-sm text-black mt-2 mb-10'>
        Your best E-clothes shoop you'll find.
      </span> 
      <div className='w-[72%] lg:w-[350px] flex flex-col items-center justify-between'>
      <button onClick={handleRegister} className='w-full h-[45px] rounded-sm border-2 border-[#4285F4] flex items-center justify-between my-2'>
            <div className='w-[20%] rounded-l-sm bg-white h-full flex items-center justify-center'>
              <img src="/google.png" className='w-[29px] h-[29px] object-contain' alt="" />
            </div>
            <span className='bg-[#4285F4] w-[80%] h-full flex items-center justify-center text-white font-bold'>Sign up with google</span>
        </button>
        <button className='w-full h-[50px] rounded-sm border-2 border-black flex items-center justify-between my-2'>
            <div className='w-[20%] rounded-l-sm bg-white h-full flex items-center justify-center'>
              <img src="/microsoft.png" className='w-[29px] h-[29px] object-contain' alt="" />
            </div>
            <span className='bg-white w-[80%] h-full flex items-center justify-center font-bold'>Sign up with Microsoft</span>
        </button>
        <button className='w-full h-[50px] rounded-sm border-2 border-[#4267B2] flex items-center justify-between my-2'>
            <div className='w-[20%] rounded-l-sm bg-[#4267B2] h-full flex items-center justify-center'>
              <Facebook src="/microsoft.png" className='text-white !w-[29px] !h-[29px]' alt="" />
            </div>
            <span className='bg-[#4267B2] w-[80%] h-full flex items-center justify-center text-white font-bold'>Sign up with Facebook</span>
        </button>
      </div>
    </div> 
  )
}

export default RegisterModal