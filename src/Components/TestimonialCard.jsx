const TestimonialCard = ({ TestimonialImg, TestimonialName, TestimonialDesignation, TestimonialInfo }) => {
    return (
        <>
            <div className="each-testimonial">
                <div className="each-testimonial-img">
                    <img src={TestimonialImg} alt="img" />
                </div>
                <div className="each-testimonial-text">
                    <img src="/Decbase-Interior/Images/quote.svg" alt="img" />
                    <h4>{TestimonialName} <strong>/{TestimonialDesignation}</strong></h4>
                    <p>{TestimonialInfo}</p>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard