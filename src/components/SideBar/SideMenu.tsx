import SideMenuWrapper from "./SideMenuWrapper.tsx";
import SideBarButton from "./SideBarButton.tsx";
import axios from "axios";

const SideMenu = () => {
    const LogOutRequest = async () => {
        await axios.post("https://localhost:7052/api/users/logout", {}, {
            withCredentials: true
        })
    }
    return (
        <div id="SideMenu" className={"fixed pt-16 z-10 w-48 top-0 left-0 md:w-96 h-screen bg-shark-bg-950 shadow-2xl"}>
            <hr className={"border-none bg-ph-orange-500 h-0.5 mx-2"}/>
            <SideMenuWrapper>
                <SideBarButton text={"Home"} adress={"Home"}/>
                <SideBarButton text={"My Notes"} adress={"MyNotes"}/>
                <SideBarButton text={"My Account"} adress={"Account"}/>
                <SideBarButton text={"Log out"} adress={"LogOut"} click={LogOutRequest}/>
            </SideMenuWrapper>
        </div>
    );
};

export default SideMenu;