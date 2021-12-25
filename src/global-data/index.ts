import { BehaviorSubject } from "rxjs";

interface GlobalDataObject {
    pages: object;
    posts: object;
}

export let globalData: GlobalDataObject = {
    pages: {},
    posts: {},
};

export const setGlobalData = (value: GlobalDataObject): void => {
    globalData = JSON.parse(JSON.stringify(value));
    globalDataSubject.next(globalData);
    return;
};

export const globalDataSubject = new BehaviorSubject(globalData);
