import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 40 });
  }, []);

  const [currentIndices, setCurrentIndices] = useState({});

  const projects = [
    { 
      title: 'Google Apps Script Automation', 
      desc: 'Developed automation tools in Google Sheets to standardize merchant addresses, compare data with reference sheets, reduce manual work, and minimize errors.', 
      tech: 'Google Apps Script, Google Sheets', 
      images: ['sm1.png', 'sm2.png', 'sm3.png']
    },
    { 
      title: 'Library Information System', 
      desc: 'Built a library management system with QR Code using Laravel and MySQL. Features: Book Management, Borrowing, Returns, Fines, Reports, QR Code.', 
      tech: 'Laravel, PHP, Bootstrap, MySQL',
      images: ['projek1.png', 'projek2.png', 'projek3.png', 'projek4.png', 'projek5.png']
    },
    { 
      title: 'GoPark - Parking Reservation App', 
      desc: 'A complete parking reservation application with real-time availability, map view, filtering, and booking management.', 
      tech: 'React Native, Firebase, Google Maps API',
      images: ['gp1.png', 'gp2.png', 'gp3.png']
    },
    { 
      title: 'POS Tiga Dara Mart', 
      desc: 'A web-based point-of-sale system for retail management. Features include inventory management, sales transactions, reporting, stock alerts.', 
      tech: 'PHP, Bootstrap, MySQL, JavaScript',
      images: ['7.png', '8.png', '9.png', '10.png', '11.png', '12.png']
    }
  ];

  useEffect(() => {
    const initialIndices = {};
    projects.forEach((_, index) => {
      initialIndices[index] = 0;
    });
    setCurrentIndices(initialIndices);

    const intervals = projects.map((project, index) => {
      return setInterval(() => {
        setCurrentIndices(prev => ({
          ...prev,
          [index]: (prev[index] + 1) % project.images.length
        }));
      }, 3000);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section id="hero" className="min-vh-100 d-flex align-items-center" style={{ paddingTop: '90px' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <h1 className="display-4 fw-bold">Febyan Putra Hermawan</h1>
              <h3 className="fs-4 fw-light text-primary-emphasis">Information Systems Graduate · Process Automation · Web Developer</h3>
              <p className="lead mt-3 text-secondary">Information Systems graduate with experience in merchant verification, content registration, process automation, and web development.</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="/cvfebyan.pdf" className="btn btn-primary" style={{ borderRadius: '60px', padding: '10px 28px' }}>Download CV</a>
                <a href="#projects" className="btn btn-outline-primary" style={{ borderRadius: '60px', padding: '10px 28px' }}>View Projects</a>
              </div>
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="btn btn-outline-secondary rounded-circle"><i className="bi bi-github"></i></a>
                <a href="#" className="btn btn-outline-secondary rounded-circle"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="btn btn-outline-secondary rounded-circle"><i className="bi bi-envelope"></i></a>
                <a href="#" className="btn btn-outline-secondary rounded-circle"><i className="bi bi-whatsapp"></i></a>
              </div>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <img src="/pp.png" className="rounded-circle" style={{ width: '160px', height: '160px', objectFit: 'cover' }} alt="Febyan" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-5" style={{ background: 'rgba(13,148,136,0.02)' }}>
        <div className="container">
          <h2 className="section-title mb-5" data-aos="fade-up">Projects</h2>
          <div className="row g-4">
            {projects.map((project, projectIdx) => (
              <div className="col-md-6 col-lg-3" key={projectIdx} data-aos="fade-up">
                <div className="card h-100 border-0 shadow-sm">
                  <img 
                    src={project.images[currentIndices[projectIdx] || 0]} 
                    className="card-img-top" 
                    alt={project.title} 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text small">{project.desc}</p>
                    <span className="badge bg-primary bg-opacity-10 text-primary">{project.tech}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;