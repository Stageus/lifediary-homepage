import { useEffect, useRef } from "react";

export const useScroll = ( callBack ) => {
    
    const watchRef = useRef( null );
    const observeRef = useRef( null );

    const observeCallBack = ( entries ) => {

        entries.forEach((entry) => {

            if ( entry.isIntersecting ) {
                console.log("watchRef")
                callBack();
            }
        })
    };

    const observeOptions = {
        threshold: 0.1,
    };

    useEffect(()=>{

        if ( !watchRef.current ) return;

        observeRef.current =  new IntersectionObserver( observeCallBack ,observeOptions );
        observeRef.current.observe(watchRef.current);


        return () => {
            if ( watchRef.current ){
                observeRef.current.unobserve(watchRef.current);
            }
        }

    },[callBack]);

    return [ watchRef];
}