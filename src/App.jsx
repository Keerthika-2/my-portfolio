import { useEffect, useState } from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Skill from "./components/Skills"
import Projects from "./components/Projects"



const App = () => {
  

  return (
   <>
 
  <div className=" bg-slate-900" >

    <Nav/>
    <Banner/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    <Footer/>
  

   </div>



   
   </>

  )
}

export default App
