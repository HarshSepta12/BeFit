import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header'
import Bmi from './Components/BMI/Bmi'
import Blog from './Components/Blog/Blog'
import Diet from './Components/diet/Diet'
import Sign from './Components/signIn/Sign'
import BlogDetails from './Components/blogDetails/BlogDetails'
import AboutUs from './Components/about/AboutUs'
import FAQ from './Components/FAQ/FAQ'
import SignUp from './Components/signup/SignUp'

const App = () => {
  
  return (
    <div>
      
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/bmi' element={<Bmi />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='diet' element={<Diet />}/>
        <Route path='/signin' element={<Sign />}/>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/blogdetails' element={<BlogDetails />}/>
        <Route  path='/FAQ' element={<FAQ />}/>
        <Route path='/about' element={<AboutUs />}/>
      </Routes>
    </div>
  )
}

export default App
