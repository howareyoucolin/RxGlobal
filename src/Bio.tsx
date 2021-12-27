import React, { useRef, useEffect } from "react";
import { globalDataInterface } from "./global-data/globalData.interface";
import { getPostY, setPostY } from "./global-data/models/postsModel";
import GlobalDataWrapper from "./global-data/globalDataWrapper";

const updatePageX = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    setPostY(value);
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
            <input type="text" value={props.x} onChange={updatePageX} />
        </div>
    );
};

const mapStateToProps = (data: globalDataInterface) => {
    return {
        x: getPostY(),
    };
};

export default GlobalDataWrapper(Bio, mapStateToProps);
