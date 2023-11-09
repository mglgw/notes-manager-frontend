import TopBar from "../TopBar/TopBar.tsx";
import LoginBox from "../LoginBox.tsx";

const Login = () => {
    return (
        <div id="Login" className={"w-screen p-12 left-14 top-0 pt-16"}>
            <TopBar/>
            <LoginBox/>
        </div>
    );
};

export default Login;