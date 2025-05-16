// pages/leadership-dashboard.js
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
// import './index-override.css'; // Import override for index.css
import './led.css'; // Import the dedicated CSS file
import './assets/theme.css'; // Import the educational theme

const LeadershipDashboard = () => {
  // State for selected department and domain
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');

  // Add useEffect to override global styles
  useEffect(() => {
    // Override root styles from index.css
    document.documentElement.style.setProperty('--override-max-width', '100%');
    
    // Target the root element
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.maxWidth = '100%';
      rootElement.style.padding = '0';
      rootElement.style.margin = '0';
    }
    
    // Override body styles
    document.body.style.display = 'block';
    document.body.style.placeItems = 'initial';
    document.body.style.maxWidth = '100%';
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.style.removeProperty('--override-max-width');
      if (rootElement) {
        rootElement.style.maxWidth = '';
        rootElement.style.padding = '';
        rootElement.style.margin = '';
      }
      document.body.style.display = '';
      document.body.style.placeItems = '';
      document.body.style.maxWidth = '';
    };
  }, []);

  // Static leader data
  const leaders = [
    { name: 'John Doe', department: 'CSE', year: '3rd', domain: 'Sports', achievements: 5 },
    { name: 'Jsnistan', department: 'CSE', year: '2nd', domain: 'Sports', achievements: 4 },
    { name: 'Karthi', department: 'CSE', year: '4th', domain: 'Sports', achievements: 3 },
    { name: 'Kishore', department: 'CSE', year: '2nd', domain: 'Sports', achievements: 6 },
    { name: 'Navin', department: 'CSE', year: '1st', domain: 'Sports', achievements: 7 },
    { name: 'Jane Smith', department: 'MECH', year: '2nd', domain: 'Academics', achievements: 8 },
    { name: 'Nadha', department: 'MECH', year: '1st', domain: 'Academics', achievements: 9 },
    { name: 'Jerry', department: 'MECH', year: '3rd', domain: 'Academics', achievements: 3 },
    { name: 'Jai', department: 'MECH', year: '3rd', domain: 'Academics', achievements: 6 },
    { name: 'Vicky', department: 'MECH', year: '3rd', domain: 'Academics', achievements: 3 },
    { name: 'M.Naveen', department: 'MECH', year: '4th', domain: 'Projects', achievements: 4 },
    { name: 'Kumar', department: 'EEE', year: '1st', domain: 'Projects', achievements: 8 },
    { name: 'Manoj', department: 'EEE', year: '4th', domain: 'Projects', achievements: 3 },
    { name: 'Sam', department: 'EEE', year: '3rd', domain: 'Projects', achievements: 6 },
    { name: 'Sathya', department: 'EEE', year: '2nd', domain: 'Projects', achievements: 9 },
    { name: 'Sathish', department: 'EEE', year: '2nd', domain: 'Projects', achievements: 9 },
    { name: 'Green', department: 'CIVIL', year: '1st', domain: 'Hackathon', achievements: 9 },
    { name: 'Smith', department: 'CIVIL', year: '2nd', domain: 'Hackathon', achievements: 8 },
    { name: 'Rohit', department: 'CIVIL', year: '3rd', domain: 'Hackathon', achievements: 4 },
    { name: 'Dhoni', department: 'CIVIL', year: '4th', domain: 'Hackathon', achievements: 6 },
    { name: 'Sachin', department: 'CIVIL', year: '4th', domain: 'Hackathon', achievements: 5 },
    { name: 'White', department: 'IT', year: '1st', domain: 'Culturals', achievements: 70 },
    { name: 'Raina', department: 'IT', year: '2nd', domain: 'Culturals', achievements: 60 },
    { name: 'Hari', department: 'IT', year: '3rd', domain: 'Culturals', achievements: 90 },
    { name: 'Ravi', department: 'IT', year: '4th', domain: 'Culturals', achievements: 50 },
    { name: 'Kavin', department: 'IT', year: '3rd', domain: 'Culturals', achievements: 78 },
    { name: 'Mukilesh', department: 'AIDS', year: '3rd', domain: 'Culturals', achievements: 75 },
    { name: 'Logesh', department: 'AIDS', year: '1st', domain: 'Culturals', achievements: 91 },
    { name: 'Kumaran', department: 'AIDS', year: '2nd', domain: 'Culturals', achievements: 46 },
    { name: 'Kanthan', department: 'AIDS', year: '4th', domain: 'Culturals', achievements: 54 },
    { name: 'Kalai', department: 'AIDS', year: '4th', domain: 'Culturals', achievements: 76 },
  ];

  const domains = ['Sports', 'Academics', 'Projects', 'Hackathon', 'Culturals'];
  const departments = ['CSE', 'IT', 'EEE',  'MECH', 'AIDS'];

  // Colors for charts - educational theme colors
  const chartColors = {
    sports: 'rgba(30, 58, 138, 0.7)',
    academics: 'rgba(124, 58, 237, 0.7)',
    projects: 'rgba(245, 158, 11, 0.7)',
    hackathon: 'rgba(37, 99, 235, 0.7)',
    culturals: 'rgba(5, 150, 105, 0.7)',
    default: 'rgba(107, 114, 128, 0.7)'
  };

  // Prepare overall graph data
  const getOverallGraphData = () => {
    return {
      labels: leaders.map((leader) => leader.name).slice(0, 10), // Only top 10 leaders
      datasets: [{
        label: 'Overall Achievements',
        data: leaders.map((leader) => leader.achievements).slice(0, 10), // Only top 10 achievements
        backgroundColor: chartColors.default,
        borderColor: 'rgba(75, 85, 99, 1)',
        borderWidth: 1
      }],
    };
  };

  // Prepare graph data for each domain
  const getGraphData = (domain) => {
    const filteredLeaders = leaders.filter((leader) => leader.domain === domain);
    const colorKey = domain.toLowerCase();
    return {
      labels: filteredLeaders.map((leader) => leader.name),
      datasets: [{
        label: 'Achievements',
        data: filteredLeaders.map((leader) => leader.achievements),
        backgroundColor: chartColors[colorKey] || chartColors.default,
        borderColor: 'rgba(75, 85, 99, 1)',
        borderWidth: 1
      }],
    };
  };

  // Prepare department data
  const getDepartmentData = (department) => {
    const filteredLeaders = leaders.filter((leader) => leader.department === department);
    return {
      labels: filteredLeaders.map((leader) => leader.name),
      datasets: [{
        label: 'Achievements',
        data: filteredLeaders.map((leader) => leader.achievements),
        backgroundColor: filteredLeaders.map((leader) => {
          const domain = leader.domain.toLowerCase();
          return chartColors[domain] || chartColors.default;
        }),
        borderColor: 'rgba(75, 85, 99, 1)',
        borderWidth: 1
      }],
    };
  };

  // Get domain color for headers
  const getDomainColor = (domain) => {
    const colorKey = domain.toLowerCase();
    return {
      background: chartColors[colorKey] || chartColors.default,
      color: '#ffffff'
    };
  };

  return (
    <div className="dashboard-container">
      {/* Header with gradient background */}
      <div className="dashboard-header" style={{ 
        background: 'linear-gradient(135deg, #1e3a8a, #7c3aed)',
        padding: '1.5rem 0',
        marginBottom: '2rem',
        color: 'white',
        borderRadius: '0 0 20px 20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1 className="mb-0">Leadership Dashboard</h1>
              <p className="mb-0">Student achievements across departments and domains</p>
            </div>
            <div className="d-none d-md-block">
              <div className="school-logo rounded-circle bg-white p-2" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-trophy-fill" style={{ fontSize: '30px', color: '#1e3a8a' }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Stats overview cards */}
        <div className="row mb-4">
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3" style={{ background: 'rgba(30, 58, 138, 0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-people-fill" style={{ fontSize: '24px', color: '#1e3a8a' }}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">Total Leaders</h6>
                    <h3 className="mb-0">{leaders.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3" style={{ background: 'rgba(124, 58, 237, 0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-building" style={{ fontSize: '24px', color: '#7c3aed' }}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">Departments</h6>
                    <h3 className="mb-0">{departments.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3" style={{ background: 'rgba(245, 158, 11, 0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-grid-3x3-gap" style={{ fontSize: '24px', color: '#f59e0b' }}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">Domains</h6>
                    <h3 className="mb-0">{domains.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3" style={{ background: 'rgba(5, 150, 105, 0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-award" style={{ fontSize: '24px', color: '#059669' }}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">Achievements</h6>
                    <h3 className="mb-0">{leaders.reduce((acc, leader) => acc + leader.achievements, 0)}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown selectors with better alignment */}
        <div className="row mb-4">
          <div className="col-lg-6 mb-3">
            <div className="card border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <label htmlFor="departmentSelect" className="form-label fw-bold">Select Department:</label>
                <select 
                  id="departmentSelect" 
                  className="form-select"
                  value={selectedDepartment} 
                  onChange={(e) => { 
                    setSelectedDepartment(e.target.value);
                    setSelectedDomain(''); // Reset domain when changing department
                  }}
                  style={{ 
                    borderColor: '#e2e8f0', 
                    padding: '0.75rem', 
                    borderRadius: '8px'
                  }}
                >
                  <option value="">All Departments</option>
                  {departments.map((department) => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-3">
            <div className="card border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="card-body">
                <label htmlFor="domainSelect" className="form-label fw-bold">Select Domain:</label>
                <select 
                  id="domainSelect" 
                  className="form-select"
                  value={selectedDomain} 
                  onChange={(e) => { 
                    setSelectedDomain(e.target.value);
                    setSelectedDepartment(''); // Reset department when changing domain
                  }}
                  style={{ 
                    borderColor: '#e2e8f0', 
                    padding: '0.75rem', 
                    borderRadius: '8px'
                  }}
                >
                  <option value="">All Domains</option>
                  {domains.map((domain) => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        {(!selectedDepartment && !selectedDomain) ? (
          <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <div className="card-header py-3" style={{ background: 'linear-gradient(to right, #1e3a8a, #2c5ebd)', color: 'white', border: 'none' }}>
              <h5 className="mb-0">Overall Performance</h5>
            </div>
            <div className="card-body">
              <div className="chart-container mb-4" style={{ height: '400px' }}>
                <Bar 
                  data={getOverallGraphData()} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: 'Top 10 Student Leaders by Achievements'
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
              <div className="table-responsive">
                <Table bordered hover style={{ borderRadius: '8px', overflow: 'hidden' }}>
                  <thead>
                    <tr style={{ background: '#1e3a8a', color: 'white' }}>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Year</th>
                      <th>Domain</th>
                      <th>Achievements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaders
                      .sort((a, b) => b.achievements - a.achievements)
                      .slice(0, 10)
                      .map((leader, index) => (
                        <tr key={index}>
                          <td>{leader.name}</td>
                          <td>{leader.department}</td>
                          <td>{leader.year}</td>
                          <td>
                            <span className="badge" style={{ 
                              backgroundColor: getDomainColor(leader.domain).background,
                              color: getDomainColor(leader.domain).color
                            }}>
                              {leader.domain}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                                <div 
                                  className="progress-bar" 
                                  role="progressbar" 
                                  style={{ 
                                    width: `${(leader.achievements / 100) * 100}%`,
                                    backgroundColor: getDomainColor(leader.domain).background
                                  }} 
                                  aria-valuenow={leader.achievements} 
                                  aria-valuemin="0" 
                                  aria-valuemax="100">
                                </div>
                              </div>
                              <span className="fw-bold">{leader.achievements}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Department-Specific Tables and Graphs */}
            {selectedDepartment && (
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <div className="card-header py-3" style={{ background: 'linear-gradient(to right, #1e3a8a, #2c5ebd)', color: 'white', border: 'none' }}>
                  <h5 className="mb-0">{selectedDepartment} Department Performance</h5>
                </div>
                <div className="card-body">
                  <div className="chart-container mb-4" style={{ height: '350px' }}>
                    <Bar 
                      data={getDepartmentData(selectedDepartment)} 
                      options={{ 
                        responsive: true, 
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          title: {
                            display: true,
                            text: `${selectedDepartment} Student Achievements Breakdown`
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }} 
                    />
                  </div>
                  <div className="table-responsive">
                    <Table bordered hover style={{ borderRadius: '8px', overflow: 'hidden' }}>
                      <thead>
                        <tr style={{ background: '#1e3a8a', color: 'white' }}>
                          <th>Name</th>
                          <th>Year</th>
                          <th>Domain</th>
                          <th>Achievements</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaders
                          .filter((leader) => 
                            (selectedDomain === '' || leader.domain === selectedDomain) &&
                            leader.department === selectedDepartment
                          )
                          .sort((a, b) => b.achievements - a.achievements)
                          .map((leader, index) => (
                            <tr key={index}>
                              <td>{leader.name}</td>
                              <td>{leader.year}</td>
                              <td>
                                <span className="badge" style={{ 
                                  backgroundColor: getDomainColor(leader.domain).background,
                                  color: getDomainColor(leader.domain).color
                                }}>
                                  {leader.domain}
                                </span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                                    <div 
                                      className="progress-bar" 
                                      role="progressbar" 
                                      style={{ 
                                        width: `${(leader.achievements / 100) * 100}%`,
                                        backgroundColor: getDomainColor(leader.domain).background
                                      }} 
                                      aria-valuenow={leader.achievements} 
                                      aria-valuemin="0" 
                                      aria-valuemax="100">
                                    </div>
                                  </div>
                                  <span className="fw-bold">{leader.achievements}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            )}

            {/* Domain-Specific Tables and Graphs */}
            {selectedDomain && (
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <div className="card-header py-3" style={{ 
                  background: `linear-gradient(to right, ${getDomainColor(selectedDomain).background}, ${getDomainColor(selectedDomain).background.replace('0.7', '0.5')})`, 
                  color: 'white', 
                  border: 'none' 
                }}>
                  <h5 className="mb-0">{selectedDomain} Domain Performance</h5>
                </div>
                <div className="card-body">
                  <div className="chart-container mb-4" style={{ height: '350px' }}>
                    <Bar 
                      data={getGraphData(selectedDomain)} 
                      options={{ 
                        responsive: true, 
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          title: {
                            display: true,
                            text: `${selectedDomain} Domain Leaders`
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }} 
                    />
                  </div>
                  <div className="table-responsive">
                    <Table bordered hover style={{ borderRadius: '8px', overflow: 'hidden' }}>
                      <thead>
                        <tr style={{ 
                          background: getDomainColor(selectedDomain).background, 
                          color: getDomainColor(selectedDomain).color 
                        }}>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Year</th>
                          <th>Achievements</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaders
                          .filter((leader) => 
                            (selectedDepartment === '' || leader.department === selectedDepartment) &&
                            leader.domain === selectedDomain
                          )
                          .sort((a, b) => b.achievements - a.achievements)
                          .map((leader, index) => (
                            <tr key={index}>
                              <td>{leader.name}</td>
                              <td>{leader.department}</td>
                              <td>{leader.year}</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                                    <div 
                                      className="progress-bar" 
                                      role="progressbar" 
                                      style={{ 
                                        width: `${(leader.achievements / 100) * 100}%`,
                                        backgroundColor: getDomainColor(leader.domain).background
                                      }} 
                                      aria-valuenow={leader.achievements} 
                                      aria-valuemin="0" 
                                      aria-valuemax="100">
                                    </div>
                                  </div>
                                  <span className="fw-bold">{leader.achievements}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    </div>
  );
};

export default LeadershipDashboard;
