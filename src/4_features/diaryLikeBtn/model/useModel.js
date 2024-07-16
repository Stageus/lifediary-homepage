import { usePostDiaryLike } from "../api/usePostDiaryLike";

export const useModel = ( props ) => {
    const { diaryIdx, likeCnt, isLiked } = props;
    const [ isLike, likeCount, postDiaryLike ] = usePostDiaryLike( isLiked, likeCnt );

    const onClickLike = () => postDiaryLike( diaryIdx );

    return {isLike, likeCount, onClickLike};
}