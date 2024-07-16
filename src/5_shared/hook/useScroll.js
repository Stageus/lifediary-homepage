import {useState, useRef} from "react";

export const useScroll = ()=>{
    const [lastScroll, setLastScroll] = useState(false);
    const scrollRef = useRef(null);

    const onScrollReset = () => {
        setLastScroll(false);
    }

    const onScrollNext = ()=>{
        if(scrollRef.current){
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            
            if(scrollHeight - clientHeight - scrollTop <= 1){
                setLastScroll(true);
            }
        }
    }

    return [lastScroll, scrollRef, onScrollNext, onScrollReset];
}