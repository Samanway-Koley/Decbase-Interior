import AboutUs from "../Components/AboutUs"
import Experience from "../Components/Experience"
import InnerBanner from "../Components/InnerBanner"
import innerBannerImgMain from '/src/assets/Images/about-us-banner.jpg';

const About = () => {
    return (
        <>
            <InnerBanner innerBannerImg={innerBannerImgMain} innerBannerHeading="About Us"></InnerBanner>
            <div className="blog-list-heading text-center py-5">
                <div className="container">
                    <h2>About us</h2>
                    <p>
                        We design interiors that balance elegance, functionality, and innovation. Driven by detail and guided by purpose, our work transforms everyday spaces. Every project is a reflection of our commitment to quality and timeless design.
                    </p>
                </div>
            </div>
            <AboutUs></AboutUs>
            <Experience></Experience>
        </>
    )
}

export default About