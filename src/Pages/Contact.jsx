import InnerBanner from "../Components/InnerBanner"
import LocationMap from "../Components/LocationMap";
import innerBannerImgMain from '/src/assets/Images/contact-banner.jpg';

const Contact = () => {
    return (
        <>
            <InnerBanner innerBannerImg={innerBannerImgMain} innerBannerHeading="Contact us"></InnerBanner>
            <section className="contact-form-sec">
                <div className="container">
                    <div className="contact-form-wrap">
                        <div className="contact-form-heading text-center">
                            <h2>Contact Us</h2>
                            <p>
                                Whether you're planning a full home makeover, redesigning a single room, or just looking for expert guidance on your space, our interior design team is here to help. We believe that great design starts with a conversation — so reach out and let’s start creating something beautiful together.
                            </p>
                        </div>
                        <form action="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-style" placeholder="First name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-style" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" className="form-style" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="number" className="form-style" placeholder="Phone number" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea type="text" className="form-style" placeholder="Comments"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button className="common-btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <LocationMap></LocationMap>
        </>
    )
}

export default Contact