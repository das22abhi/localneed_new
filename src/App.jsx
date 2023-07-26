import React from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Body1 from './components/Body1';
import Bodyheading from './components/Bodyheading';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Body4 from './components/Body4';
import Body5 from './components/Body5';
import HotDeals from './components/HotDeals';
import Latest from './components/Latest';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Bodyheading />
      <Body1 />
      <Body2 />
      <Latest />
      <HotDeals />
      <Body3 />
      <Body4 />
      <Body5 />
    </>
  )
}

export default App;