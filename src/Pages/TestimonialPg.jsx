import InnerBanner from "../Components/InnerBanner";
import TestimonialCard from "../Components/TestimonialCard"
import TestimonialImg1 from '/src/assets/Images/client1.jpg';
import TestimonialImg2 from '/src/assets/Images/client2.jpg';
import TestimonialImg3 from '/src/assets/Images/client3.jpg';
import TestimonialImg4 from '/src/assets/Images/client4.jpg';
import TestimonialImg5 from '/src/assets/Images/client5.jpg';
import TestimonialImg6 from '/src/assets/Images/client6.jpg';
import TestimonialBannerImg from '/src/assets/Images/review-banner.jpg';

const TestimonialPg = () => {
    return (
        <>
            <InnerBanner innerBannerImg={TestimonialBannerImg} innerBannerHeading="Testimonial"></InnerBanner>
            <section className="testimonial-list-sec">
                <div className="container">
                    <div className="testimonial-list-main">
                        <div className="row">
                            <div className="col-xl-6">
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg1}
                                    TestimonialName="Charlotte Whitmore"
                                    TestimonialDesignation="Marketing Manager"
                                    TestimonialInfo="The team did a fantastic job transforming my living space! They understood my style perfectly and brought fresh, creative ideas. Everything was handled with professionalism and care. Highly recommend for anyone looking to elevate their home interiors!"
                                >
                                </TestimonialCard>
                            </div>
                            <div className="col-xl-6">
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg2}
                                    TestimonialName="James Holloway"
                                    TestimonialDesignation="Senior Software Developer"
                                    TestimonialInfo="Amazing attention to detail and flawless execution. They turned my cluttered flat into a calm, stylish space. Very communicative throughout the project and respected my budget. Will definitely work with them again!"
                                >
                                </TestimonialCard>
                            </div>
                            <div className="col-xl-6">
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg3}
                                    TestimonialName="Sophie Langford"
                                    TestimonialDesignation="Founder & Creative Director"
                                    TestimonialInfo="Loved working with this interior decorator! They blended functionality and aesthetics beautifully. My home now feels cosy yet modern – exactly what I wanted. Great experience from start to finish."
                                >
                                </TestimonialCard>
                            </div>
                            <div className="col-xl-6">
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg4}
                                    TestimonialName="Daniel Prescott"
                                    TestimonialDesignation="Head of Operations"
                                    TestimonialInfo="Incredible design sense and a real eye for colour and texture. They helped me completely reimagine my lounge and dining area. Always punctual, professional, and open to feedback. I'm beyond happy with the final result!"
                                >
                                </TestimonialCard>
                            </div>
                            <div className="col-xl-6">
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg5}
                                    TestimonialName="Emily Cartwright"
                                    TestimonialDesignation="HR Consultant"
                                    TestimonialInfo="I was blown away by the transformation. They made the entire process stress-free and enjoyable. Great balance between my input and their expertise. Can’t stop getting compliments from guests!"
                                >
                                </TestimonialCard>
                            </div>
                            <div className="col-xl-6">
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg6}
                                    TestimonialName="John Smith"
                                    TestimonialDesignation="CEO at Facebook inc"
                                    TestimonialInfo="Loved working with this interior decorator! They blended functionality and aesthetics beautifully. My home now feels cozy yet modern – exactly what I wanted. Great experience from start to finish."
                                >
                                </TestimonialCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialPg