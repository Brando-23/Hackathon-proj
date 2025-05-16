import { useEffect, useState } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/theme.css'; // Import educational theme

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement);

// Data for various charts with educational theme colors
const dataPlacement = {
  labels: ['2021', '2022', '2023'],
  datasets: [
    {
      label: 'Placement Success',
      data: [85, 90, 75],
      backgroundColor: 'rgba(30, 58, 138, 0.7)', // Deep blue from educational theme
      borderColor: 'rgba(30, 58, 138, 1)',
      borderWidth: 1,
    },
  ],
};

const dataPassedOut = {
  labels: ['2021', '2022', '2023'],
  datasets: [
    {
      label: 'Students Graduated',
      data: [500, 550, 600],
      backgroundColor: 'rgba(124, 58, 237, 0.7)', // Purple from educational theme
      borderColor: 'rgba(124, 58, 237, 1)',
      borderWidth: 1,
    },
  ],
};

const dataAchievements = {
  labels: ['Academics', 'Extracurriculars', 'Research', 'Sports'],
  datasets: [
    {
      label: 'Achievements',
      data: [80, 70, 90, 60],
      backgroundColor: [
        'rgba(30, 58, 138, 0.7)', // Deep blue
        'rgba(124, 58, 237, 0.7)', // Purple
        'rgba(245, 158, 11, 0.7)', // Gold/amber
        'rgba(5, 150, 105, 0.7)', // Green
      ],
      borderColor: [
        'rgba(30, 58, 138, 1)',
        'rgba(124, 58, 237, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(5, 150, 105, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const dataSports = {
  labels: ['Football', 'Basketball', 'Cricket', 'Athletics', 'Swimming'],
  datasets: [
    {
      label: 'Sports Participation',
      data: [120, 150, 100, 80, 90],
      backgroundColor: [
        'rgba(30, 58, 138, 0.7)',
        'rgba(124, 58, 237, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(5, 150, 105, 0.7)',
        'rgba(239, 68, 68, 0.7)',
      ],
      borderColor: [
        'rgba(30, 58, 138, 1)',
        'rgba(124, 58, 237, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(5, 150, 105, 1)',
        'rgba(239, 68, 68, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Chart options with theme styling
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          family: "'Poppins', sans-serif",
          size: 12
        }
      }
    },
    title: {
      display: true,
      text: '',
      font: {
        family: "'Poppins', sans-serif",
        size: 16,
        weight: 'bold'
      }
    },
    tooltip: {
      backgroundColor: 'rgba(30, 41, 59, 0.8)',
      titleFont: {
        family: "'Poppins', sans-serif",
        size: 14
      },
      bodyFont: {
        family: "'Poppins', sans-serif",
        size: 13
      },
      padding: 10,
      cornerRadius: 6,
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== undefined) {
            label += context.parsed.y;
            if (context.dataset.label === 'Placement Success' || context.dataset.label === 'Achievements') {
              label += '%';
            }
          } else if (context.parsed !== undefined) {
            label += context.parsed;
            if (context.dataset.label === 'Sports Participation') {
              label += ' students';
            }
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      },
      ticks: {
        font: {
          family: "'Poppins', sans-serif",
        },
        callback: function (value) {
          return value;
        },
      },
    },
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      },
      ticks: {
        font: {
          family: "'Poppins', sans-serif",
        }
      }
    }
  },
};

