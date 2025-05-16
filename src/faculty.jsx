import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles globally
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS directly
import { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './assets/theme.css'; // Import educational theme

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() {
  const location = useLocation();
  const username = location.state?.username || "Faculty Member";
  const [activeTab, setActiveTab] = useState('profile');
  
  // Ensure Bootstrap JavaScript works
  useEffect(() => {
    // Initialize any Bootstrap components that need JavaScript here if needed
    // No need to use require - we imported Bootstrap JS above
  }, []);

  // Chart data
  const data = {
    labels: ['Publications', 'Conferences', 'Awards'],
    datasets: [
      {
        label: 'Count',
        data: [32, 18, 8],
        backgroundColor: ['var(--edu-primary)', 'var(--edu-secondary)', 'var(--edu-accent)'],
        borderColor: ['var(--edu-primary-dark)', 'var(--edu-secondary-dark)', 'var(--edu-accent-dark)'],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { 
        display: false,
        labels: {
          font: {
            family: 'var(--edu-font-primary)',
          }
        }
      },
      title: { display: false },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        titleFont: {
          family: 'var(--edu-font-primary)',
          size: 14
        },
        bodyFont: {
          family: 'var(--edu-font-primary)',
          size: 13
        }
      },
    },
    scales: {
      y: { 
        beginAtZero: true, 
        ticks: { 
          stepSize: 5,
          font: {
            family: 'var(--edu-font-primary)',
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        ticks: {
          font: {
            family: 'var(--edu-font-primary)',
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    },
  };

  // References for scrolling
  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const qualificationRef = useRef(null);
  const personalInfoRef = useRef(null);
  const honoursRef = useRef(null);
  const researchRef = useRef(null);
  const validateRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Set active tab based on the scrolled section
    if (ref === profileRef) setActiveTab('profile');
    else if (ref === experienceRef) setActiveTab('experience');
    else if (ref === qualificationRef) setActiveTab('qualification');
    else if (ref === personalInfoRef) setActiveTab('personal');
    else if (ref === honoursRef) setActiveTab('honours');
    else if (ref === researchRef) setActiveTab('research');
  };

  return (
    <div style={{ 
      background: 'var(--edu-neutral-200)',
      minHeight: '100vh',
      fontFamily: 'var(--edu-font-primary)'
    }}>
      {/* Header Section with Gradient */}
      <header style={{ 
        background: 'linear-gradient(135deg, var(--edu-primary), var(--edu-secondary))',
        color: 'white',
        padding: '1.5rem 0',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem'
      }}>
        <div className="container-fluid">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="rounded-circle bg-white p-2 me-3" style={{ width: '60px', height: '60px' }}>
                <img src="/cologo.jpg" alt="University Logo" className="img-fluid rounded-circle" />
              </div>
              <div>
                <h1 className="mb-0" style={{ fontWeight: '600' }}>UNIVERSITY NAME</h1>
                <p className="lead mb-0">Inspiring minds, shaping futures</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-3 mt-md-0">
              <div className="position-relative">
                <input type="text" placeholder="Search" className="form-control" 
                  style={{ 
                    width: '200px',
                    borderRadius: '50px',
                    padding: '0.5rem 1rem',
                    paddingRight: '2.5rem',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <i className="fas fa-search position-absolute" 
                  style={{ 
                    right: '15px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    color: 'var(--edu-primary)'
                  }}></i>
              </div>
            </div>
          </div>
          <nav className="nav mt-3">
            <Link to="/innovhome" className="nav-link text-white me-3">
              <i className="fas fa-flask me-1"></i> Research & Publications
            </Link>
            <Link to="/startup" className="nav-link text-white me-3">
              <i className="fas fa-rocket me-1"></i> Startup and Innovation
            </Link>
            <Link to="/collab" className="nav-link text-white me-3">
              <i className="fas fa-handshake me-1"></i> Collaboration & Partnership
            </Link>
            <Link to="/awardpage" className="nav-link text-white">
              <i className="fas fa-trophy me-1"></i> Excellence & Awards
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="container mt-4">
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow-sm border-0" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-header" style={{ 
                background: 'var(--edu-primary)',
                color: 'white',
                border: 'none',
                fontWeight: '600',
                padding: '1rem'
              }}>
                Faculty Dashboard
              </div>
              <div className="list-group list-group-flush">
                <a href="#" 
                  className={`list-group-item list-group-item-action ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(profileRef); }}
                  style={{
                    color: activeTab === 'profile' ? 'var(--edu-primary)' : 'var(--edu-neutral-700)',
                    backgroundColor: activeTab === 'profile' ? 'rgba(30, 58, 138, 0.05)' : 'transparent',
                    fontWeight: activeTab === 'profile' ? '500' : '400',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i className="fas fa-user me-2" style={{ color: activeTab === 'profile' ? 'var(--edu-primary)' : 'var(--edu-neutral-500)' }}></i> Profile
                </a>
                <a href="#" 
                  className={`list-group-item list-group-item-action ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(experienceRef); }}
                  style={{
                    color: activeTab === 'experience' ? 'var(--edu-primary)' : 'var(--edu-neutral-700)',
                    backgroundColor: activeTab === 'experience' ? 'rgba(30, 58, 138, 0.05)' : 'transparent',
                    fontWeight: activeTab === 'experience' ? '500' : '400',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i className="fas fa-briefcase me-2" style={{ color: activeTab === 'experience' ? 'var(--edu-primary)' : 'var(--edu-neutral-500)' }}></i> Experience
                </a>
                <a href="#" 
                  className={`list-group-item list-group-item-action ${activeTab === 'qualification' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(qualificationRef); }}
                  style={{
                    color: activeTab === 'qualification' ? 'var(--edu-primary)' : 'var(--edu-neutral-700)',
                    backgroundColor: activeTab === 'qualification' ? 'rgba(30, 58, 138, 0.05)' : 'transparent',
                    fontWeight: activeTab === 'qualification' ? '500' : '400',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i className="fas fa-graduation-cap me-2" style={{ color: activeTab === 'qualification' ? 'var(--edu-primary)' : 'var(--edu-neutral-500)' }}></i> Qualification
                </a>
                <a href="#" 
                  className={`list-group-item list-group-item-action ${activeTab === 'personal' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(personalInfoRef); }}
                  style={{
                    color: activeTab === 'personal' ? 'var(--edu-primary)' : 'var(--edu-neutral-700)',
                    backgroundColor: activeTab === 'personal' ? 'rgba(30, 58, 138, 0.05)' : 'transparent',
                    fontWeight: activeTab === 'personal' ? '500' : '400',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i className="fas fa-id-card me-2" style={{ color: activeTab === 'personal' ? 'var(--edu-primary)' : 'var(--edu-neutral-500)' }}></i> Personal Information
                </a>
                <a href="#" 
                  className={`list-group-item list-group-item-action ${activeTab === 'honours' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(honoursRef); }}
                  style={{
                    color: activeTab === 'honours' ? 'var(--edu-primary)' : 'var(--edu-neutral-700)',
                    backgroundColor: activeTab === 'honours' ? 'rgba(30, 58, 138, 0.05)' : 'transparent',
                    fontWeight: activeTab === 'honours' ? '500' : '400',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i className="fas fa-award me-2" style={{ color: activeTab === 'honours' ? 'var(--edu-primary)' : 'var(--edu-neutral-500)' }}></i> Honours & Awards
                </a>
                <a href="#" 
                  className={`list-group-item list-group-item-action ${activeTab === 'research' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(researchRef); }}
                  style={{
                    color: activeTab === 'research' ? 'var(--edu-primary)' : 'var(--edu-neutral-700)',
                    backgroundColor: activeTab === 'research' ? 'rgba(30, 58, 138, 0.05)' : 'transparent',
                    fontWeight: activeTab === 'research' ? '500' : '400',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i className="fas fa-book me-2" style={{ color: activeTab === 'research' ? 'var(--edu-primary)' : 'var(--edu-neutral-500)' }}></i> Research & Publications
                </a>
                <Link to="/approval" className="list-group-item list-group-item-action" style={{
                  color: 'var(--edu-neutral-700)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-check-circle me-2" style={{ color: 'var(--edu-neutral-500)' }}></i> Validate Submissions
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" style={{
                  color: 'var(--edu-neutral-700)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-file-alt me-2" style={{ color: 'var(--edu-neutral-500)' }}></i> Generate report
                </Link>
              </div>
            </div>
          </div>

          {/* Faculty Profile Section */}
          <div className="col-12 col-md-9">
            <div className="card shadow-sm border-0" style={{ 
              borderRadius: '10px', 
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}>
              <div className="card-header" style={{ 
                background: 'white',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                padding: '1rem'
              }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-id-badge me-2" style={{ color: 'var(--edu-primary)' }}></i>
                    <h5 className="mb-0" style={{ color: 'var(--edu-neutral-800)', fontWeight: '600' }}>Faculty ID: PSNA1036</h5>
                  </div>
                  <span className="badge" style={{ 
                    background: 'var(--edu-success)',
                    color: 'white',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '50px',
                    fontWeight: '500'
                  }}>IETS Rating: 8.0</span>
                </div>
              </div>
              
              <div className="card-body">
                {/* Faculty Info */}
                <div className="d-flex" ref={profileRef}>
                  <div className="rounded-circle me-3" style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'rgba(30, 58, 138, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--edu-primary)',
                  }}>
                    <i className="fas fa-user" style={{ fontSize: '2rem', color: 'var(--edu-primary)' }}></i>
                  </div>
                  <div>
                    <h5 style={{ color: 'var(--edu-primary)', fontWeight: '600' }}>{username || "Your Name Here"}</h5>
                    <p className="text-muted mb-0">Vice Chancellor</p>
                    <p className="text-muted">PSNA College of Engg & Tech</p>
                  </div>
                </div>

                {/* Chart Card */}
                <div className="mt-4">
                  <div className="card border-0 shadow-sm" style={{ 
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    <div className="card-header" style={{
                      background: 'var(--edu-secondary)',
                      color: 'white',
                      border: 'none',
                      fontWeight: '600',
                      padding: '0.75rem 1rem'
                    }}>
                      <i className="fas fa-chart-bar me-2"></i> Academic Metrics
                    </div>
                    <div className="card-body" style={{ padding: '1.5rem' }}>
                      <Bar data={data} options={options} />
                    </div>
                  </div>
                </div>

                <hr style={{ margin: '2rem 0', backgroundColor: 'var(--edu-neutral-300)' }} />

                {/* Experience Section */}
                <div ref={experienceRef}>
                  <h5 style={{ color: 'var(--edu-primary)', fontWeight: '600' }}>Experience:</h5>
                  <ul className="list-unstyled">
                    <li>
                      <strong>2020 - Present:</strong> Vice Chancellor, PSNA College of Engg & Tech
                    </li>
                    <li>
                      <strong>2012 - 2019:</strong> Dean and Coordinator, PSNA College of Engg & Tech
                    </li>
                    <li>
                      <strong>2006 - 2012:</strong> Professor, Lecturer, XYZ University
                    </li>
                  </ul>
                </div>

                <hr style={{ margin: '2rem 0', backgroundColor: 'var(--edu-neutral-300)' }} />

                {/* Qualification Section */}
                <div ref={qualificationRef}>
                  <h5 style={{ color: 'var(--edu-secondary)', fontWeight: '600' }}>Qualification:</h5>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Ph.D. in Electrical Engineering</strong> - XYZ University
                    </li>
                    <li>
                      <strong>M.Tech in Computer Science</strong> - ABC College
                    </li>
                  </ul>
                </div>

                <hr style={{ margin: '2rem 0', backgroundColor: 'var(--edu-neutral-300)' }} />

                {/* Personal Information Section */}
                <div ref={personalInfoRef}>
                  <h5 style={{ color: 'var(--edu-accent)', fontWeight: '600' }}>Personal Information:</h5>
                  <p><strong>Date of Birth:</strong> January 1, 1970</p>
                  <p><strong>Email:</strong> dr.rajendra@example.com</p>
                  <p><strong>Phone:</strong> +91 9876543210</p>
                  <p><strong>Address:</strong> 123, University Road, City, Country</p>
                </div>

                <hr style={{ margin: '2rem 0', backgroundColor: 'var(--edu-neutral-300)' }} />

                {/* Honours & Awards Section */}
                <div ref={honoursRef}>
                  <h5 style={{ color: 'var(--edu-primary)', fontWeight: '600' }}>Honours & Awards:</h5>
                  <ul>
                    <li>Best Researcher Award, XYZ University, 2021</li>
                    <li>Innovative Leader Award, National Conference on Innovation, 2019</li>
                    <li>Distinguished Faculty Award, ABC College, 2018</li>
                    <li>Excellence in Teaching Award, XYZ University, 2016</li>
                  </ul>
                </div>

                <hr style={{ margin: '2rem 0', backgroundColor: 'var(--edu-neutral-300)' }} />

                {/* Research & Publications Section */}
                <div ref={researchRef}>
                  <h5 style={{ color: 'var(--edu-secondary)', fontWeight: '600' }}>Research & Publications:</h5>
                  <ul>
                    <li><strong>Paper Title 1:</strong> AI-based Traffic Management Systems - Published in ABC Journal, 2022</li>
                    <li><strong>Paper Title 2:</strong> Advances in Cloud Computing for Smart Cities - Published in DEF Conference, 2021</li>
                    <li><strong>Book Title:</strong> Emerging Technologies in Urban Planning - Published by GHI Press, 2020</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-2 mt-4">
        <p className="mb-0">&copy; 2024 PSNA College of Engineering & Technology</p>
      </footer>
    </div>
  );
}
