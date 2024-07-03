import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {createTestData} from "../model/createTestData";
import { divideToArray } from "../lib/divideToArray";
import { useFetch, useCookie } from "@shared/hook";


/*
    페이지네이션 이후 뒤로 가기를 누르면 페이지별의 history를 인식하지못함

    방법은 여러가지가 존재

    ComplainAlarm에서 초기값으로 1을 넘겨줌,
    해당 상태로 신고리스트의 여부를 판단하면 되고,
    서버측에 상태코드에 따라 페이지 여부를 보여준다
    (404 -> 리스트가 없음)
    만약 리스트가 5개 이하라면 페이지네이션버튼을 감춰준다.
    6개 이상부터 페이지네이션 버튼을 보여준다.

    위에 조건들을 만족한 상태에서
    만약 1번 ~ n 버튼을 누르고 뒤로가기를 눌렀을시,
    이전페이지의 상태를 기억하고, 이전 숫자페이지로 돌아가야함

    1. 쿼리스트링의 page=value or state:value 기반으로 데이터를 요청한다.
    2. ?page={idx}가 변경될때에 이를 감지하여 서버로 요청
*/

export const useGetComplainInfo = ()=>{
    const location = useLocation();
    console.log(location.state);

    const [complainInfo, setComplainInfo] = useState({
        list: null,
        count: null,
    });
    const [complainList, listErrorStatus, listFetch] = useFetch([]);
    const [complainCount, countErrorStatus, countFetch] = useFetch(null);
    const [_, changeErrorStatus, putFetch] = useFetch();
    const [page, setPage] = useState(1);
    const { handleGetCookie } = useCookie();

    const changePage = (num)=> setPage(num);

    const getComplainInfo = ()=>{
        listFetch(`report?page=${page}`,{},handleGetCookie());
        countFetch("report/count",{},handleGetCookie());
    };

    const putComplainState = (complainIdx,state)=>{
        // 임시데이터
        const changeData = complainInfo.list.map( value => value.idx === complainIdx ? {...value, isInvalid: state} : value);
        setComplainInfo({...complainInfo, list:changeData})
        // putFetch(`report/${complainIdx}/status`,{method:"PUT",data:{"isInvalid":state}},handleGetCookie());
        // getComplainInfo()
    }

    useEffect(()=>{
        // 임시주석
        // getComplainInfo();
        if(listErrorStatus){
            return "에러바운더리 대기";
        }

        if(countErrorStatus){
            return "에러바운더리 대기";
        }

        if(changeErrorStatus){
            return "에러바운더리 대기";
        }
    },[listErrorStatus,countErrorStatus,changeErrorStatus,page]);

    useEffect(()=>{
        // 테스트 데이터
        if(true){
            setComplainInfo({
                list: createTestData(page),
                count: divideToArray(24,5)
            });
        }
        // 임시주석
        // if(complainList && complainCount){
        //     setComplainInfo({
        //         list: complainList,
        //         count: divideToArray(complainCount,5)
        //     })
        // }
    },[complainList, complainCount,page]);
    
    
    return [complainInfo, page, changePage,putComplainState];
}