import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "src/assets/Logo.png";
import Image from "src/components/atoms/Img";

import Button from "src/components/atoms/Button";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [passwordType, setPasswordType] = useState<string>("password");
  const [emailValidation, setEmailValidation] = useState<boolean>(false);

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (re.test(email)) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <main>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <div className="h-screen bg-[url('src/assets/bglogin.png')] bg-cover">
            <div className="h-full bg-violet-500 bg-opacity-20">
              <div className="py-[160px]">
                <Link to="/" className="flex justify-center">
                  <Image src={Logo} alt={"logo"} className={"w-[25px] h-[25px] mr-2"} />
                  <div className="text-white font-bold text-3xl">Travel.id</div>
                </Link>
              </div>
              <div className="text-center pt-[60px] pb-[400px] mx-36">
                <h4 className="font-bold text-3xl text-white leading-10">"Kepuasan Anda Adalah Misi Kami"</h4>
                <p className="text-white text-xl">
                  Travel.id akan memberikan layanan terbaik dalam menemani perjalanan karena kepuasan anda
                  adalah bagian dari kami.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 m-4">
          <div className="my-[200px] flex">
            <div className="w-[100%] flex flex-col min-w-0 break-words bg-transparent border-0 lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border shadow">
              <div className="p-6 pb-0 mb-0">
                <div className="font-bold text-3xl">Masuk ke Akunmu</div>
                <div className="py-3">
                  <p className="leading-normal">
                    Nikmati perjalananmu bersama kami. Belum punya akun?
                    <Link
                      to="/register"
                      className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500 mx-1"
                    >
                      Daftar
                    </Link>
                  </p>
                </div>
              </div>
              <div className="px-6">
                <form role="form" onSubmit={(e) => e.preventDefault()}>
                  <div className="">
                    <div className="py-2">Email</div>
                    <div className="flex items-center">
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={handleEmail}
                        value={email}
                        className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                      <div className="-ml-8">
                        {email === "" ? (
                          ""
                        ) : emailValidation ? (
                          <i className="fa-regular fa-circle-check text-lime-500"></i>
                        ) : (
                          <i className="fa-regular fa-circle-xmark"></i>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="py-2">Password</div>
                    <div className="flex items-center">
                      <input
                        type={passwordType}
                        placeholder="Password"
                        onChange={handlePassword}
                        value={password}
                        className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                      <Button
                        content={
                          passwordType === "password" ? (
                            <i className="fa-solid fa-eye"></i>
                          ) : (
                            <i className="fa-solid fa-eye-slash"></i>
                          )
                        }
                        type={"button"}
                        onClick={togglePassword}
                        className={"-ml-8"}
                      />
                    </div>
                  </div>
                  <div className="pt-5 flex justify-between items-center text-left min-h-6 ">
                    <div className="flex items-center">
                      <input id="rememberMe" className="w-5 h-5 mt-0.5 rounded" type="checkbox" />
                      <label className="ml-2 font-normal cursor-pointer select-none text-slate-700">
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/lupa-password"
                      className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500"
                    >
                      Lupa Password?
                    </Link>
                  </div>
                  <Button
                    content={"Masuk"}
                    type={"submit"}
                    className={
                      "inline-block w-full my-6 px-16 py-3.5 font-bold leading-normal text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                    }
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
