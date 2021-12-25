import React, { useRef, useEffect } from "react";
import { setGlobalData, globalData } from "./global-data";
import GlobalDataWrapper from "./global-data/wrapper";

const updatePageY = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    setGlobalData({
        ...globalData,
        posts: {
            y: value,
        },
    });
};

const Bio = (props: any): JSX.Element => {
    const renderCount = useRef(1);

    useEffect(() => {
        ++renderCount.current;
    });

    return (
        <div>
            Bio: (Renders = <b>{renderCount.current}</b>)
            <br />
            Please put down your name:
            <br />
            <input type="text" value={props.y} onChange={updatePageY} />
        </div>
    );
};

const mapStateToProps = (data: typeof globalData) => {
    return {
        y: data.posts.y ? data.posts.y : '',
    };
};

export default GlobalDataWrapper(Bio, mapStateToProps);