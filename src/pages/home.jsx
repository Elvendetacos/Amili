import SideBar from "../layouts/sideBar";
import { useEffect, useState } from "react";
import iconTemperature from "../assets/images/temperature.png";
import iconLigth from "../assets/images/sun.png";
import Worms from "../assets/images/Worms.png";
import Tank from "../assets/images/reservoir.png";
import DropWater from "../assets/images/dropWater.png";
import Strata from "../assets/images/strata_icon.svg";
import { useUserStore } from "../store/userStore";
import { useFireStore } from '../store/firebaseStore'
import { shallow } from "zustand/shallow";


function Home() {
  const [weekday, setWeekday] = useState();
  const [hour, setHour] = useState();
  const [currentDate, setCurrentDate] = useState();

  const {userKey, user} = useUserStore(
    (state) => ({
      userKey: state.userKey,
      user: state.user
    }),
    shallow
  );

  const {sensorData} = useFireStore(
    (state) =>({
      sensorData: state.sensorData
    }),
    shallow
  )

  const Test = {
    temperature: 20,
    luxes: 28,
    humidity: {
      strata1: 30,
      strtata2: 20,
    },
    tank: 50,
    status: "Danger",
  };


  const { getUser } = useUserStore()
  const { updateData } = useFireStore()

  useEffect(()=>{
    let dateNew = new Date();
    let weekdayTemp = { weekday: "long" };
    let hourTemp = { hour: "2-digit", minute: "2-digit" };
    let dateTemp = { year: "numeric", month: "long", day: "numeric" };

    setWeekday(dateNew.toLocaleString("en-US", weekdayTemp));
    setCurrentDate(dateNew.toLocaleString("en", dateTemp));
    setHour(dateNew.toLocaleTimeString("en-US", hourTemp));
    getUser(userKey.username, userKey.jwtToken)
    updateData()
  },[])


  return (
    <div className="h-[100vmin]  w-[100%] bg-[#F2EAEA] flex">
      <SideBar />
      <div className="h-full w-[91%] overflow-hidden">
        <div className="w-full h-[60%] bg-Banner bg-no-repeat bg-cover bg-center flex flex-col overflow-hidden">
          <div className="w-full h-full backdrop-blur-[4px]">
            <div className="w-full h-[25%] flex text-black font-Rubik">
              <div className="w-[50%] h-full text-[30px] pt-[30px] pl-[30px]">
                <p>Welcome, Admin!</p>
              </div>
              <div className="w-[50%] h-full text-[15px] flex flex-col items-end pt-[30px] pr-[30px]">
                <p>{weekday}</p>
                <p>{hour}</p>
                <p>{currentDate}</p>
              </div>
            </div>
            <div className="w-full h-[50%] flex font-Rubik text-white relative before:absolute before:inset-0 before:bg-[#934527] before:blur-[250px]">
              <div className="h-full w-full flex relative">
                <div className="w-1/3 h-full flex flex-col justify-center items-center">
                  <img
                    src={iconTemperature}
                    alt=""
                    className="h-[32px] w-[32px]"
                  />
                  <div className="h-[50%] flex justify-center items-start">
                    <p className="xl:text-[70px] 2xl:text-[90px]">
                      {sensorData.temperature}
                    </p>
                    <p className="xl:text-[20px] 2xl:text-[30px]">°C</p>
                  </div>
                  <p className="xl:text-[20px] 2xl:text-[30px]">Temperature</p>
                </div>
                <div className="w-1/3 h-full flex justify-center items-center animate-jump-in">
                  <div className="xl:w-[48%] drop-shadow-[5px_5px_4px_rgba(0,0,0,0.25)] 2xl:w-[55%] h-full rounded-full bg-[#FF5C00] flex justify-center items-center">
                    <div className="xl:w-[95%] 2xl:w-[95%] h-[95%] rounded-full bg-gradient-to-t from-[rgba(214,140,70,0.70)] via-[rgb(214,140,70)] to-[rgba(214,140,70,0.50)] flex flex-col justify-center items-center">
                      <img src={Worms} alt="" className="h-[32px] w-[32px]" />
                        {
                          sensorData.temperature < 27 && sensorData.temperature > 20 && sensorData.humidity1 > 80 && sensorData.humidity1 < 90 ? (
                            <p className="xl:text-[45px] 2xl:text-[55px] h-[50%] flex justify-center items-center">Good</p>
                          ) : (
                            <p className="xl:text-[45px] 2xl:text-[55px] h-[50%] flex justify-center items-center">Danger</p>
                          )
                        }
                      <p className="xl:text-[20px] 2xl:text-[30px]">Status</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 h-full flex flex-col justify-center items-center">
                  <img src={iconLigth} alt="" className="h-[32px] w-[32px]" />
                  <div className="h-[50%] flex justify-center items-start">
                    <p className="xl:text-[70px] 2xl:text-[90px]">
                      {sensorData.light}
                    </p>
                    <p className="xl:text-[20px] 2xl:text-[30px]">lx</p>
                  </div>
                  <p className="xl:text-[20px] 2xl:text-[30px]">Inside ligth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[40%] flex font-Rubik text-[#808080]">
          <div className="w-[62.5%] h-[90%] m-auto bg-white shadow-xl rounded-md animate-fade-up animate-duration-150">
            <div className="w-auto h-[8%] flex mt-[10px] ml-[10px] xl:text-[20px] 2xl:text-[30px]">
              <img src={DropWater} alt="" className="h-auto w-auto" />
              <p className="flex justify-center items-center">
                Strata Humidity
              </p>
            </div>
            <div className="w-full h-[90%] flex justify-around items-center">
              <div className="h-[90%] w-[40%] text-black flex flex-col justify-center items-center">
                <img src={Strata} alt="" className="xl:h-[25%] 2xl:h-[30%]" />
                <p className="flex justify-center items-center xl:text-[50px] 2xl:text-[80px]">
                  {sensorData.humidity1}%
                </p>
                <p className="flex justify-center items-center xl:text-[20px] 2xl:text-[35px]">
                  Strata 1
                </p>
              </div>
              <div className="h-[90%] w-[40%] text-black flex flex-col justify-center items-center">
                <img src={Strata} alt="" className="xl:h-[25%] 2xl:h-[30%]" />
                <p className="flex justify-center items-center xl:text-[50px] 2xl:text-[80px]">
                  {sensorData.humidity2}%
                </p>
                <p className="flex justify-center items-center xl:text-[20px] 2xl:text-[35px]">
                  Strata 2
                </p>
              </div>
            </div>
          </div>
          <div className="w-[32.5%] h-[90%] m-auto bg-white shadow-xl rounded-md animate-fade-up animate-duration-150">
            <div className="w-auto h-[8%] flex mt-[10px] ml-[10px] xl:text-[20px] 2xl:text-[30px]">
              <img src={Tank} alt="" className="h-auto w-auto" />
              <p className="flex justify-center items-center">Water Tank</p>
            </div>
            <div className="w-full h-[90%] flex justify-center items-center">
              <div className="h-[80%] w-[68%] absolute bg-Tank bg-no-repeat bg-contain bg-center flex justify-center items-end">
                <div className="h-[75%] w-[53%] m-[4%] flex justify-center items-center bg-[#80c5de] relative rounded-xl before:w-[200%] before:h-[200%] before:absolute before:bg-[#ececec] before:top-[-150%] before:left-[-50%] before:rounded-[40%] before:animate-liquid after:w-[204%] after:h-[204%] after:bg-[#ececec80] after:absolute after:top-[-150%] after:left-[-52%] after:rounded-[40%] after:animate-liquid after:animate-delay-[500ms] overflow-hidden">
                  {sensorData.waterLevel == 1 ? (
                    <p className="text-black xl:text-[30px] 2xl:text-[50px] relative">+50%</p>
                  ) : (
                    <p className="text-black xl:text-[30px] 2xl:text-[50px] relative">-50%</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
