import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserStore } from "../store/userStore";
import { shallow } from "zustand/shallow";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [animate, setAnimate] = useState({
    animation: "animate-jump-in",
    staus: false,
  });
  const [alert, setAlert] = useState(
    {
      colorInput: 'focus:border-blue-600',
      colorLabel: 'peer-focus:text-blue-600',
      colorFloat: 'text-gray-500',
      status: false
    }
  );

  const { change } = useUserStore();

  const { userKey } = useUserStore(
    (state) => ({
      userKey: state.userKey,
    }),
    shallow
  );

  useEffect(() => {
    if (Object.keys(userKey).length !== 0) {
      navigate("/Home");
    }
  }, [userKey]);

  const loginUser = () => {
    fetch("http://api-user.us-east-1.elasticbeanstalk.com:8080/auth/signIn", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => change(data))
      .catch((error) => {
        console.error("Error:", error);
        setAnimate({
          animation: "animate-none",
          staus: false,
        });
        setAlert(
            {
              colorInput: 'focus:border-red-600',
              colorLabel: 'peer-focus:text-red-600',
              colorFloat: 'text-red-600',
              status: true
            }
        );
      });
  };

  const registerRedirect = () => {
    navigate("/register");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnimate({
      animation: "animate-pulse",
      staus: true,
    });
    loginUser();
  };

  return (
    <div className="h-[100vmin]  w-[100%] bg-[#F2EAEA] flex justify-center items-center ">
      <div
        className={`h-[70%] w-[35%] bg-white shadow-xl rounded-lg ${animate.animation}`}
      >
        <form className="h-[90%] w-full" onSubmit={handleSubmit}>
          <div className="h-[70%] w-[100%]">
            <div className="h-1/2 w-full flex justify-center items-center ">
              <div className="relative z-0 w-[80%] xl:text-[20px] 2xl:text-[30px]">
                <input
                  type="email"
                  id="floating_standard"
                  className={`block py-2.5 text-[#808080] px-0 w-full bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none ${alert.colorInput} focus:ring-0  peer`}
                  placeholder=" "
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={animate.staus}
                />
                <label
                  for="floating_standard"
                  className={`absolute ${alert.colorFloat} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${alert.colorLabel} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                  Email
                </label>
              </div>
            </div>
            <div className="h-1/2 w-full flex justify-center items-center ">
              <div className="relative z-0 w-[80%] xl:text-[20px] 2xl:text-[30px]">
                <input
                  type="password"
                  id="floating_standard"
                  className={`block py-2.5 text-[#808080] px-0 w-full bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none ${alert.colorInput} focus:ring-0  peer`}
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={animate.staus}
                />
                <label
                  for="floating_standard"
                  className={`absolute ${alert.colorFloat} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${alert.colorLabel} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className="h-[30%] w-[100%] flex flex-col justify-center items-center">
            <button
              className="bg-[#B76C47] h-[40%] w-[80%] rounded-sm text-white xl:text-[20px] 2xl:text-[30px] scale-100 hover:scale-[1.01] hover:bg-[#b1775a]"
              disabled={animate.staus}
            >
              Login
            </button>
            {alert.status && (
                  <div className="flex text-red-600 justify-center items-center">
                    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <p className="text-sm ml-1">
                      Hubo un error, intentelo de nuevo
                    </p>
                  </div>
                )}
          </div>
        </form>
        <div className="h-[10%] w-full flex justify-center items-start text-[#616161] xl:text-[15px] 2xl:text-[20px]">
          <p>¿No tienes cuenta?</p>
          <p
            className="text-blue-500 pl-1 cursor-pointer"
            onClick={registerRedirect}
          >
            Crea una aquí
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
