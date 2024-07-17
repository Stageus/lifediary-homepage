import { S } from "./style";
import { useModel } from "../model/useModel";
import { DefaultBtn, Icon } from "@shared/ui"; 

export const News = () => {
     const { isNew, isOpenModal, onClickOpen, deleteNotice} = useModel();
    
    return(
        <>
        <S.News>
            {isNew 
            ?<S.NewsAlarm>
                <Icon
                type= "alarm"
                color= "white"
                size= "20px"
                />
             </S.NewsAlarm>
            : null}
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

                    <S.DeleteBtnWrap
                    onClick={() => deleteNotice("noticeIdx")}
                    >
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