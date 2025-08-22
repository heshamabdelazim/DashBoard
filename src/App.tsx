import { useCallback, useEffect, useState } from 'react';
import './App.css'
import Nav from "./components/Nav/Nav.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Intro from "./components/Intro/Intro.jsx";
import ThreeCards from "./components/Intro/ThreeCards.jsx";

function App() {

  let [openSidebar, setOpenSidebar] = useState(true);
  const handleSidebarToggle = useCallback(() => {
    setOpenSidebar(old => !old);
  }, [openSidebar]);
  useEffect(() => {
    console.log("entire app rendered");
    console.log(openSidebar);
    
  })

  const isAuthenticated: boolean = true;
  const iconConfig = {
    iconSize:18,
    strokeWidth: 1.25
  }
  return (
    <div id="app" className="w-[100vw]">
      <div id='navigator'>
        <Nav isAuthenticated={isAuthenticated} iconConfig={iconConfig} handleSidebarToggle={handleSidebarToggle} />
        <main className='flex-1 min-h-[80vh] flex mt-[4rem]'>
          <Aside openSidebar={openSidebar} />
          <div id='content' className='bg-[#e4e8ee] flex-1'>
            <Intro />
            <ThreeCards />
            <div id='widgets-comps'>
              <div className="one">one</div>
              <div className="one">one</div>
              <div className="one">one</div>
              <div className="one">one</div>
            </div>
            <div id='statistics'>
              <div>one</div>
              <div>one</div>
            </div>
            <h1>one</h1>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

/**
          <div id='content' className='bg-white flex-1 p-3.5 h-[200vh]'>
            <div>
              <h2> icon   DashBoard</h2>
            </div>
            <div id="intro-comps" className='flex flex-wrap gap-4 justify-between'>
              <div className="comp">one</div>
              <div className="comp">one</div>
              <div className="comp">one</div>
            </div>
            <div id='widgets-comps'>
              <div className="one">one</div>
              <div className="one">one</div>
              <div className="one">one</div>
              <div className="one">one</div>
            </div>
            <div id='statistics'>
              <div>one</div>
              <div>one</div>
            </div>
            <h1>one</h1>
          </div> 
 */