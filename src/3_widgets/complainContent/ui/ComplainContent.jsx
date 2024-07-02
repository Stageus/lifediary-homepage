import { S } from "./style";
import { useGetComplainInfo } from "../api/useGetComplainInfo";
import { DefaultBtn, Icon } from "@shared/ui";


/*
    해당 widgets에서 필요한 요청

    GET: report -> 신고리스트 반환
    GET: report/count -> 신고 개수반환
    PUT: report/:reportIdx/status -> 신고리스트 처리
*/
export const ComplainContent = ()=>{
    const [complainInfo] = useGetComplainInfo();
    console.log(complainInfo)
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
                                        />
                                    </div>
                                    {list.isInvalid === true || list.isInvalid === false
                                    ? (<div>
                                            <DefaultBtn
                                            text="복구"
                                            fontSize="12px"
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
                                            />
                                        </div>
                                        <div>
                                            <DefaultBtn
                                            text="삭제"
                                            fontSize="12px"
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
                    <Icon
                    type="leftArrow"
                    color="#FF6767"
                    size="30px"
                    />
                </S.PageNextBtn>
                <S.PageBtnList>
                    {/* DefaultBtn size Props추가 예정 */}
                    <DefaultBtn
                    text={"1"}
                    />
                    <DefaultBtn
                    text={"2"}
                    />
                    <DefaultBtn
                    text={"3"}
                    />
                    <DefaultBtn
                    text={"4"}
                    />
                    <DefaultBtn
                    text={"5"}
                    />
                </S.PageBtnList>
                <S.PageNextBtn>
                    <Icon
                    type="rightArrow"
                    color="#FF6767"
                    size="30px"
                    />
                </S.PageNextBtn>
            </S.PageBtnContainer>
            </S.ComplainContent>
        </>
    );
}