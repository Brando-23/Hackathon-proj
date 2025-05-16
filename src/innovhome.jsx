import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/theme.css'; // Import educational theme

// Mock Data for Experts
const experts = [
  {
    id: 136,
    name: 'Prof Bijnan Bandyopadhyay',
    role: 'Visiting Professor',
    expertise: 'Control system, Sliding mode control, variable structure system',
    department: 'Electrical Engineering',
    institute: 'Indian Institute of Technology Jodhpur',
    location: 'Rajasthan',
    img: 'https://via.placeholder.com/80x80',
  },
  {
    id: 159,
    name: 'Mr. S.K. Sharma',
    role: 'Scientist E1',
    expertise: 'Mechanical Engineering',
    department: 'Electrical Engineering',
    institute: 'Tata Institute of Fundamental Research (TIFR) Mumbai',
    location: 'Maharashtra',
    img: 'https://via.placeholder.com/80x80',
  },
  {
    id: 172,
    name: 'Mr. S.R. Dugad',
    role: 'Scientist',
    expertise: 'Searches for tri-linear coupling, SUSY particles, detector development for CMS',
    department: 'Physics',
    institute: 'Tata Institute of Fundamental Research (TIFR) Mumbai',
    location: 'Maharashtra',
    img: 'https://via.placeholder.com/80x80',
  },
  {
    id: 173,
    name: 'Mr. S.R. Dharun',
    role: 'S',
    expertise: 'Computer Science',
    department: 'Mechanical Engineering',
    institute: 'Tata Institute of Fundamental Research (TIFR) Mumbai',
    location: 'Maharashtra',
    img: 'https://via.placeholder.com/80x80',
  },
  {
    id: 174,
    name: 'Mr. J.Madhan',
    role: 'S',
    expertise: 'Mechanical Engineering',
    department: 'Physics',
    institute: 'Tata Institute of Fundamental Research (TIFR) Mumbai',
    location: 'Maharashtra',
    img: 'https://via.placeholder.com/80x80',
  }, 
  {
    id: 175,
    name: 'Mr. J.saravanan',
    role: 'S',
    expertise: 'Computer Science',
    department: 'Computer Science',
    institute: 'Tata Institute of Fundamental Research (TIFR) Mumbai',
    location: 'Maharashtra',
    img: 'https://via.placeholder.com/80x80',
  }, 
  {
    id: 175,
    name: 'Mr. S.jeyaseelan',
    role: 'S',
    expertise: 'Engineering',
    department: 'Mechanical Engineering',
    institute: 'Tata Institute of Fundamental Research (TIFR) Mumbai',
    location: 'Maharashtra',
    img: 'https://via.placeholder.com/80x80',
  }, 
];

// Expertise Categories
const expertiseCategories = [
  'Engineering',
  'Computer Science',
  'Mechanical Engineering',
];

// Department Categories
const departmentCategories = [
  'Electrical Engineering',
  'Physics',
  'Computer Science',
  'Mechanical Engineering',
];

