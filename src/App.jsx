import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Skill from "./components/Skills"


const App = () => {
  return (
   <>
   <div className=" bg-slate-900" >

    <Nav/>
    <Banner/>
    <About/>
    <Skill/>
    <Contact/>
    <Footer/>

   </div>
   
   </>
  )
}

export default App
