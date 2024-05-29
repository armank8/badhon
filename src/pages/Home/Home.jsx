// import Footer from '../Shared/Footer'
import Explore from '../Shared/Explore'
import SingleBlog from '../Shared/SingleBlog'
import Banner from './Banner'
import Posts from './Posts'
import Reach from './Reach'
import Response from './Response'
import SocialMedia from './SocialMedia'

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <Posts></Posts>
        <Response></Response>
        <Reach></Reach>
        <Explore></Explore>
        <SocialMedia></SocialMedia>
        <SingleBlog></SingleBlog>
        {/* <Footer></Footer> */}
    </div>
  )
}
