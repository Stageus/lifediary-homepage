import { S } from "./style";

export const Server = () => {

    return (
        <S.server>
            <img src={"https://png.pngtree.com/png-clipart/20210128/ourlarge/pngtree-surprised-surprised-png-image_2829455.jpg"}/>
            <h1> 500 </h1>
            <span>
                { " 예상하지 못한 결과가 발생하였습니다. 잠시후에 다시 시도해주세요!"}
            </span>
        </S.server>
    );
}