import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS directly
import { useEffect, useRef, useState } from 'react';

import {                                                                                                                      
  Chart as ChartJS,            
  CategoryScale,               
  LinearScale,                 
  BarElement,                
  Title,                     
  Tooltip,                    
  Legend,                     
} from 'chart.js';                                                                             

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Startup() {
  // Ensure Bootstrap JavaScript works
  useEffect(() => {
    // Initialize any Bootstrap components that need JavaScript here if needed
    // No need to use require - we imported Bootstrap JS above
  }, []);

  // State for managing visible section
  const [visibleSection, setVisibleSection] = useState("startup");

  // Scroll references
  const startupRef = useRef(null);
  const entrepreneurshipRef = useRef(null);
  const mouRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref, section) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setVisibleSection(section); 
  };

  return (
    <div style={{ backgroundColor: '#f5f9fd' }}>
      {/* Header Section */}
      <header className="bg-primary py-3" style={{ background: 'linear-gradient(135deg, #0d47a1, #2196f3)' }}>
        <div className="container-fluid">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="rounded-circle p-2 me-2" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <img src="https://t4.ftcdn.net/jpg/04/51/74/43/240_F_451744391_932DU0eXgGbpDZhcemuTjz1jTlqiCuIF.jpg" alt="University Logo" width="60" className="img-fluid" />
              </div>
              <div className="ms-2">
                <h1 className="mb-0" style={{ fontWeight: '700', letterSpacing: '0.5px' }}>HARMONIA UNIVERSITY</h1>
                <p className="lead mb-0" style={{ fontStyle: 'italic', opacity: '0.9' }}>Innovate · Create · Transform</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-3 mt-md-0">
              <div className="position-relative">
                <input type="text" placeholder="Search..." className="form-control ps-4 pe-5" 
                       style={{ width: '220px', borderRadius: '50px', background: 'rgba(255, 255, 255, 0.2)', 
                                border: 'none', color: 'white' }} />
                <i className="bi bi-search position-absolute" 
                   style={{ right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'white' }}></i>
              </div>
              <a href="#" className="btn ms-2" style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'white', 
                                                        borderRadius: '50px', padding: '8px 16px' }}>
                <i className="bi bi-person me-1"></i> Login
              </a>
            </div>
          </div>
          
          <nav className="edu-nav mt-3 pb-1">
            <ul className="nav justify-content-center justify-content-md-start gap-1">
              <li className="nav-item">
                <a href="/" className="nav-link text-white px-3 py-2 d-flex align-items-center"
                   style={{ borderRadius: '5px', transition: 'all 0.2s ease' }}>
                  <i className="bi bi-house-door me-2"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/innovhome" className="nav-link text-white px-3 py-2 d-flex align-items-center"
                   style={{ borderRadius: '5px', transition: 'all 0.2s ease' }}>
                  <i className="bi bi-journal-text me-2"></i> Research & Publications
                </a>
              </li>
              <li className="nav-item">
                <a href="/startup" className="nav-link text-white px-3 py-2 d-flex align-items-center"
                   style={{ 
                     borderRadius: '5px', 
                     background: 'rgba(255, 255, 255, 0.2)', 
                     transition: 'all 0.2s ease',
                     fontWeight: '600' 
                   }}>
                  <i className="bi bi-rocket-takeoff me-2"></i> Startup & Innovation
                </a>
              </li>
              <li className="nav-item">
                <a href="/collab" className="nav-link text-white px-3 py-2 d-flex align-items-center"
                   style={{ borderRadius: '5px', transition: 'all 0.2s ease' }}>
                  <i className="bi bi-people me-2"></i> Collaboration & Partnership
                </a>
              </li>
              <li className="nav-item">
                <a href="/awardpage" className="nav-link text-white px-3 py-2 d-flex align-items-center"
                   style={{ borderRadius: '5px', transition: 'all 0.2s ease' }}>
                  <i className="bi bi-trophy me-2"></i> Excellence & Awards
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      {/* Custom CSS for navbar hover effects */}
      <style jsx>{`
        .edu-nav .nav-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .edu-nav .nav-link {
          position: relative;
        }
        .edu-nav .nav-link:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .edu-nav .nav-link:hover:after {
          width: 80%;
        }
      `}</style>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="card-header py-3" style={{ background: 'linear-gradient(135deg, #0d47a1, #2196f3)', color: 'white', borderBottom: 'none' }}>
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-grid-1x2-fill me-2"></i>
                  Navigation
                </h5>
              </div>
              <div className="list-group list-group-flush">
                <a href="#" className={`list-group-item list-group-item-action border-0 py-3 ${visibleSection === "startup" ? "active" : ""}`} 
                   onClick={() => scrollToSection(startupRef, "startup")}
                   style={{ 
                     background: visibleSection === "startup" ? 'rgba(33, 150, 243, 0.1)' : 'transparent',
                     borderLeft: visibleSection === "startup" ? '4px solid #2196f3' : '4px solid transparent'
                   }}>
                  <div className="d-flex align-items-center">
                    <div className="icon-circle me-3 d-flex align-items-center justify-content-center" 
                         style={{ 
                           width: '40px', 
                           height: '40px', 
                           borderRadius: '50%', 
                           background: visibleSection === "startup" ? '#2196f3' : '#eef5ff',
                           color: visibleSection === "startup" ? 'white' : '#2196f3'
                         }}>
                      <i className="bi bi-rocket-takeoff"></i>
                    </div>
                    <div>
                      <h6 className="mb-0" style={{ fontWeight: visibleSection === "startup" ? '600' : '500' }}>Startup Park</h6>
                      <small className="text-muted">Innovation Hub</small>
                    </div>
                  </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action border-0 py-3 ${visibleSection === "entrepreneurship" ? "active" : ""}`} 
                   onClick={() => scrollToSection(entrepreneurshipRef, "entrepreneurship")}
                   style={{ 
                     background: visibleSection === "entrepreneurship" ? 'rgba(33, 150, 243, 0.1)' : 'transparent',
                     borderLeft: visibleSection === "entrepreneurship" ? '4px solid #2196f3' : '4px solid transparent'
                   }}>
                  <div className="d-flex align-items-center">
                    <div className="icon-circle me-3 d-flex align-items-center justify-content-center" 
                         style={{ 
                           width: '40px', 
                           height: '40px', 
                           borderRadius: '50%', 
                           background: visibleSection === "entrepreneurship" ? '#2196f3' : '#eef5ff',
                           color: visibleSection === "entrepreneurship" ? 'white' : '#2196f3'
                         }}>
                      <i className="bi bi-lightbulb"></i>
                    </div>
                    <div>
                      <h6 className="mb-0" style={{ fontWeight: visibleSection === "entrepreneurship" ? '600' : '500' }}>Entrepreneurship</h6>
                      <small className="text-muted">Program Overview</small>
                    </div>
                  </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action border-0 py-3 ${visibleSection === "mou" ? "active" : ""}`} 
                   onClick={() => scrollToSection(mouRef, "mou")}
                   style={{ 
                     background: visibleSection === "mou" ? 'rgba(33, 150, 243, 0.1)' : 'transparent',
                     borderLeft: visibleSection === "mou" ? '4px solid #2196f3' : '4px solid transparent'
                   }}>
                  <div className="d-flex align-items-center">
                    <div className="icon-circle me-3 d-flex align-items-center justify-content-center" 
                         style={{ 
                           width: '40px', 
                           height: '40px', 
                           borderRadius: '50%', 
                           background: visibleSection === "mou" ? '#2196f3' : '#eef5ff',
                           color: visibleSection === "mou" ? 'white' : '#2196f3'
                         }}>
                      <i className="bi bi-building"></i>
                    </div>
                    <div>
                      <h6 className="mb-0" style={{ fontWeight: visibleSection === "mou" ? '600' : '500' }}>MOU's & Collaborations</h6>
                      <small className="text-muted">Strategic Partnerships</small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="card mt-4 border-0 shadow-sm overflow-hidden">
              <div className="card-header py-3" style={{ background: 'linear-gradient(135deg, #0d47a1, #2196f3)', color: 'white', borderBottom: 'none' }}>
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-calendar-event me-2"></i>
                  Upcoming Events
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-3 pb-3 border-bottom">
                    <div className="d-flex">
                      <div className="event-date me-3 text-center" style={{ 
                        minWidth: '50px', 
                        padding: '8px', 
                        background: '#eef5ff', 
                        borderRadius: '8px', 
                        color: '#2196f3' 
                      }}>
                        <div style={{ fontSize: '20px', fontWeight: '700' }}>15</div>
                        <div style={{ fontSize: '14px' }}>MAY</div>
                      </div>
                      <div>
                        <h6 className="mb-1">Entrepreneurship Summit</h6>
                        <p className="mb-0 small text-muted">
                          <i className="bi bi-geo-alt me-1"></i> Main Auditorium
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3 pb-3 border-bottom">
                    <div className="d-flex">
                      <div className="event-date me-3 text-center" style={{ 
                        minWidth: '50px', 
                        padding: '8px', 
                        background: '#eef5ff', 
                        borderRadius: '8px', 
                        color: '#2196f3' 
                      }}>
                        <div style={{ fontSize: '20px', fontWeight: '700' }}>10</div>
                        <div style={{ fontSize: '14px' }}>JUN</div>
                      </div>
                      <div>
                        <h6 className="mb-1">Innovation Challenge Finals</h6>
                        <p className="mb-0 small text-muted">
                          <i className="bi bi-geo-alt me-1"></i> Innovation Hub
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div className="event-date me-3 text-center" style={{ 
                        minWidth: '50px', 
                        padding: '8px', 
                        background: '#eef5ff', 
                        borderRadius: '8px', 
                        color: '#2196f3' 
                      }}>
                        <div style={{ fontSize: '20px', fontWeight: '700' }}>22</div>
                        <div style={{ fontSize: '14px' }}>JUL</div>
                      </div>
                      <div>
                        <h6 className="mb-1">Startup Pitch Day</h6>
                        <p className="mb-0 small text-muted">
                          <i className="bi bi-geo-alt me-1"></i> Conference Center
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="text-center mt-3">
                  <a href="#" className="btn btn-sm" style={{ background: '#eef5ff', color: '#2196f3' }}>
                    View All Events <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-9">
            {visibleSection === "startup" && (
              <div className="card shadow-sm" ref={startupRef}>
                <div className="card-header bg-primary text-white">
                  <h2 className="mb-0">Startup Park</h2>
                </div>
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <img className="img-fluid rounded mb-3" src="https://deccancollege.ac.in/wp-content/uploads/2023/10/41.jpg" alt="Startup Park" />
                      <p className="lead">Our Startup Park serves as a vibrant innovation hub where students transform ideas into successful ventures with comprehensive support and resources.</p>
                    </div>
                  </div>
                  
                  <h3 className="mb-3">Objectives</h3>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="card-body bg-light rounded">
                        <ol style={{ lineHeight: '1.6' }}>
                          <li>Skill and train students, faculty, innovators, and entrepreneurs to embrace entrepreneurship and startups through dedicated programs.</li>
                          <li>Identify and develop ideas, proof of concepts (POCs), prototypes, and translate them into product development and minimum viable product (MVP) stages using technology readiness level (TRL) activities.</li>
                          <li>Establish world-class incubation centers with support from government agencies like DST, MSME, and NITI Aayog.</li>
                          <li>Bridge the gap between research and commercialization, encouraging faculty members to shift their focus from research publications to practical applications.</li>
                          <li>Empower startups with business, technology, and marketing support.</li>
                          <li>Strengthen partnerships with various stakeholders from industry, research and development, financial institutions, and academia, promoting synergy and mutual support.</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="mb-3">Innovation Partners</h3>
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead className="table-primary">
                        <tr>
                          <th width="10%">Sl. No</th>
                          <th>Partner Name</th>
                          <th width="30%">Focus Area</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Build Club - IITM Research Park</td>
                          <td>Hardware Prototyping</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Robo Club</td>
                          <td>Robotics & Automation</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>ICT Academy</td>
                          <td>Digital Skills</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>SIEMENS</td>
                          <td>Industrial Automation</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>YI-Youth Innovation Club</td>
                          <td>Youth Entrepreneurship</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {visibleSection === "entrepreneurship" && (
              <div className="card shadow-sm" ref={entrepreneurshipRef}>
                <div className="card-header bg-primary text-white">
                  <h2 className="mb-0">Entrepreneurship Programs</h2>
                </div>
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <img className="img-fluid rounded mb-3" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Entrepreneurship Programs" />
                      <p className="lead">Our comprehensive entrepreneurship programs equip students with the skills, mindset, and resources needed to build successful ventures in today's competitive business landscape.</p>
                    </div>
                  </div>
                  
                  <div className="row mb-4">
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-primary">
                        <div className="card-header bg-primary text-white">
                          <h4 className="mb-0">Pre-Incubation</h4>
                        </div>
                        <div className="card-body">
                          <ul>
                            <li>Idea validation workshops</li>
                            <li>Market research training</li>
                            <li>Business model canvas development</li>
                            <li>Basic prototyping support</li>
                            <li>Pitch deck preparation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-success">
                        <div className="card-header bg-success text-white">
                          <h4 className="mb-0">Incubation</h4>
                        </div>
                        <div className="card-body">
                          <ul>
                            <li>Dedicated workspace</li>
                            <li>Mentorship from industry experts</li>
                            <li>Technical resource access</li>
                            <li>Legal and IP support</li>
                            <li>Seed funding opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-info">
                        <div className="card-header bg-info text-white">
                          <h4 className="mb-0">Accelerator</h4>
                        </div>
                        <div className="card-body">
                          <ul>
                            <li>Scaling strategy development</li>
                            <li>Investor networking</li>
                            <li>Advanced business training</li>
                            <li>Market access initiatives</li>
                            <li>Global exposure opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="mb-3">Success Metrics (2023)</h3>
                  <div className="row">
                    <div className="col-md-3 mb-4 text-center">
                      <div className="card bg-light">
                        <div className="card-body">
                          <h1 className="display-4 text-primary">48</h1>
                          <p className="mb-0">Startups Incubated</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4 text-center">
                      <div className="card bg-light">
                        <div className="card-body">
                          <h1 className="display-4 text-success">$2.4M</h1>
                          <p className="mb-0">Funding Raised</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4 text-center">
                      <div className="card bg-light">
                        <div className="card-body">
                          <h1 className="display-4 text-info">120+</h1>
                          <p className="mb-0">Jobs Created</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4 text-center">
                      <div className="card bg-light">
                        <div className="card-body">
                          <h1 className="display-4 text-warning">12</h1>
                          <p className="mb-0">Patents Filed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {visibleSection === "mou" && (
              <div className="card shadow-sm" ref={mouRef}>
                <div className="card-header bg-primary text-white">
                  <h2 className="mb-0">MOU's & Collaborations</h2>
                </div>
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <img className="img-fluid rounded mb-3" src="https://deccancollege.ac.in/wp-content/uploads/2023/10/43.jpg" alt="MOU and Collaborations" />
                      <p className="lead">Harmonia University is committed to fostering global partnerships that enhance educational, research, and cultural exchange opportunities for our community.</p>
                    </div>
                  </div>
                  
                  <div className="alert alert-info">
                    <p className="mb-0">Our strategic alliances with leading universities, research institutions, and industry partners worldwide enable us to offer our students and faculty unparalleled opportunities for growth, innovation, and collaboration.</p>
                  </div>
                  
                  <h3 className="mb-3">Active Partnerships</h3>
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead className="table-primary">
                        <tr>
                          <th width="10%">Sl. No.</th>
                          <th>Partner Organization</th>
                          <th>Domain</th>
                          <th width="20%">Established</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Futurense Technologies</td>
                          <td>Innovation, Entrepreneurship and Startups</td>
                          <td>January 2022</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>T-Hub</td>
                          <td>Electronics & Communication Engineering</td>
                          <td>March 2022</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Cotler Impact</td>
                          <td>Information Technology</td>
                          <td>September 2022</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>MIT Media Lab</td>
                          <td>Digital Media Innovation</td>
                          <td>February 2023</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Nordic Innovation Hub</td>
                          <td>Sustainable Technologies</td>
                          <td>August 2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h3 className="mt-4 mb-3">Partnership Benefits</h3>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">For Students</h5>
                          <ul>
                            <li>Exchange programs and internships</li>
                            <li>Access to global research facilities</li>
                            <li>Dual degree opportunities</li>
                            <li>Industry-specific training and certification</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">For Faculty</h5>
                          <ul>
                            <li>Collaborative research initiatives</li>
                            <li>Joint publication opportunities</li>
                            <li>Visiting professor programs</li>
                            <li>Access to specialized laboratories</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-5" style={{ background: 'linear-gradient(135deg, #0d47a1, #2196f3)' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle p-2 me-3" style={{ background: 'rgba(255, 255, 255, 0.2)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-buildings text-white" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4 className="text-white mb-0" style={{ fontWeight: '700' }}>Harmonia University</h4>
                  <p className="text-white-50 mb-0" style={{ fontStyle: 'italic' }}>Innovate · Create · Transform</p>
                </div>
              </div>
              <p className="text-white-50 mb-3">
                Harmonia University is dedicated to fostering innovation, entrepreneurship, and impactful research through collaboration and academic excellence.
              </p>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-sm text-white" style={{ background: 'rgba(255, 255, 255, 0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="btn btn-sm text-white" style={{ background: 'rgba(255, 255, 255, 0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="btn btn-sm text-white" style={{ background: 'rgba(255, 255, 255, 0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="btn btn-sm text-white" style={{ background: 'rgba(255, 255, 255, 0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="btn btn-sm text-white" style={{ background: 'rgba(255, 255, 255, 0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-white mb-4 position-relative pb-2" style={{ fontWeight: '600' }}>
                <span className="position-absolute" style={{ bottom: '0', left: '0', width: '50px', height: '3px', background: 'rgba(255, 255, 255, 0.5)' }}></span>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i> About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i> Academics
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i> Research
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i> Campus Life
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i> Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-white mb-4 position-relative pb-2" style={{ fontWeight: '600' }}>
                <span className="position-absolute" style={{ bottom: '0', left: '0', width: '50px', height: '3px', background: 'rgba(255, 255, 255, 0.5)' }}></span>
                Contact Information
              </h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex">
                  <i className="bi bi-geo-alt-fill text-white-50 me-3" style={{ fontSize: '20px' }}></i>
                  <span className="text-white-50">123 University Avenue, Innovation District, Harmonia 54321</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-telephone-fill text-white-50 me-3" style={{ fontSize: '20px' }}></i>
                  <span className="text-white-50">+1 (555) 123-4567</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-envelope-fill text-white-50 me-3" style={{ fontSize: '20px' }}></i>
                  <span className="text-white-50">info@harmonia.edu</span>
                </li>
                <li className="d-flex">
                  <i className="bi bi-clock-fill text-white-50 me-3" style={{ fontSize: '20px' }}></i>
                  <span className="text-white-50">Monday - Friday: 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4 position-relative pb-2" style={{ fontWeight: '600' }}>
                <span className="position-absolute" style={{ bottom: '0', left: '0', width: '50px', height: '3px', background: 'rgba(255, 255, 255, 0.5)' }}></span>
                Stay Connected
              </h5>
              <p className="text-white-50 mb-3">Subscribe to our newsletter for updates on events, research breakthroughs, and campus news.</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your email address" style={{ background: 'rgba(255, 255, 255, 0.15)', border: 'none', color: 'white' }} />
                <button className="btn text-primary px-3" style={{ background: 'white' }}>
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
              <div className="d-flex align-items-center">
                <div className="badge me-2" style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'white', padding: '8px 12px' }}>
                  <i className="bi bi-star me-1"></i> Ranked #5
                </div>
                <div className="badge" style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'white', padding: '8px 12px' }}>
                  <i className="bi bi-award me-1"></i> Excellence in Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                <p className="text-white-50 mb-0">&copy; 2024 Harmonia University. All rights reserved.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <a href="#" className="text-white-50 text-decoration-none me-3">Privacy Policy</a>
                <a href="#" className="text-white-50 text-decoration-none me-3">Terms of Service</a>
                <a href="#" className="text-white-50 text-decoration-none">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
