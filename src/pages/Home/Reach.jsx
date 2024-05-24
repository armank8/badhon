import rohigya from "../../assets/icons/rohigya.png";
import marketing from "../../assets/icons/marketing.png";
import children from "../../assets/icons/children.png";
import wrcrhs from "../../assets/icons/wrcrhs.png";
import rhrs from "../../assets/icons/rhrs.png";
import total from "../../assets/icons/total.png";

export default function Reach() {
  return (
    <div className="max-w-7xl mx-auto mb-20 ">
      <div className="flex items-center">
        <div className="w-[6px] h-16 bg-primary mr-4"></div>
        <h1 className="text-5xl font-medium text-black">Our Reach</h1>
      </div>
      <div className="stats mt-10">
        <div className="stat flex flex-col items-center">
          <img src={total} alt="" />
          <div className="stat-value text-primary">764,618</div>
          <div className="stat-title">Total Reach</div>
        </div>
      </div>
      <div className="stats ">
        <div className="stat flex flex-col items-center">
          <img src={rhrs} alt="" />
          <div className="stat-value text-primary">13112</div>
          <div className="stat-title">Reproductive Health</div>
          <div className="stat-title">Related Service</div>
        </div>
      </div>
      <div className="stats ">
        <div className="stat flex flex-col items-center">
          <img src={wrcrhs} alt="" />
          <div className="stat-value text-primary">12695</div>
          <div className="stat-title">Women Engaged in</div>
          <div className="stat-title">Diverse Livelihoods</div>
          <div className="stat-title">Options</div>
        </div>
      </div>
      <div className="stats ">
        <div className="stat flex flex-col items-center">
          <img src={children} alt="" />
          <div className="stat-value text-primary">297,827</div>
          <div className="stat-title">Children Reached</div>
        </div>
      </div>
      <div className="stats ">
        <div className="stat flex flex-col items-center">
          <img src={marketing} alt="" />
          <div className="stat-value text-primary">29M</div>
          <div className="stat-title">Digital Media Outreach</div>
        </div>
      </div>
      <div className="stats ">
        <div className="stat flex flex-col items-center">
          <img src={rohigya} alt="" />
          <div className="stat-value text-primary">85274</div>
          <div className="stat-title">Rohingya Response</div>
        </div>
      </div>
    </div>
  );
}
