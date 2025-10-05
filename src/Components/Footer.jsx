import { Link } from "react-router-dom"
import logo from '/src/assets/Images/logo.svg'; 
import SocialIcon1 from '/src/assets/Images/f-fb.svg'; 
import SocialIcon2 from '/src/assets/Images/f-twitter.svg'; 
import SocialIcon3 from '/src/assets/Images/f-insta.svg'; 
import SocialIcon4 from '/src/assets/Images/f-in.svg'; 

export const Footer = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-brief">
                                <div className="footer-logo">
                                    <Link to='/'><img src={logo} alt="img" /></Link>
                                </div>
                                <p>
                                    But i must explain to you all this mistaken idea of dencouncing pleasure.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="footer-info">
                                <div className="each-footer-info">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><a href="#">About Our Company</a></li>
                                        <li><a href="#">Services WE provide</a></li>
                                        <li><a href="#">Career & Opportunity</a></li>
                                        <li><a href="#">Privacy & policy</a></li>
                                        <li><a href="#">Contact US</a></li>
                                    </ul>
                                </div>
                                <div className="each-footer-info">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href="#">About Company</a></li>
                                        <li><a href="#">Our Testimonials</a></li>
                                        <li><a href="#">Latest News</a></li>
                                        <li><a href="#">Our misson</a></li>
                                        <li><a href="#">Get a free Quot</a></li>
                                    </ul>
                                </div>
                                <div className="each-footer-info">
                                    <h4>Contact us</h4>
                                    <p><a href="#">Sagrada Familia, Herba<br /> Street Front USA</a></p>
                                    <p><a href="mailto:">brande@gmail.com</a></p>
                                    <p><a href="tel:002-568423591">002-1234567890</a></p>
                                </div>
                                <div className="each-footer-info footer-social">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li><a href="#"><img src={SocialIcon1} alt="img" /></a></li>
                                        <li><a href="#"><img src={SocialIcon2} alt="img" /></a></li>
                                        <li><a href="#"><img src={SocialIcon3} alt="img" /></a></li>
                                        <li><a href="#"><img src={SocialIcon4} alt="img" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-credit text-center">
                        <p>Copyright @ 2025 <Link to='/'>Decbase</Link>. all right reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
