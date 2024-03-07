import {FormEvent, useRef} from "react";
import axios from "axios";

const ProfileInfoEdition = () => {
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputCurrentPassword = useRef<HTMLInputElement>(null)
    const inputNewPassword = useRef<HTMLInputElement>(null)
    const inputConfirmNewPassword = useRef<HTMLInputElement>(null)
    const submitPasswordChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = inputEmail?.current?.value;
        const oldPassword = inputCurrentPassword?.current?.value;
        const newPassword = inputNewPassword?.current?.value;
        const confirmNewPassword = inputConfirmNewPassword.current?.value;
        await axios.put("https://localhost:7052/api/users/changepass", {
            email,
            oldPassword,
            newPassword,
            confirmNewPassword
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
    }
    return (
        <div className={"flex flex-col items-center align-middle h-screen"}>
            <form onSubmit={(event) => submitPasswordChange(event)} id={"input-box"}
                  className={"flex flex-col items-center align-middle w-96 h-96 mx-auto  "}>
                <span className={"text-xl p-12"}>My Account</span>
                <input ref={inputEmail} type="email" placeholder={"e-mail"}
                       className={"text-center w-full h-12 my-2 rounded-md"}/>
                <input ref={inputCurrentPassword} id={"current password"} type="password"
                       placeholder={"current password"}
                       className={"text-center w-full h-12 my-2 rounded-md"}
                       required={true}/>
                <input ref={inputNewPassword} id={"new password"} type={"password"} placeholder={"new password"}
                       className={"text-center w-full h-12 my-2 rounded-md"}
                       required={true}/>
                <input ref={inputConfirmNewPassword} id={" confirm new password"} type={"password"}
                       placeholder={"confirm new password"}
                       className={"text-center w-full h-12 my-2 rounded-md"}
                       required={true}/>
                <button type={"submit"}
                        className={"bg-shark-bg-900 text-shark-50 h-12 w- mt-5 hover:bg-shark-bg-950 mb-5"}>Save changes
                </button>
            </form>
        </div>
    );
};

export default ProfileInfoEdition;