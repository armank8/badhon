import { TfiYoutube } from "react-icons/tfi";
import YouTube from "react-youtube";
// import { FacebookEmbed } from "react-social-media-embed";
export default function SocialMedia() {
  const opts = {
    height: "390",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  // _onReady(event) {
  //   event.target.pauseVideo();
  // }
  return (
    <div className="bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto my-20 ">
        {/* title */}
        <div className="flex items-center my-10">
          <div className="w-[6px] h-16 bg-primary mr-4"></div>
          <h1 className="text-5xl font-medium text-black">Social Media</h1>
        </div>

        {/* Social body */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* youtube */}
          <div className="bg-base-100 p-5 rounded">
            <h2 className="flex items-center gap-3 text-3xl text-primary mb-8">
              {" "}
              <TfiYoutube></TfiYoutube> <span className="">Youtube</span>
            </h2>
            {/* <YouTube videoId="AbI690V4EUw" opts={opts}></YouTube> */}
          </div>
          {/* facebook */}
         
          
        </div>
      </div>
    </div>
  );
}
