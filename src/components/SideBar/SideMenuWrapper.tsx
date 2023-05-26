import {CSSProperties, FC, ReactNode} from "react";

const SideMenuStyle: CSSProperties = {}
const SideMenu: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div style={SideMenuStyle} className={"flex flex-col text-center align-middle justify-center m-3 gap-5 "}>
            {children}
        </div>
    );
};

export default SideMenu;