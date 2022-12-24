import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/pages/Welcome';
import Dashboard from './components/pages/Dashboard';
import Templates from './components/pages/Templates';
import Recipients from './components/pages/Recipients';
import Analytics from './components/pages/Analytics';
import Settings from './components/pages/Settings';
import Resources from './components/pages/Resources';
import About from './components/pages/About';
import Faqs from './components/pages/Faqs';
import AssessmentQuestions from './components/pages/AssessmentQuestions';
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

const App = () => {

  return (
    <section className="App">
      <Router>
        <Routes>
          <Route path='about' element={<About />} />
          <Route path='faqs' element={<Faqs />} />
          <Route path='/' element={<Welcome />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='templates' element={<Templates />} />
          <Route path='recipients' element={<Recipients />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='settings' element={<Settings />} />
          <Route path='resources' element={<Resources />} />
          <Route path='aq' element={<AssessmentQuestions />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </Router>
    </section>
  )
}

export default App
