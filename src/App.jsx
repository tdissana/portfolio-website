import './App.css'

function App() {
  const name = "Tharindu Dissanayake";
  const profession = "Software Engineer";
  const projects = [
    {
      title: "Project One",
      description: "A mini ATS project using C++",
      link: "#"
    },
    {
      title: "Project Two",
      description: "An eCommerce Platform using Spring Boot + React",
      link: "https://github.com/tdissana/spring-boot-ecommerce-app"
    },
    {
      title: "Project Three",
      description: "A Calculator Web Application using HTML + CSS + JS",
      link: "https://tdissana.github.io/calculator-web-app/"
    }
  ]

  const currentYear = new Date().getFullYear();

  return (
    <div className='App'>
      {/* Header Section */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}, I love building web applications that solve real world user problems.</p>
      </section>

      {/* Projects Section */}
      <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((projects, index) => (
            <div key={index} className='projects-item'>
              <h3>{projects.title}</h3>
              <h3>{projects.description}</h3>
              <a href={projects.link} target='_blank' rel='noopener noreferrer'>View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, feel free to email me at <a href="mailto:tharindudandissanayake@gmail.com">email</a></p>
      </section>

      {/* Footer Section */}
      <section id='footer' className='footer-section'>
        <p>©{currentYear} All Rights Reserved</p>
      </section>
      
    </div>
  );
}

export default App