// Npm
import { S } from "./style";
// Slice
import { usePostDiaryLike } from "../api/usePostDiaryLike";
// Layer
import { Icon } from "@shared/ui";

export const DiaryLikeBtn = ( props ) => {

    const { diaryIdx, likeCnt, isLiked } = props;
    const [ currentLike, currentCount, postDiaryLike ] = usePostDiaryLike( isLiked, likeCnt );

    return(
        <>
            <S.DiaryLikeBtn $isLike={ currentLike } onClick={ () => postDiaryLike( diaryIdx ) }>
                <div>
                    <Icon
                    type="like"
                    color={ currentLike ? "#F1F1F1" : "#FF6767" }
                    />
                </div>
                <div>
                    {`${currentCount}개`}
                </div>
            </S.DiaryLikeBtn>
        </>
    );
}