import BackgroundSlider from '../background-slider/background-slider.component';
import LandingSection from '../landing-section/landing-section.component';

const Home = () => {
    const images = [
        require('../../images/slideshow/section-1-bg-1.jpg'),
        require('../../images/slideshow/section-1-bg-2.jpg'),
        require('../../images/slideshow/section-1-bg-3.jpg'),
        require('../../images/slideshow/section-1-bg-4.jpg'),
        require('../../images/slideshow/section-1-bg-5.jpg')
    ];
    return (
        <>
            <BackgroundSlider images={images} duration={5} transition={2} />
            <div className="container">
                <LandingSection />
            </div>
        </>
    );
};

export default Home;
