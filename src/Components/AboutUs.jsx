import { Link } from "react-router-dom"

export const AboutUs = () => {
    return (
        <>
            <section className="about-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <div className="about-img-wrap">
                                    <img src="src/assets/Images/about-img1.jpg" alt="img" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">
                                <h5>ABOUT US</h5>
                                <h2>Interioris The Will of An Epoch Mextreo</h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, sure there isn't anything embarrassing hidden the middleof text. All the Lorem Ipsum generators on the Internettend to repeat predefined chunks as necessary,making this the first true generator on the Internet.
                                </p>
                                <Link to='/about' className="common-btn">LEARN MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs