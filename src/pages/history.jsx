import SideBar from "../components/sideBar";
import HistoryComponent from "../components/historyComponent";

function History() {

    const Test = [
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
        {
            "hour":"10:00 a.m.",
            "humidity1":"90%",
            "humidity2":"90%",
            "Temperature":"90°C",
            "Luminosity": "20lx",
            "Status": "Danger"
        },
    ]


    return ( 
        <div className="h-[100vmin]  w-[100%] bg-[#F2EAEA] flex">
            <SideBar/>
            <div className="w-[91%] h-full font-Rubik overflow-hidden">
                <div className="2xl:text-[27px] 2xl:font-bold w-[90%] h-[10%] ml-auto mr-auto bg-white mt-[2%] drop-shadow-[5px_5px_4px_rgba(0,0,0,0.25)] rounded-md flex justify-center text-center a.m. items-center text-[20px] sticky top-[2%] z-10">
                    <p className="w-1/6">Hour</p>
                    <p className="w-1/6">Humidity1</p>
                    <p className="w-1/6">Humidity2</p>
                    <p className="w-1/6">Temperature</p>
                    <p className="w-1/6">Luminosity</p>
                    <p className="w-1/6">Status</p>
                </div>
                <div className="w-auto ml-[10px] h-[100%] pb-[2%] overflow-auto">
                {Test.map((item)=>(
                    <HistoryComponent information={item}/>
                ))}
                </div>
            </div>
        </div>
     );
}

export default History;