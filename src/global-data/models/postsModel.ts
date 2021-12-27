import _ from "lodash";
import { globalDataInterface } from "../globalData.interface";
import { getGlobalData, setGlobalData } from "./globalDataModel";

export const getPostY = (): number | string => {
    const globalData = getGlobalData();
    return globalData.posts?.y ? globalData.posts.y : "";
};

export const setPostY = (value: number | string): void => {
    const globalData = getGlobalData();
    setGlobalData({
        ...globalData,
        posts: {
            y: value,
        },
    });
    return;
};
