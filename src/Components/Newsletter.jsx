const Newsletter = () => {
    return (
        <>
            <section className="newsletter-sec">
                <div className="container">
                    <div className="newsletter-heading text-center">
                        <h2>DON’T FORGET TO SIGN UP</h2>
                        <hr />
                        <p>Find out early about all upcoming promotions and new product releases with our newsletter.</p>
                    </div>
                    <div className="newsletter-form">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-style" placeholder="Enter your email address....." />
                                <button className="common-btn">SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter