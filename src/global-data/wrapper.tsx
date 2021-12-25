import React, { useState, useEffect } from "react";
import { globalData, globalDataSubject } from ".";

const GlobalDataWrapper = (WrappedComponent: Function): typeof HOC => {
    const HOC = (props: any) => {
        const [data, setData] = useState(globalData);

        useEffect(() => {
            const sub = globalDataSubject.subscribe((newGlobalData) => {
                setData(newGlobalData);
            });
            return () => {
                sub.unsubscribe();
            };
        });

        return (
            <>
                <WrappedComponent {...props} globalData={data} />
            </>
        );
    };
    return HOC;
};

export default GlobalDataWrapper;
