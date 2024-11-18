import './blog-page.css'
import Header from '../Header/Header'
import Chevronright from '../../assets/chevron-right.png'
import Footer from '../Footer/Footer'
import BlogPageContent from './blog-page-content/BlogPageContent'
import AdvertisingBanner from '../ReuseComponents/Advertising-banner/AdvertisingBanner'
import HubnexUser from '../ReuseComponents/HappyHubnexUsers/HubnexUser'
import CaseStyCont from '../ReuseComponents/CaseStudyContainer/CaseStyCont'

const Blog_page = () => {
  return (
    <div className='blog-page-container'>
        <Header/>
        <div className="blog-page-nav-portion">
            <span className="shade">Home</span>
            <img src={Chevronright} alt="" />
            <span className="shade">Blogs</span>
            <img src={Chevronright} alt="" />
            What is Delivery Management and Why Does It Matter?
        </div>
        <BlogPageContent/>
        <CaseStyCont/>
        <HubnexUser/>
        <AdvertisingBanner/>
        <Footer/>
    </div>
  )
}

export default Blog_page