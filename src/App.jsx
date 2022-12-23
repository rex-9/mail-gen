import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/pages/About';
import Faqs from './components/pages/Faqs';
import Button from './components/elements/Button'
import Header from './components/elements/Header'
import AssessmentQuestions from './components/pages/AssessmentQuestions';
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

function App() {

  return (
    <div className="App">
      <Router>
      <Header/>
          <Routes>
             <Route path='about' element={<About/>}/>
             <Route path='faqs' element={<Faqs/>}/>
             <Route path='dasboard' element={<Dashboard/>}/>
             <Route path='templates' element={<Templates/>}/>
             <Route path='recipients' element={<Recipients/>}/>
             <Route path='analytics' element={<Analytics/>}/>
             <Route path='settings' element={<Settings/>}/>
             <Route path='resources' element={<Resources/>}/>
          </Routes>
    </Router>
    <div className="text-3xl flex flex-col items-center justify-center h-screen w-screen">
      <h1>
      Wondering if you should leave your <br></br> recruiter before they ghost you?
      </h1> 
      <Button className='w-2/6 py-4 m-8'> Take our short assessment</Button>
      </div>
    </div>

  )
}

export default App
