import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import MainSection from './pages/MainSection'
import { useEffect } from 'react'
import { onAuthStateChangedListener } from './firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from './store/actions/userActions'
import ShirtsSection from './pages/ShirtsSection'
import PantsSection from './pages/PantsSection'
import ShoesSection from './pages/ShoesSection'
import CheckOut from './pages/CheckOut'

const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if(user){
        const { displayName, email, photoURL } = user;
        dispatch(login({ displayName, email, photoURL }));

      } else dispatch(login(null))
    })

    return unsubscribe

  }, [dispatch])


  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<MainSection />}/>
        <Route path="/section/shirts" element={<ShirtsSection />}/>
        <Route path="/section/pants" element={<PantsSection />}/>
        <Route path="/section/shoes" element={<ShoesSection />}/>
        <Route path="/section/checkout" element={<CheckOut />}/>
      </Route>
    </Routes>
  )
}

export default App