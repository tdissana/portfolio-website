function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <section id='footer' className='footer-section'>
            <p>©{currentYear} All Rights Reserved</p>
        </section>
    );
}

export default Footer;