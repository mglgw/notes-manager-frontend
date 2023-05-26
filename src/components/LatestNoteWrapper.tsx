import {FC, ReactNode} from "react";

const LatestNoteWrapper:FC<{children:ReactNode}> = ({children}) => {
    return (
        <div id={"LatestNoteWrapper"} className={"flex flex-col w-full sm:flex-row mb-3 box-border justify-evenly gap-10"}>
            {children}
        </div>
    );
};
export default LatestNoteWrapper;