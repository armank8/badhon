// import Footer from '../Shared/Footer'
import Explore from '../Shared/Explore'
import Banner from './Banner'
import Posts from './Posts'
import Reach from './Reach'
import Response from './Response'

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <Posts></Posts>
        <Response></Response>
        <Reach></Reach>
        <Explore></Explore>
        {/* <Footer></Footer> */}
    </div>
  )
}
