import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';

export const HomeBanner = () => {
    return (
        <>
            <section className="banner-sec">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="banner-img">
                                <div className="banner-img-wrap">
                                    <Swiper
                                        autoplay={{
                                            speed: 3000,
                                            delay: 3500,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        modules={[EffectFade, Autoplay]} effect="fade">
                                        <SwiperSlide>
                                            <div className="each-banner">
                                                <img src="src/assets/Images/banner.jpg" alt="img" className="w-100" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="each-banner">
                                                <img src="src/assets/Images/banner2.jpg" alt="img" className="w-100" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="each-banner">
                                                <img src="src/assets/Images/banner3.jpg" alt="img" className="w-100" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="each-banner">
                                                <img src="src/assets/Images/banner4.jpg" alt="img" className="w-100" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h5>MODERN INTERIOR</h5>
                                <h1>Create Your<br />Interior Design.</h1>
                                <p>
                                    Elevate your environment with a design that aligns with your goals and lifestyle. Our professional interior design services offer personalized solutions, combining functionality, aesthetics, and precision. Whether for residential or commercial spaces, we work closely with you to understand your vision and deliver tailored designs that enhance comfort, productivity, and long-term value. Start creating a space that reflects your standards — with expert support every step of the way.
                                </p>
                                <Link to='/contact' className='common-btn'>CONTACT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeBanner
