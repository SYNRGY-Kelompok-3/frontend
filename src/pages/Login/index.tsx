import { Link } from "react-router-dom";

import Logo from "src/assets/Logo.png";
import Image from "src/components/atoms/Img";

function Login() {
  return (
    <main>
      <div className="flex flex-row">
        <div className="basis-1/2 m-4">
          <div className="h-[100%] bg-[url('src/assets/bg.jpg')] rounded-xl">
            <div className="h-full bg-violet-500 bg-opacity-60 rounded-xl">
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
          <div className="my-[200px] flex justify-center">
            <div className="w-[70%] flex flex-col min-w-0 break-words bg-transparent border-0 lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border shadow">
              <div className="p-6 pb-0 mb-0">
                <div className="font-bold text-xl">Sign In</div>
                <div className="pt-3">Enter your email and password to sign in</div>
              </div>
              <div className="p-6">
                <form role="form">
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center mb-0.5 text-left min-h-6">
                    <input id="rememberMe" className="w-4 h-4 mt-0.5 rounded" type="checkbox" />
                    <label className="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div className="text-center pt-6">
                  <p className="leading-normal text-sm">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500"
                    >
                      {" "}
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
