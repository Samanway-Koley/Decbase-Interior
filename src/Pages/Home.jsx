import HomeBanner from "../Components/HomeBanner"
import HomeService from "../Components/HomeService"
import AboutUs from "../Components/AboutUs"
import Experience from "../Components/Experience"
import SuccessStories from "../Components/SuccessStories"
import Testimonial from "../Components/Testimonial"
import HomeBlog from "../Components/HomeBlog"
import Newsletter from "../Components/Newsletter"

const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <HomeService></HomeService>
            <AboutUs></AboutUs>
            <Experience></Experience>
            <SuccessStories></SuccessStories>
            <Testimonial></Testimonial>
            <HomeBlog></HomeBlog>
            <Newsletter></Newsletter>
        </>
    )
}
export default Home