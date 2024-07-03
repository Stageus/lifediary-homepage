import { useNavigate } from "react-router-dom";
import { S } from "./style";
import { useGetComplainInfo } from "../api/useComplainInfo";
import { DefaultBtn, Icon } from "@shared/ui";

export const ComplainContent = ()=>{
    const [complainInfo, page, changePage, putComplainState] = useGetComplainInfo();
    const navigate = useNavigate();

    const onClickRoute = (diaryIdx) => navigate(`/diary/${diaryIdx}`);

    const onClickNum = (num) => changePage(num);

    const onClickLeft = () => {
        if(page === 1) return;
        changePage(page - 1)
    };

    const onClickRight = () => {
        if(complainInfo.count.length === page) return;
        changePage(page + 1)
    };

    
   
    
    return(
        <>
            <S.ComplainContent>
            <S.Table>
                <thead>
                    <tr>
                        <S.ThNumber>번호</S.ThNumber>
                        <S.ThContent>사유</S.ThContent>
                        <S.ThUser>작성자</S.ThUser>
                        <S.ThDate>날짜</S.ThDate>
                        <S.ThState>상태</S.ThState>
                        <S.ThBtn/>
                    </tr>
                </thead>
                <tbody>
                    {complainInfo?.list?.map((list)=>{
                        return(
                            <tr key={list.idx}>
                                <td>{list.idx + 1}</td>
                                <td>{list.textContent}</td>
                                <td>{list.nickname}</td>
                                <td>{list.createdAt}</td>
                                <td>
                                    {list.isInvalid === true ? "삭제" : null}
                                    {list.isInvalid === false ? "통과" : null}
                                    {list.isInvalid === null ? "대기중" : null}
                                </td>
                                <td>
                                <S.BtnContainter>
                                    <div>
                                        <DefaultBtn
                                        text="상세보기"
                                        fontSize="12px"
                                        onClick={()=>onClickRoute(list.diaryIdx)}
                                        />
                                    </div>
                                    {list.isInvalid === true || list.isInvalid === false
                                    ? (<div>
                                            <DefaultBtn
                                            text="복구"
                                            fontSize="12px"
                                            onClick={()=>putComplainState(list.diaryIdx,null)}
                                            />
                                        </div>) 
                                    : null}
                                    {list.isInvalid === null
                                    ? (
                                        <>
                                        <div>
                                            <DefaultBtn
                                            text="통과"
                                            fontSize="12px"
                                            onClick={()=>putComplainState(list.diaryIdx,false)}
                                            />
                                        </div>
                                        <div>
                                            <DefaultBtn
                                            text="삭제"
                                            fontSize="12px"
                                            onClick={()=>putComplainState(list.diaryIdx,true)}
                                            />
                                        </div>
                                        </>
                                        ) 
                                    : null}
                                </S.BtnContainter>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </S.Table>
            <S.PageBtnContainer>
                
                <S.PageNextBtn>
                    {page !== 1 
                    ? (<span onClick={onClickLeft}>
                        <Icon
                        type="leftArrow"
                        color="#FF6767"
                        size="30px"
                        />
                        </span>)
                    : null}
                </S.PageNextBtn>
                <S.PageBtnList>
                    {complainInfo?.count?.map((num)=>{
                        return(
                            <DefaultBtn
                                text={num}
                                key={num}
                                type={ page === num ? "select" : null}
                                onClick={()=>onClickNum(num)}
                            />
                        );
                    })}
                </S.PageBtnList>
                <S.PageNextBtn>
                    {complainInfo?.count?.length !== page 
                    ? (<span onClick={onClickRight}>
                        <Icon
                        type="rightArrow"
                        color="#FF6767"
                        size="30px"
                        />
                        </span>)
                    : null}
                    
                </S.PageNextBtn>
            </S.PageBtnContainer>
            </S.ComplainContent>
        </>
    );
}