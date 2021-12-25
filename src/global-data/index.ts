import { BehaviorSubject } from "rxjs";

interface GlobalDataObject {
    pages: {
        x: number | string;
    };
    posts: {
        y: number | string;
    };
}

export let globalData: GlobalDataObject = {
    pages: {x:0},
    posts: {y:0},
};

export const setGlobalData = (value: GlobalDataObject): void => {
    globalData = JSON.parse(JSON.stringify(value));
    globalDataSubject.next(globalData);
    return;
};

export const globalDataSubject = new BehaviorSubject(globalData);
