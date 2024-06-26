import menu_img_1 from "../../assets/img/who-we-are-header.jpg";
import menu_img_2 from "../../assets/img/what-we-do-header.jpg";

export default function MenuItems({ type, className }) {
  const liClass =
    "flex flex-col justify-center gap-3 text-black hover:text-primary";
  const liContainer = "flex gap-10 px-10 py-10";
  return (
    <div className="flex items-center justify-center">
       <ul
        className={` dropdown-content absolute top-8   z-[1] xl:menu-horizontal lg:min-w-max bg-base-100 rounded-box w-full ${className}`}
      >
        {type === "who_we_are" && (
          <>
            <li>
              <a>MISSION, VISION & VALUES</a>
              <a>HOW WE WORK</a>
              <a>COUNTRY STRATEGY PAPER</a>
            </li>
            <li>
              <a>GOVERNANCE </a>
              <a>
                BOARD & GENERAL <br></br> ASSEMBLY MEMBERS{" "}
              </a>
              <a>LEADERSHIP</a>
            </li>
            <li>
              <a>ACTIONAID PARTNERS</a>
              <a>AWARDS AND RECOGNITION</a>
              <a>OUR CONTRIBUTIONS</a>
              <a>ANNUAL REPORTS</a>
            </li>
            <li>
              <img src={menu_img_1} className="w-72 rounded-md" alt="" />
            </li>
          </>
        )}

        {type === "what_we_do" && (
          <>
            <li>
              <a>WOMEN RIGHTS & GENDER EQUITY</a>
              <a>RESILIENCE & CLIMATE JUSTICE</a>
              <a>RIGHT TO JUST & DEMOCRATIC GOVERNANCE</a>
              <a>YOUNG PEOPLE</a>
            </li>
            <li>
              <a>ROHINGYA RESPONSE</a>
              <a>CHILD SPONSORSHIP</a>
              <a>PROJECTS</a>
              <a>CAMPAIGNS </a>
              <a>GLOBAL PLATFORM</a>
              <a>TRAINING HUB</a>
            </li>

            <li>
              <img src={menu_img_1} className="w-72 rounded-md" alt="" />
            </li>
          </>
        )}


      </ul>
    </div>
  );
}
