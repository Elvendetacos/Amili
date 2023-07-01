import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const loginRedirect = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-[100vmin]  w-[100%] bg-[#F2EAEA] flex justify-center items-center ">
      <div className="h-[80%] w-[35%] bg-white shadow-xl rounded-lg animate-jump-in">
        <form className="h-[90%] w-full" onSubmit={handleSubmit}>
          <div className="h-[70%] w-[100%]">
            <div className="h-1/3 w-full flex justify-center items-center ">
              <div className="relative z-0 w-[80%] xl:text-[20px] 2xl:text-[30px]">
                <input
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 text-[#808080] px-0 w-full bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={e => setName(e.target.value)}
                />
                <label
                  for="floating_standard"
                  className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="h-1/3 w-full flex justify-center items-center ">
              <div className="relative z-0 w-[80%] xl:text-[20px] 2xl:text-[30px]">
                <input
                  type="email"
                  id="floating_standard"
                  className="block py-2.5 text-[#808080] px-0 w-full bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={e => setEmail(e.target.value)}
                />
                <label
                  for="floating_standard"
                  className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="h-1/3 w-full flex justify-center items-center ">
              <div className="relative z-0 w-[80%] xl:text-[20px] 2xl:text-[30px]">
                <input
                  type="password"
                  id="floating_standard"
                  className="block py-2.5 text-[#808080] px-0 w-full bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={e => setPassword(e.target.value)}
                />
                <label
                  for="floating_standard"
                  className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className="h-[30%] w-[100%] flex justify-center items-center">
            <button className="bg-[#B76C47] h-[40%] w-[80%] rounded-sm text-white xl:text-[20px] 2xl:text-[30px] scale-100 hover:scale-[1.01] hover:bg-[#b1775a]">
              Registrarse
            </button>
          </div>
        </form>
        <div className="h-[10%] w-full flex justify-center items-start text-[#616161] xl:text-[15px] 2xl:text-[20px]">
          <p>¿Ya tienes cuenta?</p>
          <p
            className="text-blue-500 pl-1 cursor-pointer"
            onClick={loginRedirect}
          >
            Inicia sesión
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
