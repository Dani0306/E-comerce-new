import { Login, Security, Edit } from '@mui/icons-material'
import { signOutUser } from '../../firebase/auth'
import { useNavigate } from 'react-router-dom'

const MiniMenu = ({ littleMenu, item1, item2, item3, user, title }) => {

  const navigate = useNavigate();
  
  const logout = async () => {
    if(user && title === "User") await signOutUser(); 
  }

  const handleNavigate = (item) => {
    if(title === "Clothes") {
      if(item === "T-Shirts") navigate("/section/shirts")
      else navigate("/section/" + item.toLowerCase());
    }
    return;
  }


  return (
    <div className={`lg:hidden w-full ${littleMenu[title] ? "h-[120px] opacity-100" : "h-0 opacity-0"} transition-all duration-500 flex flex-col lg:hidden`}>
          <div onClick={() => handleNavigate(item1)} className={`${user && "ml-[-20px]"} nav-sublink`}>
            {user &&  <Edit className="!w-5 !h-5 mr-4"/>}
            <span>{item1}</span>
          </div>
          <div onClick={() => handleNavigate(item2)} className={`${user && "ml-[-20px]"} nav-sublink`}>
            {user &&  <Security className="!w-5 !h-5 mr-4"/>}
            <span>{item2}</span>
          </div>
          <div onClick={() => handleNavigate(item3)} className={`${user && "ml-[-20px]"} nav-sublink`}>
            {user &&  <Login className="!w-5 !h-5 mr-4"/>}
            <span onClick={logout}>{item3}</span>
          </div>
    </div>
  )
}

export default MiniMenu