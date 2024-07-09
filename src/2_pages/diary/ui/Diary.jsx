import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import profile from "@shared/assets/imges/profile.png";


export const Diary = () => {
    return(
        <>
            <S.Diary>
                <S.DiaryHeader>
                <S.DiaryHeaderContainer>
                    <S.UserImg><img src={profile} alt="#"/></S.UserImg>

                    <S.UserName><span>구독자이름</span></S.UserName>

                    <S.DiaryCt><span>2024-01-01</span></S.DiaryCt>

                    <S.DiarySubscribe>
                        <DefaultBtn
                        text="구독"
                        />
                    </S.DiarySubscribe>

                </S.DiaryHeaderContainer>
                <S.DiaryEditor>
                    <div>
                        <DefaultBtn
                        text="일기수정"
                        />
                    </div>
                    <div>
                        <DefaultBtn
                        text="일기삭제"
                        />
                    </div>
                </S.DiaryEditor>
                </S.DiaryHeader>

                <S.DiaryMain>
                    <S.DiaryMainWrap>
                    <S.DiaryContainer>
                        <S.DiaryInfo>
                            <S.DiaryImages>이미지영역</S.DiaryImages>
                            <S.DiaryContent>일기내용</S.DiaryContent>
                        </S.DiaryInfo>

                        <S.DiaryComment>
                            댓글영역
                        </S.DiaryComment>
                    </S.DiaryContainer>

                    <S.DiarySideList>
                        <DefaultBtn
                        text="좋아요"
                        />
                        <DefaultBtn
                        text="댓글"
                        />
                        <DefaultBtn
                        text="공유"
                        />
                        <DefaultBtn
                        text="신고"
                        />
                    </S.DiarySideList>
                    </S.DiaryMainWrap>
                </S.DiaryMain>
            </S.Diary>
        </>
    );
}