import React, { useRef, useEffect } from "react";
import { setGlobalData, globalData } from "./global-data";
import GlobalDataWrapper from "./global-data/wrapper";

const updatePageX = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    setGlobalData({
        ...globalData,
        pages: {
            x: value,
        },
    });
};

const About = (props: any): JSX.Element => {
    const renderCount = useRef(1);

    useEffect(() => {
        ++renderCount.current;
    });

    return (
        <div>
            About: (Renders = <b>{renderCount.current}</b>)
            <br />
            Please put down your name:
            <br />
            <input type="text" value={props.x} onChange={updatePageX} />
        </div>
    );
};

const mapStateToProps = (data: typeof globalData) => {
    return {
        x: data.pages.x ? data.pages.x : '',
    };
};

export default GlobalDataWrapper(About, mapStateToProps);
