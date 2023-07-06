function HistoryComponent({information}) {
  return (
    <div className="2xl:text-[25px] w-[90%] h-[10%] ml-auto mr-auto bg-white mt-[2%] drop-shadow-[5px_5px_4px_rgba(0,0,0,0.25)] rounded-md flex justify-center text-center items-center text-[20px]">
      <p className="w-1/6">{information.hour}</p>
      <p className="w-1/6">{information.humidity1}</p>
      <p className="w-1/6">{information.humidity2}</p>
      <p className="w-1/6">{information.Temperature}</p>
      <p className="w-1/6">{information.Luminosity}</p>
      <p className="w-1/6">{information.Status}</p>
    </div>
  );
}

export default HistoryComponent;
