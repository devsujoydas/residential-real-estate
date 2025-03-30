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


const Home = () => {
  return (
    <div>
      <Helmet><title>RRE | Home</title></Helmet>

      <Hero />
      <FeaturedListing />
      <AboutUs />
      <ApartmentListing />
      <Awards />
      <BestProjects />
      <Testimonial />
      <TeamMembers />
      <NewsArticles />

    </div>
  )
}

export default Home