const ExpertSearch = () => {
  const [filters, setFilters] = useState({
    expertise: [],
    department: [],
  });
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFilter = (category, type) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(category)
        ? prev[type].filter((item) => item !== category)
        : [...prev[type], category],
    }));
  };

  // Filter experts based on selected filters and search term
  const filteredExperts = experts.filter((expert) => {
    const matchesExpertise = filters.expertise.length === 0 || 
      filters.expertise.some(filter => 
        expert.expertise.toLowerCase().includes(filter.toLowerCase())
      );
      
    const matchesDepartment = filters.department.length === 0 || 
      filters.department.includes(expert.department);
      
    const matchesSearch = searchTerm === '' || 
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.institute.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesExpertise && matchesDepartment && matchesSearch;
  });

  return (
    <div style={{ 
      background: 'var(--edu-neutral-200)',
      minHeight: '100vh',
      fontFamily: 'var(--edu-font-primary)',
      paddingBottom: '2rem'
    }}>
      {/* Header with gradient background */}
      <div style={{ 
        background: 'linear-gradient(135deg, var(--edu-primary), var(--edu-secondary))',
        padding: '2rem 0',
        marginBottom: '2rem',
        color: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 style={{ fontWeight: '600' }}>Research & Innovation Directory</h1>
              <p className="lead mb-0">Discover experts across various fields and domains</p>
            </div>
            <div className="col-md-4">
              <div className="position-relative">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search experts, fields, institutions..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ 
                    borderRadius: '50px',
                    padding: '0.75rem 1rem',
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
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {/* Filter Sidebar */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm" style={{ 
              borderRadius: '10px', 
              overflow: 'hidden'
            }}>
              <div className="card-header" style={{ 
                background: 'var(--edu-primary)',
                color: 'white',
                border: 'none',
                fontWeight: '600',
                padding: '1rem'
              }}>
                <i className="fas fa-filter me-2"></i> REFINE YOUR SEARCH
              </div>
              <div className="card-body">
                <h5 style={{ 
                  color: 'var(--edu-primary)',
                  fontWeight: '600',
                  fontSize: '1rem',
                  marginBottom: '0.75rem'
                }}>Filter By Expertise</h5>
                
                <div className="mb-3">
                  {expertiseCategories.map((category) => (
                    <div className="form-check mb-2" key={category}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`expertise-${category}`}
                        checked={filters.expertise.includes(category)}
                        onChange={() => toggleFilter(category, 'expertise')}
                        style={{ 
                          borderColor: 'var(--edu-primary)',
                          width: '1.1rem',
                          height: '1.1rem'
                        }}
                      />
                      <label className="form-check-label" htmlFor={`expertise-${category}`}>
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
                
                <h5 style={{ 
                  color: 'var(--edu-secondary)',
                  fontWeight: '600',
                  fontSize: '1rem',
                  marginBottom: '0.75rem',
                  marginTop: '1.5rem'
                }}>Filter By Department</h5>
                
                <div className="mb-3">
                  {departmentCategories.map((category) => (
                    <div className="form-check mb-2" key={category}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`department-${category}`}
                        checked={filters.department.includes(category)}
                        onChange={() => toggleFilter(category, 'department')}
                        style={{ 
                          borderColor: 'var(--edu-secondary)',
                          width: '1.1rem',
                          height: '1.1rem'
                        }}
                      />
                      <label className="form-check-label" htmlFor={`department-${category}`}>
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="btn w-100 mt-3" 
                  style={{ 
                    background: 'var(--edu-primary)',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '0.6rem',
                    fontWeight: '500',
                    border: 'none',
                    boxShadow: '0 2px 6px rgba(30, 58, 138, 0.2)'
                  }}
                >
                  <i className="fas fa-sliders-h me-2"></i> Apply Filters
                </button>
                
                {(filters.expertise.length > 0 || filters.department.length > 0) && (
                  <button 
                    className="btn btn-link w-100 mt-2 text-decoration-none" 
                    onClick={() => setFilters({ expertise: [], department: [] })}
                    style={{ color: 'var(--edu-neutral-600)' }}
                  >
                    <i className="fas fa-times-circle me-1"></i> Clear all filters
                  </button>
                )}
              </div>
            </div>
            
            <div className="card border-0 shadow-sm mt-4" style={{ 
              borderRadius: '10px', 
              overflow: 'hidden',
              background: 'linear-gradient(to right, rgba(124, 58, 237, 0.05), rgba(124, 58, 237, 0.1))',
              border: '1px dashed var(--edu-secondary-light)',
              padding: '1rem'
            }}>
              <div className="d-flex align-items-center">
                <div style={{ 
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'rgba(124, 58, 237, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  color: 'var(--edu-secondary)'
                }}>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h6 style={{ 
                    color: 'var(--edu-secondary)',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}>Looking for collaboration?</h6>
                  <p className="small mb-0" style={{ color: 'var(--edu-neutral-700)' }}>
                    Connect with experts for research projects and innovations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experts Listing */}
          <div className="col-md-9">
            <div className="card border-0 shadow-sm mb-4" style={{ 
              borderRadius: '10px', 
              overflow: 'hidden'
            }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 style={{ 
                      color: 'var(--edu-primary)',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      Results <span style={{ 
                        background: 'var(--edu-primary-light)',
                        color: 'white',
                        fontSize: '1rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '20px',
                        marginLeft: '0.5rem',
                        verticalAlign: 'middle'
                      }}>{filteredExperts.length}</span>
                    </h4>
                  </div>
                  <div className="d-flex align-items-center">
                    <label htmlFor="sortBy" className="form-label me-2 mb-0" style={{ color: 'var(--edu-neutral-600)' }}>
                      Sort By
                    </label>
                    <select 
                      className="form-select" 
                      id="sortBy"
                      style={{ 
                        borderRadius: '50px',
                        border: '1px solid var(--edu-neutral-300)',
                        padding: '0.375rem 2rem 0.375rem 1rem',
                        width: 'auto',
                        fontSize: '0.9rem'
                      }}
                    >
                      <option value="Expert ID">Expert ID</option>
                      <option value="Name">Name</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="list-group">
              {filteredExperts.length > 0 ? (
                filteredExperts.map((expert) => (
                  <div 
                    className="card border-0 shadow-sm mb-3" 
                    key={expert.id}
                    style={{
                      borderRadius: '10px',
                      transition: 'transform 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '2px solid var(--edu-primary-light)'
                          }}>
                            <img
                              src={expert.img}
                              alt={expert.name}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <h5 style={{ 
                            color: 'var(--edu-primary)',
                            fontWeight: '600',
                            marginBottom: '0.25rem'
                          }}>{expert.name}</h5>
                          
                          <div style={{ 
                            color: 'var(--edu-neutral-800)',
                            marginBottom: '0.25rem'
                          }}>
                            <span className="badge me-2" style={{ 
                              background: 'var(--edu-primary-light)',
                              color: 'white'
                            }}>{expert.role}</span>
                            <span style={{ color: 'var(--edu-neutral-700)' }}>{expert.expertise}</span>
                          </div>
                          
                          <p className="mb-0" style={{ 
                            color: 'var(--edu-neutral-600)',
                            fontSize: '0.9rem'
                          }}>
                            <i className="fas fa-building me-1"></i> {expert.department}
                            <span className="mx-2">•</span>
                            <i className="fas fa-map-marker-alt me-1"></i> {expert.institute}, {expert.location}
                          </p>
                        </div>
                        <div className="col-md-2 d-flex justify-content-end">
                          <Link to="/innov">
                            <button 
                              className="btn"
                              style={{ 
                                background: 'var(--edu-primary)',
                                color: 'white',
                                borderRadius: '50px',
                                padding: '0.5rem 1rem',
                                border: 'none',
                                boxShadow: '0 2px 4px rgba(30, 58, 138, 0.2)',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              View Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card border-0 shadow-sm" style={{ 
                  borderRadius: '10px', 
                  padding: '3rem 2rem',
                  textAlign: 'center'
                }}>
                  <div className="rounded-circle mx-auto mb-3" style={{ 
                    width: '80px',
                    height: '80px',
                    background: 'var(--edu-neutral-200)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="fas fa-search" style={{ 
                      fontSize: '2rem', 
                      color: 'var(--edu-neutral-400)' 
                    }}></i>
                  </div>
                  <h5 style={{ color: 'var(--edu-neutral-700)', fontWeight: '600' }}>No experts found</h5>
                  <p className="text-muted mb-0">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {filteredExperts.length > 0 && (
              <nav className="mt-4 d-flex justify-content-center">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a 
                      className="page-link" 
                      href="#"
                      style={{ 
                        border: 'none',
                        borderRadius: '50%',
                        margin: '0 0.2rem',
                        color: 'var(--edu-neutral-600)'
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a 
                      className="page-link" 
                      href="#"
                      style={{ 
                        background: 'var(--edu-primary)',
                        border: 'none',
                        borderRadius: '50%',
                        margin: '0 0.2rem',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a 
                      className="page-link" 
                      href="#"
                      style={{ 
                        border: 'none',
                        borderRadius: '50%',
                        margin: '0 0.2rem',
                        color: 'var(--edu-neutral-800)',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a 
                      className="page-link" 
                      href="#"
                      style={{ 
                        border: 'none',
                        borderRadius: '50%',
                        margin: '0 0.2rem',
                        color: 'var(--edu-neutral-800)'
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
      
      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </div>
  );
};

export default ExpertSearch;
