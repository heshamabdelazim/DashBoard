import { useCallback, useEffect, useState } from 'react';
import './App.css'
import Nav from "./Components/Nav/Nav.jsx";
import Aside from "./Components/Aside/Aside.jsx";
import Intro from "./Components/Overview/Intro.jsx";
import ThreeCards from "./Components/Overview/ThreeCards/ThreeCards.jsx";
import Widgets from "./Components/Overview/Widgets/Widgets.jsx";
import Statistics from "./Components/Overview/Statistics/Statistics.jsx";
import Table from "./Components/Overview/Table.jsx"

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
    <div id="app" className="">
      <div id='navigator'>
        <Nav isAuthenticated={isAuthenticated} iconConfig={iconConfig} handleSidebarToggle={handleSidebarToggle} />
        <main className='flex-1 min-h-[80vh] flex mt-[4rem]'>
          <Aside openSidebar={openSidebar} />
          <div id='content' className='bg-[#e4e8ee] flex-1'>
            <Intro />
            <ThreeCards />
            <Widgets/>
            <Statistics />
             <Table/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

