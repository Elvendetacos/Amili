import Home from '../assets/images/house-black-silhouette-without-door.png'
import History from '../assets/images/restore.png'
import Settings from '../assets/images/settings.png'
import Statistics from '../assets/images/statistics.png'
import OptionsMenu from '../components/optionsMenu'
import { useNavigate } from 'react-router-dom'

function sideBar() {

    const navigate = useNavigate()

    const options = [
        {
            image: Home ,
            name: 'Home'
        },
        {
            image: History ,
            name: 'History'
        },
        {
            image: Statistics ,
            name: 'Statistics'
        },
        {
            image: Settings ,
            name: 'Settings'
        },
    ]

    return ( 
        <div className="w-[9%] h-full bg-white shadow-lg flex flex-col justify-between font-Rubik text-[17px]">
            <div className="w-full h-[65%]">
                {options.map((item, key)=>(
                    <OptionsMenu key={key} options={item}/>
                ))}
            </div>
            <div className='h-[10%] w-full xl:text-[17px] 2xl:text-[20px] flex justify-center items-center'>
                <p className='cursor-pointer hover:underline hover:underline-offset-1'onClick={()=>navigate('/')}>Salir</p>
            </div>
        </div>
     );
}

export default sideBar;