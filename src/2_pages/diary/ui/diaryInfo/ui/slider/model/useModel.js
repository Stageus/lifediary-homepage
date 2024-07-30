import {useState } from "react";
export const useModel = (listLength)=>{
    const [positionUnit, setPositionUnit] = useState(0);

    const onClickLeft = () => {
        if(positionUnit === 0) return;
        setPositionUnit(positionUnit + 1);
    };

    const onClickRight = () => {
        if(-positionUnit === listLength - 1) return;
        setPositionUnit(positionUnit - 1);
    };

    return {positionUnit, onClickLeft, onClickRight};
}