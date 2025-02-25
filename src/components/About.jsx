function About() {
    const name = "Tharindu Dissanayake";
    const profession = "Software Engineer";
    return (
        <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}, I love building web applications that solve real world user problems.</p>
      </section>
    );
}

export default About;