const ImpactReport = () => {
  const [currentGraph, setCurrentGraph] = useState(0);
  const [graphTitle, setGraphTitle] = useState('Placement Success');
  const [activeTab, setActiveTab] = useState('achievements');

  const graphs = [
    { 
      title: 'Placement Success Rate', 
      subtitle: 'Percentage of students placed over the years',
      component: <Bar data={dataPlacement} options={{...options, plugins: {...options.plugins, title: {display: true, text: 'Placement Success Rate'}}}} /> 
    },
    { 
      title: 'Graduation Statistics', 
      subtitle: 'Number of students graduated per year',
      component: <Bar data={dataPassedOut} options={{...options, plugins: {...options.plugins, title: {display: true, text: 'Graduation Statistics'}}}} /> 
    },
    { 
      title: 'Academic & Extracurricular Achievements', 
      subtitle: 'Performance across different domains',
      component: <Doughnut data={dataAchievements} options={{...options, plugins: {...options.plugins, title: {display: true, text: 'Academic & Extracurricular Achievements'}}}} /> 
    },
    { 
      title: 'Sports Participation', 
      subtitle: 'Student engagement in various sports',
      component: <Pie data={dataSports} options={{...options, plugins: {...options.plugins, title: {display: true, text: 'Sports Participation'}}}} /> 
    }
  ];

  useEffect(() => {
    const elements = document.querySelectorAll('.animated');
    elements.forEach(el => {
      el.classList.add('fade-in');
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGraph(prevGraph => {
        const nextGraph = (prevGraph + 1) % graphs.length;
        setGraphTitle(graphs[nextGraph].title); // Update the title
        return nextGraph;
      });
    }, 5000); // Change graph every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="impact-report" style={{ background: 'var(--edu-neutral-200)', minHeight: '100vh' }}>
      {/* Header with gradient background */}
      <div className="report-header" style={{ 
        background: 'linear-gradient(135deg, var(--edu-primary), var(--edu-secondary))',
        padding: '2rem 0',
        marginBottom: '2rem',
        color: 'white',
        borderRadius: '0 0 20px 20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1 className="mb-1">University Impact Report</h1>
              <p className="mb-0 lead">Measuring our success and growth through data</p>
            </div>
            <div className="d-none d-md-block">
              <div className="school-logo rounded-circle bg-white p-2" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-bar-chart-fill" style={{ fontSize: '30px', color: 'var(--edu-primary)' }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Dashboard cards */}
        <div className="row mb-4">
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3" style={{ 
                    background: 'rgba(30, 58, 138, 0.1)', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <i className="bi bi-mortarboard-fill" style={{ fontSize: '24px', color: 'var(--edu-primary)' }}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">Graduates</h6>
                    <h3 className="mb-0">1,650+</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3" style={{ 
                    background: 'rgba(124, 58, 237, 0.1)', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <i className="bi bi-briefcase-fill" style={{ fontSize: '24px', color: 'var(--edu-secondary)' }}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">Placement Rate</h6>
                    <h3 className="mb-0">87%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3" style={{ 
                    background: 'rgba(245, 158, 11, 0.1)', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <i className="bi bi-journal-check" style={{ fontSize: '24px', color: 'var(--edu-accent)' }}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">Research Papers</h6>
                    <h3 className="mb-0">245</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3" style={{ 
                    background: 'rgba(5, 150, 105, 0.1)', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <i className="bi bi-trophy-fill" style={{ fontSize: '24px', color: 'var(--edu-success)' }}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">Awards Won</h6>
                    <h3 className="mb-0">78</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab navigation for content */}
        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
          <div className="card-header" style={{ background: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'achievements' ? 'active' : ''}`} 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('achievements');
                  }}
                  style={{
                    color: activeTab === 'achievements' ? 'var(--edu-primary)' : 'var(--edu-neutral-600)',
                    fontWeight: activeTab === 'achievements' ? '600' : '400',
                    borderColor: activeTab === 'achievements' ? 'var(--edu-primary)' : 'transparent',
                    borderBottom: activeTab === 'achievements' ? '2px solid var(--edu-primary)' : 'none'
                  }}
                >
                  <i className="bi bi-bar-chart me-2"></i>
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('overview');
                  }}
                  style={{
                    color: activeTab === 'overview' ? 'var(--edu-primary)' : 'var(--edu-neutral-600)',
                    fontWeight: activeTab === 'overview' ? '600' : '400',
                    borderColor: activeTab === 'overview' ? 'var(--edu-primary)' : 'transparent',
                    borderBottom: activeTab === 'overview' ? '2px solid var(--edu-primary)' : 'none'
                  }}
                >
                  <i className="bi bi-file-text me-2"></i>
                  Overview
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {activeTab === 'achievements' ? (
              <div>
                <div className="row mb-4 align-items-center">
                  <div className="col-md-4">
                    <h4 style={{ color: 'var(--edu-primary)', fontWeight: '600' }}>{graphs[currentGraph].title}</h4>
                    <p className="text-muted">{graphs[currentGraph].subtitle}</p>
                    <div className="d-flex mt-4">
                      {graphs.map((_, index) => (
                        <button 
                          key={index} 
                          className="btn btn-sm me-2" 
                          style={{ 
                            width: '30px', 
                            height: '10px', 
                            padding: 0, 
                            background: currentGraph === index ? 'var(--edu-primary)' : 'var(--edu-neutral-300)',
                            border: 'none',
                            borderRadius: '5px'
                          }}
                          onClick={() => setCurrentGraph(index)}
                        ></button>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="graph-container animated" style={{ height: '400px', transition: 'all 0.5s ease' }}>
                      <div className="graph" style={{ height: '100%', width: '100%' }}>
                        {graphs[currentGraph].component}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animated py-2">
                <h4 style={{ color: 'var(--edu-primary)', fontWeight: '600', marginBottom: '1rem' }}>University Impact Overview</h4>
                <p style={{ lineHeight: '1.6' }}>
                  Our university has achieved remarkable milestones over the past academic year. With a focus on academic excellence, innovative research, and holistic student development, we've created a vibrant educational ecosystem that prepares students for future success.
                </p>
                <div className="row mt-4">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 bg-light h-100" style={{ borderRadius: '10px' }}>
                      <div className="card-body">
                        <h5 style={{ color: 'var(--edu-primary)', marginBottom: '1rem' }}>
                          <i className="bi bi-mortarboard me-2"></i>
                          Academic Excellence
                        </h5>
                        <p className="mb-0">Our rigorous academic programs have resulted in a 15% increase in student performance, with 92% of courses receiving excellent feedback from students. Our faculty has published 245 research papers in prestigious journals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 bg-light h-100" style={{ borderRadius: '10px' }}>
                      <div className="card-body">
                        <h5 style={{ color: 'var(--edu-secondary)', marginBottom: '1rem' }}>
                          <i className="bi bi-briefcase me-2"></i>
                          Career Outcomes
                        </h5>
                        <p className="mb-0">With an 87% placement rate, our graduates are thriving in their careers. The average starting salary has increased by 12% compared to the previous year, with 68% of students receiving multiple job offers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 bg-light h-100" style={{ borderRadius: '10px' }}>
                      <div className="card-body">
                        <h5 style={{ color: 'var(--edu-accent)', marginBottom: '1rem' }}>
                          <i className="bi bi-people me-2"></i>
                          Student Life
                        </h5>
                        <p className="mb-0">Our campus vibrates with energy from over 50 student clubs and organizations. Student participation in extracurricular activities has increased by 35%, leading to a more well-rounded educational experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 bg-light h-100" style={{ borderRadius: '10px' }}>
                      <div className="card-body">
                        <h5 style={{ color: 'var(--edu-success)', marginBottom: '1rem' }}>
                          <i className="bi bi-globe me-2"></i>
                          Global Impact
                        </h5>
                        <p className="mb-0">We've established partnerships with 28 international universities and organizations. Our students have participated in 15 global exchange programs, broadening their perspectives and cultural understanding.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      
      {/* Add Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <style jsx>{`
        .animated {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImpactReport;
