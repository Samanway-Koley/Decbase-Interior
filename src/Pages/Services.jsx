import InnerBanner from "../Components/InnerBanner"
import innerBannerImgMain from '/src/assets/Images/service-banner.jpg';
import ServiceCard from "../Components/ServiceCard";
import ServiceIcon1 from '/src/assets/Images/ser1.svg'
import ServiceIcon2 from '/src/assets/Images/ser2.svg'
import ServiceIcon3 from '/src/assets/Images/ser3.svg'

const Services = () => {
    return (
        <>
            <InnerBanner innerBannerImg={innerBannerImgMain} innerBannerHeading="Our Services"></InnerBanner>
            <section className="service-list-sec">
                <div className="container">
                    <div className="service-list-heading text-center">
                        <h2>Our Service</h2>
                        <p>
                            We specialize in creating refined, sophisticated interiors that elevate everyday living. With a focus on quality, detail, and timeless design, our services are crafted for those who seek exceptional interiors. From luxury residences to boutique commercial spaces, our team ensures each design is uniquely curated to reflect your personality and vision.
                        </p>
                    </div>
                    <div className="service-list-main">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon1}
                                    ServiceTitle="Interior Design"
                                    ServiceDescription="We craft spaces that blend aesthetics with functionality, tailored to reflect your personal style."
                                >
                                </ServiceCard>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon2}
                                    ServiceTitle="Architecture"
                                    ServiceDescription="Our architectural solutions focus on innovation, sustainability, and structural integrity."
                                >
                                </ServiceCard>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon3}
                                    ServiceTitle="Planning"
                                    ServiceDescription="We offer strategic space planning and project management to ensure efficient layouts and smooth execution."
                                >
                                </ServiceCard>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon3}
                                    ServiceTitle="Interior Styling"
                                    ServiceDescription="Transform your spaces with curated furniture, decor, and personalized color themes tailored to your taste."
                                >
                                </ServiceCard>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon2}
                                    ServiceTitle="Lighting Design"
                                    ServiceDescription="Create the perfect ambiance with custom lighting layouts that enhance functionality and style.."
                                >
                                </ServiceCard>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon1}
                                    ServiceTitle="Space Planning"
                                    ServiceDescription="Maximize efficiency and flow with smart furniture placement and optimized interior layouts."
                                >
                                </ServiceCard>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon3}
                                    ServiceTitle="Custom Furniture Design"
                                    ServiceDescription="Get furniture crafted specifically for your space, blending aesthetics with functionality seamlessly."
                                >
                                </ServiceCard>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon1}
                                    ServiceTitle="Color Consultation"
                                    ServiceDescription="Choose the perfect palette with expert advice on color schemes that elevate your interior mood and style."
                                >
                                </ServiceCard>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ServiceCard
                                    ServiceIcon={ServiceIcon2}
                                    ServiceTitle="3D Interior Visualization"
                                    ServiceDescription="See your dream space before it's built with realistic 3D models and immersive design previews."
                                >
                                </ServiceCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services