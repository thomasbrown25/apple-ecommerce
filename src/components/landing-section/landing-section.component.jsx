import Cube from '../cube/cube.component';
import Navbar from '../navbar/navbar.component';

const LandingSection = () => {
    return (
        <section className="landing-section">
            <a href="/" className="logo">
                <i className="fab fa-apple"></i>
            </a>

            <Navbar />

            <Cube />

            <div className="landing-section-banner center">
                <h1>&#8592; Best Gift</h1>
                <p>"Creativity is just connecting things.</p>
                <span> - Steve Jobs</span>
                <button type="button">Buy Now</button>
            </div>
        </section>
    );
};

export default LandingSection;
