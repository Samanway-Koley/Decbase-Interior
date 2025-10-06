import { Link } from "react-router-dom"
import ExperienceImg from '/src/assets/Images/about-img2.jpg'

const Experience = () => {
    return (
        <>
            <section className="experience-sec">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="experience-img">
                                <div className="experience-img-wrap">
                                    <img src={ExperienceImg} alt="img" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="experience-text">
                                <h3>20</h3>
                                <h2>Years Of Successful <br />Working<br />The Market</h2>
                                <Link to='/about' className="common-btn">LEARN MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience