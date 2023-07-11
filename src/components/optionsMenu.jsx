import { usePageStore } from "../store/pageStore";
import { shallow } from "zustand/shallow";
import { useNavigate } from "react-router-dom";

function OptionsMenu({ options }) {

    const navigate = useNavigate()

  const {page} = usePageStore(
    (state) => ({
      page: state.page,
    }),
    shallow
  );

  const { change } = usePageStore();

  const homeRedirection = () =>{
    change(options.name)
    if(options.name != 'Home'){
      navigate('/Home/'+options.name)
    }else{
        navigate('/'+options.name)
    }
  } 

  return (
    <>
      {page == options.name ? (
        <div className="w-full h-[25%] flex justify-center items-center flex-col cursor-pointer font-bold text-blue-800 underline underline-offset-1 transition-all duration-75 hover:text-[18px] delay-75">
          <img src={options.image} alt="" className="xl:h-[41%] 2xl:h-[37%]"/>
          <p>{options.name}</p>
        </div>
      ) : (
        <div className="w-full h-[25%] flex justify-center items-center flex-col cursor-pointer font-bold hover:text-blue-800 transition-all duration-75 hover:text-[18px]">
          <img src={options.image} alt="" className="xl:h-[41%] 2xl:h-[37%]" onClick={homeRedirection}/>
          <p>{options.name}</p>
        </div>
      )}
    </>
  );
}

export default OptionsMenu;
