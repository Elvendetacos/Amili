import { create } from "zustand";

export const useUserStore = create((set) => ({
  userKey: {},
  user: {},
  change: (key) =>
    set((state) => ({
      userKey: key,
    })),
  getUser: async (username, key) => {
    const response = await fetch(`http://api-user.us-east-1.elasticbeanstalk.com:8080/user/${username}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + key,
      },
    })   
    .catch((error) => {
    console.log(key)
    console.error('Error:', error);
    });
    const recive = await response.json();
    const user = recive.data
    console.log(user)
    set((state) => ({
      ...state,
      user,
    }));
  },
  clearTokens: () =>{
    set((state) => ({
      userKey: {}
    }))
  }
}));
