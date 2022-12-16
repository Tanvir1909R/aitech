import React, { useRef } from 'react'
import Fashion from './components/fashion/Fashion'
import Featured from './components/featured/Featured'
import Feedback from './components/feedback/Feedback'
import Follower from './components/follower/Follower'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Service from './components/service/Service'

const App = () => {
  const body = useRef(null)
  const layout = useRef(null)
  const handleMenu = ()=>{
    body.current.style.cssText = `
    transform: translateX(300px);
    transition: transform .4s ease, right .4s ease;
    `
    layout.current.classList.add('layout_active')
  }
  const handleLayout = ()=>{
    body.current.style.cssText = `
    transform: translateX(0px);
    transition: transform .4s ease, left .4s ease;
    `
    layout.current.classList.remove('layout_active')
  }
  return (
    <div ref={body}>
      <header>
        <div className="Container">
        <Navbar handleMenu={handleMenu} layout={layout} handleLayout={handleLayout}/>
        </div>
      </header>
      <main>
        <Hero/>
        <Service/>
        <Fashion/>
        <Featured/>
        <Feedback/>
        <Follower/>
      </main>
      <footer>
        <Footer/>
        <div className='p-5 text-center bg-base-200 border-t'>
          <p>Copyright © 2022 Agency webstore | Made by AITECH</p>
        </div>
      </footer>
    </div>
  )
}

export default App