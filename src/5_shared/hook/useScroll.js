import { useEffect, useRef, useState } from "react";

export const useScroll = ( callBack ) => {
     
    
    const [ pageNum, setPageNum ] = useState( 1 );
    const watchRef = useRef( null );

    // 요소가 보이면 실행될 함수 ( entries: 관찰중인 요소에 대한 정보, observer: IntersectionObserver의 인스턴스이며 시작-중지-해제 등을 관리)
    const observeCallBack = ( entries, observer ) => {
        console.log(entries)
        const target = entries[0];
        if ( target.isIntersecting ) {
            callBack(pageNum);
            setPageNum(pageNum + 1)
        }
    };

    // 참조하는 요소의 뷰포트 설정
    const observeOptions = {
        // 참조할 부모의 dom을 설정함
        root: null,
        // 보이는 영역의 비율을 결정
        threshold: 1,
    };

    // 생성자
    const observer = new IntersectionObserver( observeCallBack ,observeOptions );

    useEffect(()=>{

        // 참조하는 요소가 없다면 빠른리턴
        if ( !watchRef.current ) return;
        // 참조하는 DOM요소가 있다면 주시한다
        if ( watchRef.current ) observer.observe(watchRef.current);

        return () => {
            // 컴포넌트 언마운트시에 
            // 특정 대상 요소에 대한 주시를 해제
            // if ( watchRef.current ) observer.unobserve(watchRef.current);
            // 모든 대상의 주시를 해제
            // observer.disconnect(watchRef.current);
        }
    },[]);

    return [ watchRef ];
}