import _ from "lodash";
import { globalDataInterface } from "../globalData.interface";
import { getGlobalData, setGlobalData } from "./globalDataModel";

export const getPageX = (): number | string => {
    const globalData = getGlobalData();
    return globalData.pages?.x ? globalData.pages.x : "";
};

export const setPageX = (value: number | string): void => {
    const globalData = getGlobalData();
    setGlobalData({
        ...globalData,
        pages: {
            x: value,
        },
    });
    return;
};
