import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { BasicInfoContextProvider } from "./components/context/BasicInfoContext"
import BasicInfo from './components/profile-info/BasicInfo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BasicInfoContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<BasicInfo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </BasicInfoContextProvider>
)
