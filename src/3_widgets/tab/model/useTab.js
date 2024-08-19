import { useState } from "react";

export const useTab = ( tabLabel ) => {

    const [ tabNum, setTabNum ] = useState(0);
    const currentTab = tabLabel[tabNum];
    const key = Object.keys(currentTab)[0]; 
    const callBack = currentTab[key];

    return { tabNum, setTabNum, callBack };
}