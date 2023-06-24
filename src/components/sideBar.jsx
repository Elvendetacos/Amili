import Home from '../assets/images/house-black-silhouette-without-door.png'
import History from '../assets/images/restore.png'
import Settings from '../assets/images/settings.png'
import Statistics from '../assets/images/statistics.png'

function sideBar() {
    return ( 
        <div className="w-[9%] h-full bg-white shadow-lg flex flex-col justify-between font-Rubik">
            <div className="w-full h-[65%]">
                <div className="w-full h-[25%] flex justify-center items-center flex-col">
                    <img src={Home} alt="" className='h-[41%]'/>
                    <p>Home</p>
                </div>
                <div className="w-full h-[25%] flex justify-center items-center flex-col">
                    <img src={History} alt="" className='h-[41%]'/>
                    <p>History</p>
                </div>
                <div className="w-full h-[25%] flex justify-center items-center flex-col">
                    <img src={Statistics} alt="" className='h-[41%]'/>
                    <p>Statistics</p>
                </div>
                <div className="w-full h-[25%] flex justify-center items-center flex-col">
                    <img src={Settings} alt="" className='h-[41%]'/>
                    <p>Settings</p>
                </div>
            </div>
            <div className='h-[10%] w-full flex justify-center items-center'>
                <p>Salir</p>
            </div>
        </div>
     );
}

export default sideBar;