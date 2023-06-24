import SideBar from "../components/sideBar";
import { useEffect, useState } from "react";
import iconTemperature from '../assets/images/temperature.png'
import iconLigth from '../assets/images/sun.png'
import Worms from '../assets/images/Worms.png'
import WaterTank from '../assets/images/waterTank.svg'
import Tank from '../assets/images/reservoir.png'
import DropWater from '../assets/images/dropWater.png'

function Home() {

    const [weekday, setWeekday] = useState();
    const [hour, setHour] = useState();
    const [currentDate, setCurrentDate] = useState();

    useEffect(()=>{
        let dateNew = new Date();
        let weekdayTemp = { weekday: 'long'};
        let hourTemp = { hour:'2-digit', minute: '2-digit' }
        let dateTemp = { year: 'numeric', month: 'long', day: 'numeric' }

        setWeekday(dateNew.toLocaleString('en-US', weekdayTemp))
        setCurrentDate(dateNew.toLocaleString('en', dateTemp))
        setHour(dateNew.toLocaleTimeString('en-US', hourTemp))
        
    })

    return ( 
        <div className="h-[100vmin]  w-[100%] bg-[#F2EAEA] flex">
            <SideBar/>
            <div className="h-full w-[91%] overflow-hidden">
                <div className="w-full h-[60%] bg-Banner bg-no-repeat bg-cover bg-center flex flex-col overflow-hidden">
                    <div className="w-full h-full backdrop-blur-[4px]">
                        <div className="w-full h-[25%] flex text-black font-Rubik">
                            <div className="w-[50%] h-full text-[40px] pt-[30px] pl-[30px]">
                                <p>Welcome!</p>
                            </div>
                            <div className="w-[50%] h-full text-[15px] flex flex-col items-end pt-[30px] pr-[30px]">
                                <p>{weekday}</p>
                                <p>{hour}</p>
                                <p>{currentDate}</p>
                            </div>
                        </div>
                        <div className="w-full h-[50%] flex font-Rubik text-white relative before:absolute before:inset-0 before:bg-[#934527] before:blur-[100px]">
                            <div className="h-full w-full flex relative">
                                <div className="w-1/3 h-full flex flex-col justify-center items-center">
                                    <img src={iconTemperature} alt=""  className="h-[32px] w-[32px]"/>
                                    <div className="h-[50%] flex justify-center items-start">
                                        <p className="xl:text-[70px] 2xl:text-[90px]">95</p>
                                        <p className="xl:text-[20px] 2xl:text-[30px]">%</p>
                                    </div>
                                    <p className="xl:text-[20px] 2xl:text-[30px]">Temperature</p>
                                </div>
                                <div className="w-1/3 h-full flex justify-center items-center">
                                    <div className="xl:w-[50%] 2xl:w-[55%] h-full rounded-full bg-[#FF5C00] flex justify-center items-center">
                                        <div className="xl:w-[95%] 2xl:w-[95%] h-[95%] rounded-full bg-gradient-to-t from-[rgba(214,140,70,0.70)] via-[rgb(214,140,70)] to-[rgba(214,140,70,0.50)] flex flex-col justify-center items-center">
                                        <img src={Worms} alt=""  className="h-[32px] w-[32px]"/>
                                        <p className="xl:text-[45px] 2xl:text-[55px] h-[50%] flex justify-center items-center">Optimum</p>
                                    <p className="xl:text-[20px] 2xl:text-[30px]">Status</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 h-full flex flex-col justify-center items-center">
                                    <img src={iconLigth} alt=""  className="h-[32px] w-[32px]"/>
                                    <div className="h-[50%] flex justify-center items-start">
                                    <p className="xl:text-[70px] 2xl:text-[90px]">95</p>
                                        <p className="xl:text-[20px] 2xl:text-[30px]">lx</p>
                                    </div>
                                    <p className="xl:text-[20px] 2xl:text-[30px]">Inside ligth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[40%] flex font-Rubik text-[#808080]">
                    <div className="w-[62.5%] h-[90%] m-auto bg-white shadow-xl rounded-md">
                        <div className="w-auto h-[8%] flex mt-[2%] ml-[2%] xl:text-[20px] 2xl:text-[30px]">
                            <img src={DropWater} alt="" className="h-[26px] w-[26px]" />
                            <p>Strata Humidity</p>
                        </div>
                        <div className="w-full h-[90%]"></div>
                    </div>
                    <div className="w-[32.5%] h-[90%] m-auto bg-white shadow-xl rounded-md">
                        <div className="w-auto h-[8%] flex mt-[2%] ml-[2%] xl:text-[20px] 2xl:text-[30px]">
                            <img src={Tank} alt="" className="h-[26px] w-[26px]" />
                            <p>Water Tank</p>
                        </div>
                        <div className="w-full h-[90%] flex justify-center items-center">
                            <div className="h-[70%] w-[68%]">
                                <img src={WaterTank} alt="" className="w-full h-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Home;