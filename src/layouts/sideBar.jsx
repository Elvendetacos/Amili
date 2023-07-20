import Home from '../assets/images/house-black-silhouette-without-door.png'
import History from '../assets/images/restore.png'
import Statistics from '../assets/images/statistics.png'
import OptionsMenu from '../components/optionsMenu'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

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
    ]

    const { clearTokens } = useUserStore()

    const logOut = () =>{
        clearTokens()
        navigate('/')
    }

    return ( 
        <div className="w-[9%] h-full bg-white drop-shadow-[3px_3px_2px_rgba(0,0,0,0.25)] flex flex-col justify-between font-Rubik text-[15px]">
            <div className="w-full h-[65%]">
                {options.map((item, key)=>(
                    <OptionsMenu key={key} options={item}/>
                ))}
            </div>
            <div className='h-[10%] w-full xl:text-[17px] 2xl:text-[20px] flex justify-center items-center'>
                <p className='cursor-pointer hover:underline hover:underline-offset-1'onClick={logOut}>Log out</p>
            </div>
        </div>
     );
}

export default sideBar;