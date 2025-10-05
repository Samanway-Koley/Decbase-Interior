import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import TestimonialPg from "./Pages/TestimonialPg"
import Contact from "./Pages/Contact"
import BlogDetail from "./Pages/BlogDetail"
import ScrollToTop from "./Components/ScrollToTop"

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/testimonial" element={<TestimonialPg />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App


