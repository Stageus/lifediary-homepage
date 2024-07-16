import { S } from "./style";
import { useModel } from "../model/useModel";
import { Icon } from "@shared/ui";

export const DiaryLikeBtn = ( props ) => {
    const { isLike, likeCount, onClickLike } = useModel(props);

    return(
        <>
            <S.DiaryLikeBtn $isLike={isLike} onClick={onClickLike}>
                <div>
                    <Icon
                    type="like"
                    color={isLike ? "#F1F1F1" : "#FF6767" }
                    />
                </div>
                <div>
                    {`${likeCount}개`}
                </div>
            </S.DiaryLikeBtn>
        </>
    );
}