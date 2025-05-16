import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/theme.css'; // Import educational theme

export default function CollaborationPartnership() {
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
        padding: '2.5rem 0',
        marginBottom: '2rem',
        color: 'white',
        borderRadius: '0 0 20px 20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-4 fw-bold mb-2">Collaboration & Partnership</h1>
              <p className="lead mb-0">Building bridges for knowledge exchange and innovation</p>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="bg-white p-2 rounded-circle float-end" style={{ width: '100px', height: '100px' }}>
                <div className="d-flex h-100 align-items-center justify-content-center">
                  <i className="fas fa-handshake" style={{ fontSize: '3rem', color: 'var(--edu-primary)' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Hero section */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm" style={{ 
            borderRadius: '10px', 
            overflow: 'hidden'
          }}>
            <div className="row g-0">
              <div className="col-12 col-md-8 order-1 order-md-2"> 
                <img 
                  className="img-fluid" 
                  src="https://www.jainuniversity.ac.in/jain/theme/assets/images/about/best-university-in-india/jgi-collaborations-and-partnerships.jpg" 
                  alt="Collaborations and partnerships"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
              <div className="col-12 col-md-4 order-2 order-md-1 d-flex align-items-center">
                <div className="p-4">
                  <h2 style={{ 
                    color: 'var(--edu-primary)',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>Strategic Partnerships</h2>
                  <p>Our university collaborates with leading institutions, industries, and organizations worldwide to foster innovation, promote research, and enrich the educational experience for our students.</p>
                  <button className="btn mt-2" style={{ 
                    background: 'var(--edu-primary)',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '0.6rem 1.5rem',
                    fontWeight: '500',
                    border: 'none',
                    boxShadow: '0 2px 6px rgba(30, 58, 138, 0.2)'
                  }}>
                    Explore Partnerships
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners section */}
        <section className="mb-5">
          <div className="text-center mb-4">
            <h2 style={{ 
              color: 'var(--edu-primary)',
              fontWeight: '600',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '0.5rem'
            }}>
              International Industry Partners
              <div style={{ 
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                borderRadius: '2px',
                background: 'var(--edu-accent)'
              }}></div>
            </h2>
            <p className="lead text-muted">Connecting academia with industry leaders worldwide</p>
          </div>

          <div className="card border-0 shadow-sm" style={{ 
            borderRadius: '10px', 
            overflow: 'hidden'
          }}>
            <div className="card-body p-0">
              <div className="partner-card p-4" style={{ borderBottom: '1px solid var(--edu-neutral-300)' }}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="rounded-circle mb-3 mb-md-0" style={{ 
                      width: '80px',
                      height: '80px',
                      background: 'var(--edu-primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="fas fa-laptop-code" style={{ fontSize: '2rem', color: 'white' }}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h3 style={{ 
                      color: 'var(--edu-primary)',
                      fontWeight: '600',
                      fontSize: '1.5rem'
                    }}>Futurense Technologies</h3>
                    <p style={{fontSize:'15px', marginBottom: 0}}>Futurense is an initiative of Miles Education and focused on creating next-gen technologies to create a savvier future. It has tie-ups with IIT and IIMs for upskilling students and professionals to help them be future-ready and enable their career progression in Data Science and Artificial Intelligence. The partnership between JAIN (Deemed-to-be University) and Futurense Technologies is aimed at nurturing future-ready careers for students pursuing Bachelors in Computer Science programs.</p>
                  </div>
                </div>
              </div>
              
              <div className="partner-card p-4" style={{ borderBottom: '1px solid var(--edu-neutral-300)' }}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="rounded-circle mb-3 mb-md-0" style={{ 
                      width: '80px',
                      height: '80px',
                      background: 'var(--edu-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="fas fa-plane" style={{ fontSize: '2rem', color: 'white' }}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h3 style={{ 
                      color: 'var(--edu-secondary)',
                      fontWeight: '600',
                      fontSize: '1.5rem'
                    }}>CMS Business School and Acumen Aviation</h3>
                    <p style={{fontSize:'15px', marginBottom: 0}}>JAIN (Deemed-to-be University)'s CMS Business School and Acumen Technical Advisory Pvt. Ltd (trading as Acumen Aviation) has signed a Memorandum of Understanding on Research and Training in Aircraft Leasing and Financing. This Memorandum is a form of mutual commitment in complimenting each other's expertise in the field of Education, Aircraft Leasing, Aircraft Financing, and Aviation Management. With this, JAIN (Deemed-to-be University) becomes the first educational institution in the country to support and implement the skill development and facilitate government initiative of Atmanirbhar Bharat in this niche area of Aircraft Financing.</p>
                  </div>
                </div>
              </div>
              
              <div className="partner-card p-4" style={{ borderBottom: '1px solid var(--edu-neutral-300)' }}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="rounded-circle mb-3 mb-md-0" style={{ 
                      width: '80px',
                      height: '80px',
                      background: 'var(--edu-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="fas fa-lightbulb" style={{ fontSize: '2rem', color: 'white' }}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h3 style={{ 
                      color: 'var(--edu-accent)',
                      fontWeight: '600',
                      fontSize: '1.5rem'
                    }}>Kotler Impact</h3>
                    <p style={{fontSize:'15px', marginBottom: 0}}>Futurense is an initiative of Miles Education and focused on creating next-gen technologies to create a savvier future. It has tie-ups with IIT and IIMs for upskilling students and professionals to help them be future-ready and enable their career progression in Data Science and Artificial Intelligence. The partnership between JAIN (Deemed-to-be University) and Futurense Technologies is aimed at nurturing future-ready careers for students pursuing Bachelors in Computer Science programs.</p>
                  </div>
                </div>
              </div>
              
              <div className="partner-card p-4" style={{ borderBottom: '1px solid var(--edu-neutral-300)' }}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="rounded-circle mb-3 mb-md-0" style={{ 
                      width: '80px',
                      height: '80px',
                      background: 'var(--edu-success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="fas fa-paint-brush" style={{ fontSize: '2rem', color: 'white' }}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h3 style={{ 
                      color: 'var(--edu-success)',
                      fontWeight: '600',
                      fontSize: '1.5rem'
                    }}>Strate School of Design</h3>
                    <p style={{fontSize:'15px', marginBottom: 0}}>Futurense is an initiative of Miles Education and focused on creating next-gen technologies to create a savvier future. It has tie-ups with IIT and IIMs for upskilling students and professionals to help them be future-ready and enable their career progression in Data Science and Artificial Intelligence. The partnership between JAIN (Deemed-to-be University) and Futurense Technologies is aimed at nurturing future-ready careers for students pursuing Bachelors in Computer Science programs.</p>
                  </div>
                </div>
              </div>

              {/* Additional partners hidden for brevity */}
              <div className="text-center p-3">
                <button className="btn btn-outline-primary" style={{ 
                  color: 'var(--edu-primary)',
                  borderColor: 'var(--edu-primary)',
                  borderRadius: '50px',
                  padding: '0.6rem 1.5rem',
                  fontWeight: '500'
                }}>
                  View All Partners <i className="fas fa-chevron-down ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm text-center" style={{ 
            borderRadius: '10px',
            background: 'linear-gradient(to right, rgba(30, 58, 138, 0.05), rgba(124, 58, 237, 0.1))',
            padding: '3rem',
            marginTop: '2rem'
          }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="mb-4">
                  <span className="badge" style={{ 
                    background: 'var(--edu-accent)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    fontWeight: '500',
                    marginBottom: '1rem'
                  }}>
                    PARTNERSHIP OPPORTUNITIES
                  </span>
                  <h2 className="display-5 fw-bold" style={{ color: 'var(--edu-primary)' }}>Let's Build Something Together!</h2>
                  <p className="lead">
                    If you're ready to take the next step or have any questions, we're here to help. Get in touch with us and let's discuss how we can partner for success.
                  </p>
                </div>
                <a 
                  href="mailto:collaborations@yourdomain.com" 
                  className="btn btn-lg"
                  style={{ 
                    background: 'linear-gradient(to right, var(--edu-primary), var(--edu-secondary))',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '0.75rem 2rem',
                    fontWeight: '500',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.2)'
                  }}
                >
                  <i className="fas fa-envelope me-2"></i> Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </div>
  );
}