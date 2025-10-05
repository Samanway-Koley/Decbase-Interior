import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import BlogCard from "./BlogCard";
import BlogImg1 from '/src/assets/Images/blog1.jpg';
import BlogImg2 from '/src/assets/Images/blog2.jpg';
import BlogImg3 from '/src/assets/Images/blog3.jpg';
import BlogImg4 from '/src/assets/Images/blog4.jpg';
import BlogImg5 from '/src/assets/Images/blog5.jpg';
import BlogImg6 from '/src/assets/Images/blog6.jpg';

const HomeBlog = () => {
    return (
        <>
            <section className="blog-sec">
                <div className="container">
                    <div className="blog-heading text-center">
                        <h5>LETEST NEWS</h5>
                        <h2>From Our Blog</h2>
                    </div>
                    <div className="blog-slider">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={121}
                            autoplay={{
                                speed: 3000,
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 80,
                                },
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 120,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <BlogCard
                                    BlogImage={BlogImg1}
                                    BlogTitle="2020 Interior Design Trends"
                                    BlogDescription="The year 2020 marked a pivotal shift in interior design, blending sustainability with modern aesthetics. Designers across the globe embraced eco-conscious choices, smart technology integration, and a focus on comfort. It was a year where function met"
                                    BlogLink="/blog/1">
                                </BlogCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogCard
                                    BlogImage={BlogImg2}
                                    BlogTitle="28 Notable Product at ARC Interior Design"
                                    BlogDescription="ARC Interior Design is celebrated for offering a thoughtfully curated selection of products that merge innovation, aesthetics, and sustainability. Here, we highlight 28 products that have set the bar in interior design."
                                    BlogLink="/blog/2">
                                </BlogCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogCard
                                    BlogImage={BlogImg3}
                                    BlogTitle="Modern Minimalist Home Ideas"
                                    BlogDescription="Minimalism is more than a design style; it’s a lifestyle that encourages clarity, simplicity, and intentional living. Modern minimalist homes focus on clean lines, functional furniture, and the elimination of clutter to create peaceful and airy environments."
                                    BlogLink="/blog/3">
                                </BlogCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogCard
                                    BlogImage={BlogImg4}
                                    BlogTitle="Top 5 Living Room Makeovers"
                                    BlogDescription="Your living room is the heart of your home — where you relax, entertain, and spend quality time with loved ones. Refreshing this space can significantly uplift the ambiance and comfort of your entire house."
                                    BlogLink="/blog/4">
                                </BlogCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogCard
                                    BlogImage={BlogImg5}
                                    BlogTitle="Eco-Friendly Interior Design Tips"
                                    BlogDescription="Incorporating eco-friendly elements into your home design not only benefits the environment but also creates healthier and more comfortable living spaces. Sustainable interiors emphasize using renewable materials, reducing waste, and improving indoor air quality."
                                    BlogLink="/blog/5">
                                </BlogCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogCard
                                    BlogImage={BlogImg6}
                                    BlogTitle="Choosing the Perfect Lighting for Every Room"
                                    BlogDescription="Lighting is a crucial aspect of interior design, shaping the mood, functionality, and aesthetics of every room. The right lighting can highlight architectural features, create cozy atmospheres, and improve the usability of spaces."
                                    BlogLink="/blog/6">
                                </BlogCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBlog