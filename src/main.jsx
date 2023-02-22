import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { BasicInfoContextProvider } from "./components/context/BasicInfoContext"
import BasicInfo from './components/profile-info/BasicInfo'
import AboutMe from './components/about-me/AboutMe'
import ContactInfo from './components/contact-info/ContactInfo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BasicInfoContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<BasicInfo />}/>
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<ContactInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </BasicInfoContextProvider>
)
