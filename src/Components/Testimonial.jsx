import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialCard from "../Components/TestimonialCard";
import TestimonialImg1 from '/src/assets/Images/client1.jpg';
import TestimonialImg2 from '/src/assets/Images/client2.jpg';
import TestimonialImg3 from '/src/assets/Images/client3.jpg';
import NextArrow from '/src/assets/Images/next.svg'
import PrevArrow from '/src/assets/Images/prev.svg'

import { Link } from "react-router-dom";

const Testimonial = () => {
    return (
        <>
            <section className="testimonial-sec">
                <div className="container">
                    <div className="testimonial-heading text-center">
                        <h5>TESTIMONIALS</h5>
                        <h2>Client says about us</h2>
                    </div>
                    <div className="testimonial-slider">
                        <div className="testimonial-control">
                            <div className="swiper-button-prev common-arrow">
                                <img src={PrevArrow} alt="img" />
                            </div>
                            <div className="swiper-button-next common-arrow">
                                <img src={NextArrow} alt="img" />
                            </div>
                        </div>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={40}
                            navigation={{
                                prevEl: ".testimonial-sec .swiper-button-prev",
                                nextEl: ".testimonial-sec .swiper-button-next",
                            }}
                            modules={[Navigation]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                992: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg1}
                                    TestimonialName="Charlotte Whitmore"
                                    TestimonialDesignation="Marketing Manager"
                                    TestimonialInfo="The team did a fantastic job transforming my living space! They understood my style perfectly and brought fresh, creative ideas. Everything was handled with professionalism and care. Highly recommend for anyone looking to elevate their home interiors!"
                                >
                                </TestimonialCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg2}
                                    TestimonialName="James Holloway"
                                    TestimonialDesignation="Senior Software Developer"
                                    TestimonialInfo="Amazing attention to detail and flawless execution. They turned my cluttered flat into a calm, stylish space. Very communicative throughout the project and respected my budget. Will definitely work with them again!"
                                >
                                </TestimonialCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialCard
                                    TestimonialImg={TestimonialImg3}
                                    TestimonialName="Sophie Langford"
                                    TestimonialDesignation="Founder & Creative Director"
                                    TestimonialInfo="Loved working with this interior decorator! They blended functionality and aesthetics beautifully. My home now feels cosy yet modern – exactly what I wanted. Great experience from start to finish."
                                >
                                </TestimonialCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="text-center mt-5">
                        <Link to='/testimonial' className="common-btn">More Testimonial</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial