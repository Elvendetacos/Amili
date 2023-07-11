import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { shallow } from "zustand/shallow";

export const ProtectedRoutes = ({
    user, children, redirectTo = "/" 
}) =>{

    const {userKey} = useUserStore(
        (state) => ({
          userKey: state.userKey
        }),
        shallow
      );

    if(Object.keys(userKey).length == 0){
        return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet/>
}