import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { globalDataSubject, getGlobalData } from "./models/globalDataModel";

const GlobalDataWrapper = (WrappedComponent: Function, mapStateToProps?: Function): typeof HOC => {
    const HOC = (props: any) => {
        const globalData = getGlobalData();
        const [data, setData] = useState(globalData);

        const prevMappedProps = useRef({});

        useEffect(() => {
            const sub = globalDataSubject.subscribe((newGlobalData: any) => {
                const globalData = getGlobalData();
                // Only update state when props value changes, to avoid unnessary re-renders.
                if (mapStateToProps !== undefined && !_.isEqual(prevMappedProps.current, mapStateToProps(globalData))) {
                    prevMappedProps.current = _.cloneDeep(mapStateToProps(globalData));
                    setData(newGlobalData);
                }
            });
            return () => {
                sub.unsubscribe();
            };
        });

        // Inject props to child component.
        const mappedProps: object = mapStateToProps !== undefined ? mapStateToProps(globalData) : {};

        return (
            <>
                <WrappedComponent {...props} {...mappedProps} />
            </>
        );
    };
    return HOC;
};

export default GlobalDataWrapper;
