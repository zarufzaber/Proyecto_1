import React from 'react'
import  About  from './components/about/About'
import ScrollToTop from "react-scroll-to-top";
import  {Home } from './components/Home/Home'
import  Navbar  from './components/Navbar/Navbar'
import { Service } from './components/service/Service'
import Subscription from './components/subscriptions/Subscription'
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Subscription />
      <Footer />
      <ScrollToTop smooth
        height='20'
        width='20'
        style={{ borderRadius: "90px" }} />
    </>

  )
}

export default App