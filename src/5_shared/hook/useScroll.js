import { useEffect, useRef } from "react";

export const useScroll = ( callBack ) => {
    
    const watchRef = useRef( null );

    useEffect(()=>{

        if ( !watchRef.current ) return;

        const observeCallBack = ( entries ) => {
            const target = entries[0];
            // console.log(target);
            
            if ( target.isIntersecting ) {
                // console.log("보이누");
                callBack();
            }
        };

        const observeOptions = {
            root: null,
            threshold: 1,
        };
        
        const observer = new IntersectionObserver( observeCallBack ,observeOptions );
        if ( watchRef.current ) observer.observe(watchRef.current);

        return () => {

            if ( watchRef.current ) observer.unobserve(watchRef.current);
            observer.disconnect(watchRef.current);
        }

    },[ callBack ]);

    return [ watchRef ];
}