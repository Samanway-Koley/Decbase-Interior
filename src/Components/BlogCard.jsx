import { Link } from "react-router-dom"

const BlogCard = ({ BlogImage, BlogTitle, BlogDescription, BlogLink }) => {
    return (
        <>
            <div className="each-blog">
                <div className="each-blog-img">
                    <div className="each-blog-img-wrap">
                        <img src={BlogImage} alt="Blog" className="w-100" />
                    </div>
                </div>
                <div className="each-blog-text">
                    <h3>{BlogTitle}</h3>
                    <p>{BlogDescription}</p>
                    <Link to={BlogLink} className="common-btn">CONTINUE READING....</Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard