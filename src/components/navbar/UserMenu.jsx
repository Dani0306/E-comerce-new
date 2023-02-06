import { ChevronRight, Edit, Security, Login } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '../../firebase/auth'
import { setShowMenu } from '../../store/actions/userActions'

const UserMenu = ({ user, littleMenu, handleSetLittleMenu }) => {

  const dispatch = useDispatch();

  const handleLittleMenu = () => {
    handleSetLittleMenu("User")
  }

  const showMenu = useSelector(state => state.user.showUserMenu)

  const handleShowMenu = () => {
     dispatch(setShowMenu(!showMenu))
  }
  
  const logout = async () => {
    await signOutUser();
  }

  return (
    <li onClick={handleShowMenu} className='w-full h-[65px] flex items-center justify-between pl-5 pr-8 lg:w-max lg:h-full lg:justify-center lg:pl-0 lg:ml-5 lg:relative'>
      <div className='w-max h-full flex items-center justify-center'>
        <img className='w-[30px] mr-2 h-[30px] lg:w-[40px] lg:h-[40px] object-cover rounded-full lg:mr-2' src={user.photoURL} alt="user profile image" />
        <span className='ml-2'>{user.displayName}</span>
      </div>
      <button onClick={handleLittleMenu} className={`${littleMenu.User ? "rotate-90" : "rotate-0"} transition-all duration-500 lg:hidden`}>
        <ChevronRight className='!w-7 !h-7 text-red-600'/>
      </button>
      <div className={`w-[300px] h-[250px] border-r-2 border-l-2 border-b-2 border-black bg-white flex flex-col items-center absolute top-[8vh] left-auto ${!showMenu && "lg:hidden"}`}>
          <div className='w-full h-[100px] flex items-center justify-center'>
              <img src={user.photoURL} className='w-[50px] h-[50px] rounded-full object-contain' alt="profile image" />
          </div>
          <div className='w-[95%] h-[50px] flex items-center justify-between px-2 border-t border-b border-black'>
            <span>Edit Profile</span>
            <Edit className="!w-5 !h-5 mr-4"/>
          </div>
          <div className='w-[95%] h-[50px] flex items-center justify-between px-2  border-b border-black'>
            <span>Privacy policy</span>
            <Security className="!w-5 !h-5 mr-4"/>
          </div>
          <div onClick={logout} className='w-[95%] h-[50px] flex items-center justify-between px-2  border-black'>
            <span>Logout</span>
            <Login className="!w-5 !h-5 mr-4"/>
          </div>
      </div>
    </li>
  )
}

export default UserMenu