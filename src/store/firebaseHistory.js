import { create } from 'zustand'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

export const useFireHistory = create((set)=>({
  userHistoryData: [],
  updateDataHistory : (keyId, userid) => {
    const firebaseConfig = {
      apiKey: "AIzaSyAJlJYGGVx2-9nGlgKkE5wJJj0092Y6MPs",
      authDomain: "amili-7cf9e.firebaseapp.com",
      databaseURL: "https://amili-7cf9e-default-rtdb.firebaseio.com/",
      projectId: "amili-7cf9e",
      storageBucket: "amili-7cf9e.appspot.com",
      messagingSenderId: "850124173621",
      appId: "1:850124173621:web:53b83837825cdf14f7dc7c",
      measurementId: "G-5JQ2VJ8DV2"
    };

  const SetData = ()=>{
    for (let index = 0; index < Object.keys; index++) {
      const element = array[index];
      
    }
  }
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const dataListener = async () => {
    const response = await fetch(`http://api-user.us-east-1.elasticbeanstalk.com:8080/user/statistics/${userid}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + keyId,
      },
    })   
    .catch((error) => {
    console.log(key)
    console.error('Error:', error);
    });
    const recive = await response.json();
      set((state) => ({
        ...state,
        userHistoryData: recive.data,
      })); 
  }


  const count = ref(database, '/amili/statistics')
  onValue(count, (snapshot) => {
    dataListener()
  })
  },

}))