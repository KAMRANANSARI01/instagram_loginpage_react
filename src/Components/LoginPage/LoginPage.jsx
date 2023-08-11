import { useState } from "react";

function LoginPage(){
    const[login,setLogin] = useState(true)

    function loginSwitch (){
        setLogin(!login);
    }
    return(
        
        <div className="lg:w-[30%] md:w-[40%] sm:w-[60%] w-[70%] flex flex-col justify-center items-center gap-8 mx-auto mt-[70px] mb-[70px] pt-[70px] pb-[70px] shadow-2xl border-[1px] ">
            {/* adding insta logo  */}
            <div className="flex flex-col justify-center items-center " >
                <img className="max-w-[70%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySueVhH9S9r8vpSVMtFnvWxT_txJ7IHXTqHH7GBC6&s" alt="" />
            </div>
            {/* input class container */}
            <div className="flex flex-col justify-center items-center gap-2 w-[100%]">
                {/* input section start here */}
                 <input hidden={login} className="border-[1px] w-[60%] pt-[4px] pl-[10px] pb-[4px] focus:outline-none focus:border-sky-500 " type="text" placeholder="Mobile Number or Email" />
            
                <input hidden={login} className="border-[1px] w-[60%] pt-[4px] pl-[10px] pb-[4px] focus:outline-none focus:border-sky-500 " type="text" placeholder="Full Name" />

                <input className="border-[1px] w-[60%] pt-[4px] pl-[10px] pb-[4px] focus:outline-none focus:border-sky-500 " type="text" placeholder={login?"Phone number ,username or email":"Username"} />

                <input className="border-[1px] w-[60%] pt-[4px] pl-[10px] pb-[4px] placeholder:text-slate-400 focus:outline-none focus:border-sky-500" type="password"  placeholder="Password"/>
                {/* button for login */}
                <button className="border-[1px] w-[60%] pt-[4px]  pb-[4px] rounded-lg bg-[rgba(0,148,246,0.92)] hover:bg-[#0095F6] text-white font-medium mt-2">{login?"Log in":"Sign Up"}</button>

            </div>
            <div className="flex  justify-center items-center gap-1"><p>{login?"Don't have an account?":"have an account?"}</p>
                 <p className="text-[#0095F6] font-medium cursor-pointer" onClick={loginSwitch}>{login?"Sign up":"Login"}</p>
            </div>
        </div>



        
    )
}
export default LoginPage;