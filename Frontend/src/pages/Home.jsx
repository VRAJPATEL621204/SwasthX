import doctors from '../assets/doctors.svg';
import folder from '../assets/folder.svg';
import gmail from '../assets/gmail.svg';
import phone from '../assets/phone.svg';
import googlefit from '../assets/google-fit.svg';
import hospital from '../assets/hospital.svg';
import health from '../assets/health.svg';
import whatsapp from '../assets/whatsapp.svg';
import screen from '../assets/screen.webp';
import scroll from '../assets/scroll.webp';
import homebar from '../assets/homebar.webp';
import middle from "../assets/middle.png";
import "../index.css";

function Home() {
  return (
    <>
      <div className="w-full bg-gray-100 pt-16">
        <div className="relative w-full max-w-[70rem] h-[50rem] mx-auto">

          {/* Headings */}
          <div className="text-center pt-10">
            <h1 className="text-6xl text-black font-medium pb-4">Seamless Access with privacy</h1>
            <h2 className="text-3xl text-gray-600">Giving you access to your medical records, anytime, anywhere.</h2>
          </div>

          {/* ==================== SVG PATHS ==================== */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {[
            { id: "path1", d: "M8,38 L15,38 C30,40 11,52 38,51" },
            { id: "path2", d: "M12.5,45 C29,47 10,52 40,51" },
            { id: "path3", d: "M6,51.2 L39,51" },
            { id: "path4", d: "M12,59 C28,56 10,50 42.3,51.3" },
            { id: "path5", d: "M8,66 L18,66 C28,60 14,50 39,51" },
            { id: "path6", d: "M50,50 C60,50 70,50 83,50", delay: "3s", scale: 1.6 }
          ].map(({ id, d, delay = "0s", scale = 1 }) => (
            <g key={id}>
              <path
                id={id}
                d={d}
                stroke="#3B82F6"
                strokeWidth="0.1"
                fill="none"
                strokeLinecap="round"
                {...(id !== "path6" && { strokeDasharray: "0.3" })}
              />
              <polygon points={`0,-${0.6 * scale} ${1 * scale},0 0,${0.6 * scale}`} fill="#3B82F6">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" begin={delay}>
                  <mpath href={`#${id}`} />
                </animateMotion>
              </polygon>
            </g>
          ))}

          </svg>

          
          {/* ==================== ICONS ==================== */}
          <div className="absolute top-[35%] left-[4%] w-[3rem] h-[3rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src={whatsapp} alt="WhatsApp" className="w-[2.5rem] h-[2.5rem]" />
          </div>
          <div className="absolute top-[35%] left-[14%] w-[3rem] h-[3rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src={health} alt="Health" className="w-[2.5rem] h-[2.5rem]" />
          </div>
          <div className="absolute top-[41.5%] left-[9%] w-[3rem] h-[3rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src={folder} alt="Folder" className="w-[2.5rem] h-[2.5rem]" />
          </div>
          <div className="absolute top-[48%] left-[3%] w-[3rem] h-[3rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src={doctors} alt="Doctors" className="w-[2.5rem] h-[2.5rem]" />
          </div>
          <div className="absolute top-[47.5%] left-[14%] w-[3rem] h-[3rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src={hospital} alt="Hospital" className="w-[2.5rem] h-[2.5rem]" />
          </div>
          <div className="absolute top-[55.5%] left-[9%] w-[3rem] h-[3rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src={gmail} alt="Gmail" className="w-[2.5rem] h-[2.5rem]" />
          </div>
          <div className="absolute top-[63%] left-[4.2%] w-[3rem] h-[3rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src={googlefit} alt="Google Fit" className="w-[2.5rem] h-[2.5rem]" />
          </div>
          <div className="absolute top-[62.5%] left-[15%] w-[3rem] h-[3rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src={phone} alt="Phone" className="w-[2.5rem] h-[2.5rem]" />
          </div>

          {/* ==================== CENTER CIRCLE ==================== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] flex items-center justify-center text-center z-10 bg-white rounded-full">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M100,50 a50,50 0 1,1 -100,0 a50,50 0 1,1 100,0" fill="none" />
                <polygon id="triangle" points="0,-4 8,0 0,4" fill="#3B82F6" />
              </defs>

              <use href="#circlePath" stroke="#3B82F6" strokeWidth="1.5" />

              {/* Center image */}
              <image href={middle} x="18" y="18" width="64" height="64" preserveAspectRatio="xMidYMid meet" />

              {/* Arrows rotating around */}
              <use href="#triangle">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyTimes="0; 1" keySplines="0.2 0 0.3 1" calcMode="spline">
                  <mpath href="#circlePath" />
                </animateMotion>
              </use>
              <g transform="rotate(180, 50, 50)">
                <use href="#triangle">
                  <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyTimes="0; 1" keySplines="0.2 0 0.3 1" calcMode="spline">
                    <mpath href="#circlePath" />
                  </animateMotion>
                </use>
              </g>
            </svg>
          </div>

          {/* ==================== PHONE MOCKUP ==================== */}
          <div className="absolute top-[50%] left-[76%] -translate-y-1/2 w-[12rem]">
            <img src={screen} alt="banner_mobile" className="w-full object-contain z-10 relative" />
            <div className="absolute top-[0.7rem] left-1/2 -translate-x-1/2 w-[4rem] h-[0.8rem] bg-black rounded-full z-30"></div>
            <img src={homebar} alt="home_bar" className="w-[90%] mx-auto absolute left-0 right-0 bottom-1.5 object-cover rounded-bl-[1.8rem] rounded-br-[1.8rem] z-11" />
            <div className="absolute inset-[0.5rem] overflow-hidden rounded-[1.6rem] z-10">
              <div className="scroll-loop">
                <img src={scroll} alt="all_records" className="w-full min-h-[200%] object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== TEXT CARDS ==================== */}
      <div className="w-full px-4 pb-12 -mt-32 ">
        <div className="flex flex-col md:flex-row justify-around items-start w-full max-w-6xl space-y-10 md:space-y-0 md:space-x-4 mx-auto">
          {[
            {
              title: "Store",
              text: "Effortlessly organize your medical records with just one click—both digital and physical documents securely stored in one place."
            },
            {
              title: "We Do The Work",
              text: "Let our technology seamlessly manage backend tasks for efficient medical record organization."
            },
            {
              title: "Get Timeline",
              text: "Organize your medical records effortlessly with our timeline, ensuring you never worry about them again. Streamline your health journey with ease."
            }
          ].map((item, idx) => (
            <div key={idx} className="max-w-xs text-center mx-auto">
              <h2 className="font-medium text-3xl mb-2">{item.title}</h2>
              <p className="text-gray-500 text-xl">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
