import {FC} from "react";

const LatestNote: FC<{ content: string; title: string }> = (props) => {
    console.log(props.title)
    console.log(props.content)
    const domparser = new DOMParser();
    const parsedTitle = domparser.parseFromString(props.title, "text/html");
    const parsedContent = domparser.parseFromString(props.content, "text/html");
    return (
        <div id="Latest note" className={"h-64 w-full rounded-md drop-shadow-md grow bg-ph-orange-500 p-10"}>
            <h1 className={"pb-10 text-4xl line-clamp-3"}> {parsedTitle.body.innerText} </h1>
            <p className={"line-clamp-3"}> {parsedContent.body.innerText} </p>

        </div>
    );
};

export default LatestNote;