import {CSSProperties, FC} from "react";

const HeadingWithIconStyle: CSSProperties = {
    boxSizing: "border-box",
}
const HeadingWithIcon: FC<{ text: string }> = (props) => {
    return (
        <div style={HeadingWithIconStyle} className={"sm:text-lg md:text-xl lg:text-2xl xl:text-4xl text-left p-5"}>
            <div className={"inline "}> {props.text}</div>
        </div>
    );
};

export default HeadingWithIcon;