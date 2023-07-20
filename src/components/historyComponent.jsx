function HistoryComponent({information}) {

  const completeData = information.date
  const splitDate = () =>{
    let arraySplit = completeData.split(' ')
    let hour = arraySplit[1].split(':', 2)
    return <p className="w-1/5">{hour[0] + ':' + hour[1]}</p>
  }

  return (
    <div className="2xl:text-[25px] w-[90%] h-[10%] ml-auto mr-auto bg-white mt-[2%] drop-shadow-[5px_5px_4px_rgba(0,0,0,0.25)] rounded-md flex justify-center text-center items-center text-[20px]">
      {
        splitDate()
      }
      <p className="w-1/5">{information.median}</p>
      <p className="w-1/5">{information.temperature}</p>
      <p className="w-1/5">{information.lux}</p>
      <p className="w-1/5">{information.status}</p>
    </div>
  );
}

export default HistoryComponent;
