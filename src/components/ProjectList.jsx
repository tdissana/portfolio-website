function ProjectList() {
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
    return (
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
    );
}

export default ProjectList;