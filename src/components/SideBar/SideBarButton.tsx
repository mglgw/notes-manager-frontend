import {Link} from "react-router-dom";
import {FC} from "react";

const SideBarButton: FC<{ text: string, adress: string, click?: () => void }> = (props) => {
    return (
        <div id={"SideBarButton"}>
            <Link onClick={props.click} to={props.adress}
                  className={"flex text-ph-orange-50 items-center justify-center w-full h-16" +
                      " rounded-md hover:bg-ph-orange-500 hover:text-shark-900 hover:drop-shadow text-xl"}>{props.text}</Link>
        </div>
    );
};

export default SideBarButton;