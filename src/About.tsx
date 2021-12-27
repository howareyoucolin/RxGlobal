import React, { useRef, useEffect } from "react";
import { globalDataInterface } from "./global-data/globalData.interface";
import { getPageX, setPageX } from "./global-data/models/pagesModel";
import GlobalDataWrapper from "./global-data/globalDataWrapper";

const updatePageX = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    setPageX(value);
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

const mapStateToProps = (data: globalDataInterface) => {
    return {
        x: getPageX(),
    };
};

export default GlobalDataWrapper(About, mapStateToProps);
