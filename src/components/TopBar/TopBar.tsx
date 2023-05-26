import SearchBar from "./SearchBar.tsx";
import Logo from "../SideBar/Logo.tsx";

const TopBar = () => {
    return (
        <div id="TopBar" className={"fixed top-0 left-0 h-16 w-full bg-shark-bg-950 shadow-2xl z-50"}>
            <Logo/>
            <div className={"absolute inset-y-0 right-0 p-3"}>
            <SearchBar/>

            </div>
        </div>
    );
};

export default TopBar;