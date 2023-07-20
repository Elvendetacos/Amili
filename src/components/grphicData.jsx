import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import {useFireHistory} from '../store/firebaseHistory'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    y:{
        min: 50,
        max: 100,
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Humidity',
      },
    },
};

export function Graphic(){
    let hourArray = []
    let  humidity1 = []
    let humidity2 = []
    let humidityMedium = []

    const {userHistoryData} = useFireHistory(
        (state) => ({
            userHistoryData: state.userHistoryData,
        }),
        shallow
    );

        for (let index = 0; index < Object.keys(userHistoryData).length; index++) {
            const completeData = userHistoryData[index].date
            let arraySplit = completeData.split(' ')
            let hour = arraySplit[1].split(':', 2)
            hourArray.push(hour[0] + ':' + hour[1]);
            humidity1.push(userHistoryData[index].humidityAbove)
            humidity2.push(userHistoryData[index].humidityBelow)
            humidityMedium.push(userHistoryData[index].median)
            console.log(userHistoryData[index].median)
        }

    const data = {
        labels: hourArray,
        datasets:[
            {
                label: 'Strata 1',
                data: humidity1,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.2,
            },
            {
                label: 'HumidityMedium',
                data: humidityMedium,
                borderColor: 'rgb(255, 206, 86)',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                tension: 0.2,
            },
            {
                label: 'Strata 2',
                data: humidity2,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                tension: 0.2,
            },
        ]
    }
    
    return <Line options={options} data={data} className="h-full w-full"/>
}