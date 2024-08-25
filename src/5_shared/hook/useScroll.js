import { useEffect, useRef, useState } from "react";

export const useScroll = () => {
     
    // 요청시 사용될 pageNumber
    const [ pageNum, setPageNum ] = useState(1);
    // observer역할 Element
    const watchRef = useRef( null );
    // IntersectionObserver Ref
    const observerRef = useRef(null);

    // 요소가 보이면 실행될 함수
    const observeCallBack = ( entries, observer ) => {
        // entries: 관찰중인 요소에 대한 정보
        // observer: IntersectionObserver의 인스턴스이며 시작-중지-해제 등을 관리
        const target = entries[0];
        // 지정한 Element가 보인다면
        if ( target.isIntersecting ) {
            setPageNum( pageNum + 1);
        }
    };

    // observer 중지 함수
    const stopObserver = () => {
        if ( observerRef.current && watchRef.current ) {
            observerRef.current.unobserve(watchRef.current);
          }
    };

    useEffect(()=>{

        // observer 생성자
        observerRef.current = new IntersectionObserver(observeCallBack, {
            root: null,
            threshold: 1,
          });

        // 참조하는 DOM요소 있다면 주시시작
        if ( watchRef.current ) observerRef.current.observe(watchRef.current);

        // clean-up
        return () => {
            // 특정 대상 요소에 대한 주시를 해제
            if ( observerRef.current ) {
                observerRef.current.disconnect();
            }
        }
    },[]);

    return [ watchRef, pageNum, stopObserver];
}