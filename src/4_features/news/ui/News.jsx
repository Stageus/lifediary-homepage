import { useState } from "react";
import { S } from "./style";
import { DefaultBtn, Icon } from "@shared/ui"; 

export const News = () => {
     const [ isOpenModal, setIsOpenModal ] = useState( false );
     const onClickOpen = () => setIsOpenModal( !isOpenModal );

/*
    "newComment": 내일기에 댓글이 달렸을 경우
    "newDiary": 구독자가 일기를 작성했을 경우
    "deletedMyDiary": 내일기가 신고받아 삭제되었을 경우
    "deletedDiary": 신고한일기가 삭제되었을 경우
    "recoveredDiary": 내일기가 복구되었을 경우
*/
    return(
        <>
        <S.News>
            <S.NewsBtnWrap>
                <DefaultBtn
                text= "알림"
                onClick= { onClickOpen }
                />
            </S.NewsBtnWrap>
            { isOpenModal
            ? <S.NewsModal>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.UserInfo>
                            <S.Name>최대20자닉네임입니다일이삼사오</S.Name>
                        </S.UserInfo>

                        <S.NewsContent>
                            <span>새로운일기를 작성했습니다.</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.UserInfo>
                            <S.Name>피카츄</S.Name>
                        </S.UserInfo>

                        <S.NewsContent>
                            <span>내일기에 댓글을 달았습니다.</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.NewsContent>
                            <span>신고한 일기가 삭제되었습니다</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.NewsContent>
                            <span>내 일기가 신고받아 삭제 되었습니다.</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.NewsContent>
                            <span>삭제된 내일기가 복구 되었습니다.</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.NewsContent>
                            <span>삭제된 내일기가 복구 되었습니다.</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.NewsContent>
                            <span>삭제된 내일기가 복구 되었습니다.</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.NewsContent>
                            <span>삭제된 내일기가 복구 되었습니다.</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
                <S.NewsItem>
                    <S.NewsInfo>
                        <S.NewsContent>
                            <span>삭제된 내일기가 복구 되었습니다.</span>
                            <span>17: 22</span>
                        </S.NewsContent>
                    </S.NewsInfo>

                    <S.DeleteBtnWrap>
                        <Icon
                        type= "cancel"
                        color= "red"
                        />
                    </S.DeleteBtnWrap>
                </S.NewsItem>
            </S.NewsModal>
            : null}
        </S.News>
        </>
    );
}