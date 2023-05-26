import {Outlet} from "react-router-dom";

const MainContent = () => {
    return (
        <div id={"MainContent"}
             className={"fixed w-full z-0 pl-48 md:pl-96 mainContentHeight top-0 lg:pl-96 overflow-scroll"}>
            <Outlet/>
        </div>
    );
};

export default MainContent;