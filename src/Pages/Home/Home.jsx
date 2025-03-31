import { Helmet } from "react-helmet"
import Hero from "../../Components/Hero/Hero"
import FeaturedListing from "../../Components/FeaturedListing/FeaturedListing"
import AboutUs from "../../Components/AboutUs/AboutUs"
import ApartmentListing from "../../Components/ApartmentListing/ApartmentListing"
import Awards from "../../Components/Awards/Awards"
import BestProjects from "../../Components/BestProjects/BestProjects"
import Testimonial from "../../Components/Testimonial/Testimonial"
import TeamMembers from "../../Components/TeamMembers/TeamMembers"
import NewsArticles from "../../Components/NewsArticles/NewsArticles"
import InstaPage from "../../Components/InstaPage/InstaPage"


const Home = () => {
  return (
    <div>
      <Helmet><title>RESIDENTIAL | Home</title></Helmet>

      <Hero />
      <FeaturedListing />
      <AboutUs />
      <ApartmentListing />
      <Awards />
      <BestProjects />
      <Testimonial />
      <TeamMembers />
      <NewsArticles />
      <InstaPage />
    </div>
  )
}

export default Home