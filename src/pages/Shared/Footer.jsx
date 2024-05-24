import footer from "../../assets/img/footer-bg.png";
import womens_care from "../../assets/img/womens-cafe-logo.jpg";
import footer_map from "../../assets/img/Footer-small-map.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        paddingBlock: "5rem",
      }}
      className="bg-blend-darken"
    >
      <div className="footer  p-10  max-w-7xl mx-auto text-white">
        {/* first one */}
        <aside>
          <p>
            <span className="font-bold text-4xl"> ACTIONAID</span>
            <br />
            <span className="text-3xl">BANGLADESH</span>
          </p>
          <p className="flex items-center gap-1 pb-2">
            <IoLocationSharp></IoLocationSharp>
            <span>House SE(C) 5/B (old 8), Road</span>
          </p>
          <span className="pl-3">136, Gulshan 1, Dhaka 1212</span>
          <p className="flex items-center gap-1 pb-2">
            <MdOutlinePhone></MdOutlinePhone> (+880-2) 55044851-57{" "}
          </p>
          <p className="flex items-center gap-1 pb-2">
            <IoMail></IoMail> aab.mail@actionaid.org
          </p>
          <p className="flex items-center gap-1 pb-2">
            <IoMail></IoMail> aab.whistleblowing@actionaid.org
          </p>
          <h2 className="font-bold text-2xl hover:text-primary pt-2">
            Our Global Footprint
          </h2>
          <img src={footer_map} className="w-40 pt-4" alt="" />
        </aside>
        {/* 2nd one */}
        <nav>
          <h2 className="text-2xl font-bold my-2">Knowledge Hub</h2>
          <Link className="link link-hover text-base">Annual Report</Link>
          <Link className="link link-hover">Publications</Link>

          <h2 className="text-2xl font-bold mt-5">Projects</h2>
          <Link className="link link-hover">Happy Home</Link>
          <Link className="link link-hover">FGG III</Link>
          <Link className="link link-hover">WSFL</Link>
        </nav>
        {/* 3rd */}
        <nav>
          <h2 className="text-2xl font-bold my-2">Campaigns</h2>
          <Link className="link link-hover">Annual Report</Link>
          <Link className="link link-hover">Publications</Link>

          <h2 className="text-2xl font-bold my-2">Media Room</h2>
          <Link className="link link-hover">Press Relese</Link>
          <Link className="link link-hover">Media Coverage</Link>
          <Link className="link link-hover">Careers</Link>
          <h2 className="text-2xl font-bold my-2">Women's Cafe</h2>
          <img src={womens_care} className="pt-4 w-28" alt="" />
        </nav>
        <nav>
          <h2 className="text-2xl font-bold my-2">ActionAid Bangladesh</h2>
          <h2 className="text-2xl font-bold my-2">Newsletter</h2>
          <h2 className="text-2xl font-bold my-2">Social Media</h2>
          <div></div>
          <Link className="link link-hover text-base">Terms & Conditions</Link>
          <Link className="link link-hover text-base">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
