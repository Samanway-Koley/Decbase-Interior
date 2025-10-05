import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import ServiceCard from "../Components/ServiceCard";
import ServiceIcon1 from '/src/assets/Images/ser1.svg'
import ServiceIcon2 from '/src/assets/Images/ser2.svg'
import ServiceIcon3 from '/src/assets/Images/ser3.svg'

export const HomeService = () => {
    return (
        <>
            <section className="service-sec">
                <div className="container">
                    <div className="service-heading">
                        <div className="row align-items-end">
                            <div className="col-lg-8">
                                <h5>WHAT WE DO</h5>
                                <h2>Our Service</h2>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-control">
                                    <button className="swiper-button-prev common-arrow">
                                        <img src="src/assets/Images/prev.svg" alt="img" />
                                    </button>
                                    <button className="swiper-button-next common-arrow">
                                        <img src="src/assets/Images/next.svg" alt="img" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-slider">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={7}
                            navigation={{
                                prevEl: ".service-sec .swiper-button-prev",
                                nextEl: ".service-sec .swiper-button-next",
                            }}
                            modules={[Navigation]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 7,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 7,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 7,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <ServiceCard
                                    ServiceIcon={ServiceIcon1}
                                    ServiceTitle="Interior Design"
                                    ServiceDescription="We craft spaces that blend aesthetics with functionality, tailored to reflect your personal style."
                                >
                                </ServiceCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ServiceCard
                                    ServiceIcon={ServiceIcon2}
                                    ServiceTitle="Architecture"
                                    ServiceDescription="Our architectural solutions focus on innovation, sustainability, and structural integrity."
                                >
                                </ServiceCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ServiceCard
                                    ServiceIcon={ServiceIcon3}
                                    ServiceTitle="Planning"
                                    ServiceDescription="We offer strategic space planning and project management to ensure efficient layouts and smooth execution."
                                >
                                </ServiceCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ServiceCard
                                    ServiceIcon={ServiceIcon1}
                                    ServiceTitle="Interior Styling"
                                    ServiceDescription="Transform your spaces with curated furniture, decor, and personalized color themes tailored to your taste."
                                >
                                </ServiceCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeService 