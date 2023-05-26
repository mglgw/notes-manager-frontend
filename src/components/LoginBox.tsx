import {FormEvent, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginBox = () => {
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const inputRememberMe = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();
    const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = inputEmail?.current?.value;
        const password = inputPassword?.current?.value;
        const rememberMe = inputRememberMe?.current?.value;
        const res = await axios.post("https://localhost:7052/api/users/login", {email, password}, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (res.status === 200) {
            navigate("/Home");
        }

    }

    return (
        <div id={"loginbox"} className={" h-full w-auto"}>
            <div className={"w-96 h-96 mx-auto "}>
                <form onSubmit={(event) => submitLogin(event)} id={"loginholder static"}
                      className={"flex flex-col items-center align-middle bg-ph-orange-500 h-full rounded-md shadow-md shadow-ph-orange-500  p-12"}>
                    <div className={"text-shark-bg-900 text-3xl font-bold ml-2"}>Log In</div>
                    <h2 className={"text-shark-bg-900 font-bold text-xl"}>Your email</h2>
                    <input type={"email"} placeholder={"email"} ref={inputEmail} value={"papiez2137@watykan.com"}
                           className={"h-12 w-full  rounded-md hover:bg-shark-bg-950 p-2.5"} required={true}/>
                    <h2 className={"text-shark-bg-900 font-bold text-xl"}>Your password</h2>
                    <input type={"password"} placeholder={"••••••••"} ref={inputPassword} value={"Papiez123!"}
                           className={"h-12 w-full rounded-md hover:bg-shark-bg-950 p-2.5"} required={true}/>
                    <button type={"submit"}
                            className={"bg-shark-bg-900 text-shark-50 h-12 w-full mt-5 hover:bg-shark-bg-950 mb-5"}> Login
                    </button>
                    <div className={"flex self-start items-center align-middle "}>
                        <input type="checkbox" id="rememberme" name="rememberme" ref={inputRememberMe}
                               className={"w-4 h-4 rounded-md"}/>
                        <span className={"pl-2 text-shark-bg-900"}>Remember me</span>
                        <span className={"pl-8 text-shark-bg-900"}> Forgot Password?</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginBox;