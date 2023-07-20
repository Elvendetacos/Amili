import SideBar from "../layouts/sideBar";
import HistoryComponent from "../components/historyComponent";
import { useUserStore } from '../store/userStore'
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import {useFireHistory} from '../store/firebaseHistory'

function History() {

    const {userHistoryData} = useFireHistory(
        (state) => ({
            userHistoryData: state.userHistoryData,
        }),
        shallow
      );

    const {user, userKey} = useUserStore(
        (state) => ({
            userKey: state.userKey,
            user: state.user,
        }),
        shallow
    )

    const {updateDataHistory} =  useFireHistory()

    useEffect(() => {
        updateDataHistory(userKey.jwtToken, user.id)
    }, []);

    return ( 
        <div className="h-[100vmin]  w-[100%] bg-[#F2EAEA] flex">
            <SideBar/>
            <div className="w-[91%] h-full font-Rubik overflow-hidden">
                <div className="2xl:text-[27px] 2xl:font-bold w-[90%] h-[10%] ml-auto mr-auto bg-[#B77859] text-white mt-[2%] drop-shadow-[5px_5px_4px_rgba(0,0,0,0.25)] rounded-md flex justify-center text-center a.m. items-center text-[20px] sticky top-[2%] z-10">
                    <p className="w-1/5">Hour</p>
                    <p className="w-1/5">Humidity</p>
                    <p className="w-1/5">Temperature</p>
                    <p className="w-1/5">Luminosity</p>
                    <p className="w-1/5">Status</p>
                </div>
                <div className="w-auto ml-[10px] h-[100%] pb-[2%] overflow-auto">
                {userHistoryData && userHistoryData.map((item, key)=>(
                    <HistoryComponent key={key} information={item}/>
                ))}
                </div>
            </div>
        </div>
     );
}

export default History;