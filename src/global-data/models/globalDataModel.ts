import _ from "lodash";
import { BehaviorSubject } from "rxjs";
import { globalDataInterface } from "../globalData.interface";

let globalData: globalDataInterface = {};
export const globalDataSubject = new BehaviorSubject(globalData);

export const isGlobalDataInited = (): boolean => {
    return globalData !== {};
};

export const initGlobalData = (): void => {
    // Hard coded for now.
    globalData = {
        pages: { x: 0 },
        posts: { y: 0 },
    };
    globalDataSubject.next(globalData);
    return;
}

export const getGlobalData = (): globalDataInterface => {
    return globalData;
}

export const setGlobalData = (newGlobalData: globalDataInterface): void => {
    globalData = _.cloneDeep(newGlobalData);
    globalDataSubject.next(globalData);
    return;
}
