import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import pages
import Home from './new.jsx'
import Startup from './startup.jsx'
import Led from './led.jsx'
import Innov from './innov.jsx'
import InnovHome from './innovhome.jsx'
import Flip from './flip.jsx'
import Faculty from './faculty.jsx'
import FacLogin from './facloogin.jsx'
import StudentLogin from './loogin.jsx'
import Collab from './collab.jsx'
import Badge from './badge.jsx'
import Approval from './approval.jsx'
import AwardPage from './awardpage.jsx'
import StudentPage from './2stud.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/led" element={<Led />} />
        <Route path="/innov" element={<Innov />} />
        <Route path="/innovhome" element={<InnovHome />} />
        <Route path="/flip" element={<Flip />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/facloogin" element={<FacLogin />} />
        <Route path="/loogin" element={<StudentLogin />} />
        <Route path="/collab" element={<Collab />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="/awardpage" element={<AwardPage />} />
        <Route path="/2stud" element={<StudentPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
