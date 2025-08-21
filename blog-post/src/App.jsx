
import { useState ,useEffect} from 'react'
import { useDispatch } from "react-redux";
import './App.css'
import authservice from './backend/auth'
import { login, logout } from '../strore/AuthSlice'
import Footer from './Components/Footer'
import Header from './Components/header/Header'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  // useDispatch = hook that gives you dispatch() function → used to fire actions that update Redux state.
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
       if(userData){
        dispatch(login({userData}))
       }else{
        dispatch(logout())
       }
    })
    .finally(()=>setLoading(false))
  }, [dispatch])

  return (
  <div className="flex flex-col min-h-screen">
    <Header/>
    <main className="flex-grow">
      {!loading ? (
        <>
          hii logedin
        </>
      ) : (
        <>
          loo logedout
        </>
      )}
    </main>
    <Footer />
  </div>
);
}

export default App
