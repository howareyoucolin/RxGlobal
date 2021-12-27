import React, { useRef, useEffect } from "react";
import GlobalDataWrapper from "./global-data/globalDataWrapper";

const Contacts = (props: any): JSX.Element => {
    const renderCount = useRef(1);

    useEffect(() => {
        ++renderCount.current;
    });

    return (
        <div>
            Contacts: (Renders = <b>{renderCount.current}</b>)
            <br />
            I have nothing...
        </div>
    );
};

export default GlobalDataWrapper(Contacts);
