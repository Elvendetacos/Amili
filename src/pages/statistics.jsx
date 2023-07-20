import SideBar from "../layouts/sideBar";
import { Graphic } from "../components/grphicData";
import { useEffect } from "react";

function Statistics() {
    return ( 
        <div className="h-[100vmin]  w-[100%] bg-[#F2EAEA] flex">
            <SideBar></SideBar>
            <div className="h-full w-[91%] flex justify-center items-center">
                <div className="h-[70%] w-auto bg-white rounded-md drop-shadow-[3px_3px_2px_rgba(0,0,0,0.25)] p-1">
                    {Graphic()}
                </div>
            </div>
        </div>
     );
}

export default Statistics;