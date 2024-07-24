import { useEffect, useRef } from "react";

export const useScroll = ( callBack ) => {
    
    const rootRef = useRef( null );
    const watchRef = useRef( null );

    useEffect(()=>{

        if ( !watchRef.current ) return;

        const observeCallBack = ( entries ) => {
            const target = entries[0];
            if ( target.isIntersecting ) callBack();
        };

        const observeOptions = {
            root: rootRef.current,
            threshold: 0.5,
        };
        
        const observer = new IntersectionObserver( observeCallBack ,observeOptions );
        if ( watchRef.current ) observer.observe(watchRef.current);

        return () => {

            if ( watchRef.current ) observer.unobserve(watchRef.current);
            observer.disconnect(watchRef.current);
        }

    },[ callBack ]);

    return [ rootRef, watchRef ];
}