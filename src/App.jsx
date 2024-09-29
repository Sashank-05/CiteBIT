import React from 'react';
import Navbar from './components/Navbar';
import JsonNavigator from './components/JsonNavigator/JsonNavigator';
import { useMediaQuery } from 'react-responsive'

const App = () => {
  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div className="app min-h-screen overflow-hidden flex flex-col bg-gray-900 p-4 md:p-8 lg:p-12">
      <Navbar />
      <div className="flex-grow p-4 flex flex-col items-center justify-center">
        <JsonNavigator />
      </div>
    </div>
  );
};

export default App;
