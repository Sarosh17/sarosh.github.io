import React from 'react'

import {Blog,Features,Footer,WhatGPT3,Possib,Header} from './containers';
import {Cta,Navbar,Brand} from './components';
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <WhatGPT3/>
        <Features/>
        <Possib/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App