import Irrigation from "../assets/images/irrigation-system.png";
import WaterLevel from "../assets/images/sea-level.png";
import Time from "../assets/images/time.png";
import Bot from "../assets/images/bot.png";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";
import Youtube from "../assets/images/youtube.svg";
import { useRef } from "react";
import useObserver from "../hooks/useObserver";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const landingInformation = useRef(null)
  const landingFreatures = useRef(null)
  const landingChoose = useRef(null)


  const observerLandingInformation = useObserver(landingInformation)
  const observerLandingFreatures = useObserver(landingFreatures)
  const observerLandingChoose = useObserver(landingChoose)

  const navigate = useNavigate()

  const loginRedirect = () =>{
    navigate("/login")
  }
  const registerRedirect = () =>{
    navigate("/register")
  }
  const homeRedirect = () =>{
    navigate("/key")
  }

  return (
    <div className="h-auto w-[100%] bg-[#F2EAEA] flex flex-col">
      <div className="bg-BannerLanding h-[100vh] w-full bg-no-repeat bg-cover bg-center font-Rubik">
        <div className="w-full h-full backdrop-blur-[3px]">
          <div className="w-auto h-[10%] text-white grid grid-cols-12 gap-8 ml-8 mr-8">
            <div className="col-start-2 col-end-5 flex justify-start items-center">
              <p className="xl:text-[30px] 2xl:text-[35px] ">Welcome!</p>
            </div>
            <div className="col-start-10 col-end-12 flex justify-between items-center xl:text-[17px] 2xl:text-[20px]">
              <p className="w-[30%] flex justify-center items-center cursor-pointer" onClick={loginRedirect}>
                Sing In
              </p>
              <div className="w-[55%] h-[50px] bg-[#B76C47] rounded-full flex justify-center items-center cursor-pointer" onClick={registerRedirect}>
                <p>Sing Up</p>
              </div>
            </div>
          </div>
          <div className="w-auto h-[90%] text-white grid grid-cols-12 gap-8 ml-8 mr-8">
            <div className="h-[65%] col-start-2 col-end-7 mt-auto mb-auto font-Rubik">
              <div className="w-full h-[10%] font-semibold xl:text-[20px] 2xl:text-[30px]">
                <p className="animate-fade-left">
                  Optimize Your Vermicomposting with Real-time Monitoring using
                </p>
              </div>
              <div className="w-full h-[60%] mt-auto font-Script xl:text-[170px] 2xl:text-[250px] text-center">
                <p className="animate-fade-left">Amili</p>
              </div>
              <div className="w-full h-[20%] xl:text-[20px] 2xl:text-[25px]">
                <p className="animate-fade-left">
                  The best way to know the state of your worms through various
                  sensors for their care.
                </p>
              </div>
              <div className="w-full h-[10%]">
                <button className="w-2/5 h-full animate-fade-up rounded-full bg-[#B76C47] drop-shadow-[0_6px_12px_rgba(249,192,106,0.22)] cursor-pointer xl:text-[16px] 2xl:text-[20px]" onClick={homeRedirect}>
                  Go to AMILI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[350px] mt-[82px] flex justify-center items-center" ref={landingInformation}>
        { observerLandingInformation &&
        <div className="w-[90%] h-[90%] flex font-Playfair justify-between">
          <div className="w-[45%] h-full flex flex-col">
            <p className="xl:text-[50px] 2xl:text-[60px] font-bold mt-[5%] text-[#FF782C] animate-fade-down">
              What is AMILI ?
            </p>
            <p className="xl:text-[20px] 2xl:text-[25px] text-justify mt-[2%] text-[#808080] animate-fade-up">
              Amili is an IoT software that monitors the condition of your
              vermicompost bins by measuring factors such as temperature,
              humidity, and light in the surrounding environment. Its purpose is
              to provide an overall assessment of the well-being and quality of
              life for your worms.
            </p>
          </div>
          <div className="w-1/2 h-full ">
            <div className="h-full w-full bg-Worm bg-blend-multiply bg-[#F2EAEA] bg-no-repeat bg-center animate-fade"></div>
          </div>
        </div>}
      </div>
      <div className="w-auto xl:h-[530px] 2xl:h-[650px] mt-[82px] grid grid-cols-12 ml-8 mr-8 gap-8 font-Playfair" ref={landingFreatures}>
        { observerLandingFreatures &&
        <div className="h-full col-start-2 col-end-12 flex justify-between flex-col">
          <div className="h-[20%] w-full text-center animate-fade-down">
            <p className="xl:text-[45px] 2xl:text-[55px] font-bold text-[#FF782C] ">
              Why are we different?
            </p>
            <p className="xl:text-[18px] 2xl:text-[22px] text-[#808080]">
              No need to download anything.
            </p>
          </div>
          <div className="h-[70%] w-full flex justify-between items-center">
            <div className="h-full w-[30%] bg-white drop-shadow-[5px_5px_4px_rgba(0,0,0,0.25)] hover:scale-[1.01] hover:transition-all animate-fade-up">
              <div className="w-full h-1/2 flex justify-center items-center">
                <img
                  src={Irrigation}
                  alt=""
                  className="object-contain w-[28%]"
                />
              </div>
              <div className="w-[80%] ml-[10%] h-1/2 text-center font-Playfair">
                <p className="xl:text-[25px] 2xl:text-[30px] font-bold text-[#FF782C]">
                  Irrigation system
                </p>
                <p className="xl:text-[20px] 2xl:text-[25px] text-[#808080] mt-[2%]">
                  Keep your worms thriving with our automatic soil moisturizer.
                </p>
              </div>
            </div>
            <div className="h-full w-[30%] bg-white drop-shadow-[5px_5px_4px_rgba(0,0,0,0.25)] hover:scale-[1.01] hover:transition-all animate-fade-up">
              <div className="w-full h-1/2 flex justify-center items-center">
                <img
                  src={WaterLevel}
                  alt=""
                  className="object-contain w-[28%]"
                />
              </div>
              <div className="w-[80%] ml-[10%] h-1/2 text-center font-Playfair">
                <p className="xl:text-[25px] 2xl:text-[30px] font-bold text-[#FF782C]">
                  Water level display
                </p>
                <p className="xl:text-[20px] 2xl:text-[25px] text-[#808080] mt-[2%]">
                  {" "}
                  Easily monitor the water level in your worm habitat.
                </p>
              </div>
            </div>
            <div className="h-full w-[30%] bg-white drop-shadow-[5px_5px_4px_rgba(0,0,0,0.25)] hover:scale-[1.01] hover:transition-all animate-fade-up">
              <div className="w-full h-1/2 flex justify-center items-center">
                <img src={Time} alt="" className="object-contain w-[28%]" />
              </div>
              <div className="w-[80%] ml-[10%] h-1/2 text-center font-Playfair">
                <p className="xl:text-[25px] 2xl:text-[30px] font-bold text-[#FF782C]">
                  Real time monitoring
                </p>
                <p className="xl:text-[20px] 2xl:text-[25px] text-[#808080] mt-[2%]">
                  Stay informed with real-time information.
                </p>
              </div>
            </div>
          </div>
        </div>}
      </div>
      <div className="w-auto xl:h-[530px] 2xl:h-[650px] mt-[82px] grid grid-cols-12 ml-8 mr-8 gap-8 font-Playfair" ref={landingChoose}>
        <div className="h-full col-start-2 col-end-12 flex justify-between flex-col">
          {observerLandingChoose &&
            <>
          <div className="w-full h-[20%] text-center font-Playfair col-start-2 col-end-12 flex justify-center items-center">
            <p className="xl:text-[45px] 2xl:text-[55px] font-bold text-[#FF782C] animate-fade-down">
              Why choose AMILI?
            </p>
          </div>
          <div className="w-full h-[80%] flex justify-between items-center">
            <div className="w-[65%] h-full animate-fade-up">
              <p className="xl:text-[30px] 2xl:text-[35px] text-[#FF782C] font-bold">
                Convenient Access
              </p>
              <ul className="list-disc text-[#808080] xl:text-[23px] 2xl:text-[27px] w-[90%] ml-[5%]">
                <li>Access your monitoring dashboard anytime, anywhere.</li>
                <li>Use your unique key for seamless connectivity.</li>
                <li>Make informed decisions for optimal results.</li>
              </ul>
              <p className="xl:text-[30px] 2xl:text-[35px] text-[#FF782C] font-bold mt-[3%]">
                Easy Installation
              </p>
              <ul className="list-disc text-[#808080] xl:text-[23px] 2xl:text-[27px] w-[90%] ml-[5%]">
                <li>Personal assistance for smooth setup process.</li>
              </ul>
              <p className="xl:text-[30px] 2xl:text-[35px] text-[#FF782C] font-bold mt-[3%]">
                Intuitive Web Application
              </p>
              <ul className="list-disc text-[#808080] xl:text-[23px] 2xl:text-[27px] w-[90%] ml-[5%]">
                <li>User-friendly interface for seamless experience.</li>
                <li>Monitor, adjust settings, and receive alerts.</li>
              </ul>
            </div>
            <div className="w-[35%] h-full flex justify-center items-center">
              <img src={Bot} alt="" className="h-[80%] w-full object-cover animate-fade" />
            </div>
          </div>
          </>
          }
        </div>
      </div>
      <div className="w-full h-[100px] mt-[200px] bg-[#B77859] text-white flex">
        <div className="h-full w-[25%] font-Script text-[45px] flex justify-center items-center">
          <p>Amili</p>
        </div>
        <div className="h-[full] w-[50%] flex justify-center items-center">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" className="ml-[5%]" />
          <img src={Youtube} alt="" className="ml-[5%]" />
          <img src={Twitter} alt="" className="ml-[5%]" />
        </div>
        <div className="h-[full] w-[25%] font-Playfair flex flex-col justify-center items-center">
          <p className="font-bold text-[25px]">Contact Us</p>
          <p className="text-[18px]">+52 961 479 1790</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
