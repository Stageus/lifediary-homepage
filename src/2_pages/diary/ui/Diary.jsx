import { useState } from "react";
import { S } from "./style";
import { Icon } from "@shared/ui";
import { DefaultBtn } from "@shared/ui";
import profile from "@shared/assets/imges/profile.png";
import { Slider } from "@features/slider";



export const Diary = () => {
    // 슬라이더 부분
    const TestImgCount = [
        "data:image/jpeg;base64,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"
        ,"https://e1.pxfuel.com/desktop-wallpaper/892/235/desktop-wallpaper-scenic-backgrounds-png-scenic-backgrounds-png-transparent-scenery-background.jpg"
        ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4esC6zxIJs3d7TFzr7816p7esBvC9Ffvyzo55cJ-xflO8Q_KdqHA5vaWPU5horlLzhY&usqp=CAU"
    ];

    const [openModal, setOpenModal] = useState(false);
    const onClickModal = () => setOpenModal(!openModal);

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
                            <S.DiaryImgContainer>
                                <Slider sliderList={TestImgCount}/>
                            </S.DiaryImgContainer>
                            <S.DiaryContent>{`일기내용
일기내용 일기내용
일기내용 일기내용 일기내용
일기내용 일기내용 일기내용 일기내용
일기내용 일기내용 일기내용 일기내용 일기내용
일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일
                                `}
                            </S.DiaryContent>
                        </S.DiaryInfo>

                            
                        <S.DiaryComment $openModal={openModal}>
                            <S.Cancel onClick={onClickModal}>
                                <Icon
                                size="30px"
                                type="cancel"
                                color="#FF6767"
                                />
                            </S.Cancel>
                        </S.DiaryComment>

                    </S.DiaryContainer>

                    <S.DiarySideList>
                        <DefaultBtn
                        text="좋아요"
                        />
                        <DefaultBtn
                        text="댓글"
                        onClick={onClickModal}
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