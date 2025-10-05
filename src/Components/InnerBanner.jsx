const InnerBanner = ({ innerBannerImg, innerBannerHeading }) => {
    return (
        <>
            <section className="inner-banner-sec">
                <div className="inner-banner-img">
                    <img src={innerBannerImg} alt={innerBannerHeading} className="w-100"/>
                </div>
                <div className="inner-banner-text">
                    <div className="container">
                        <h1>{innerBannerHeading}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InnerBanner