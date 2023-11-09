import TopBar from "../TopBar/TopBar.tsx";
import RegisterBox from "../RegisterBox.tsx";

const Register = () => {
    return (
        <div id="Register" className={"w-screen p-12 left-14 top-0 pt-16"}>
            <TopBar/>
            <RegisterBox/>
        </div>
    );
};

export default Register;