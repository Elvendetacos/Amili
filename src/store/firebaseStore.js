import { create } from 'zustand'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

export const useFireStore = create((set)=>({
  sensorData: {},
  updateData : () => {
    const firebaseConfig = {
      apiKey: "AIzaSyAJlJYGGVx2-9nGlgKkE5wJJj0092Y6MPs",
      authDomain: "amili-7cf9e.firebaseapp.com",
      databaseURL: "https://amili-7cf9e-default-rtdb.firebaseio.com",
      projectId: "amili-7cf9e",
      storageBucket: "amili-7cf9e.appspot.com",
      messagingSenderId: "850124173621",
      appId: "1:850124173621:web:53b83837825cdf14f7dc7c",
      measurementId: "G-5JQ2VJ8DV2"
    };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const count = ref(database, '/amili/esp32')
  onValue(count, (snapshot) => {
      const data = snapshot.val()
      console.log(data)
      set((state) => ({
          ...state,
          sensorData: data
      }))
  })
  }
}))
