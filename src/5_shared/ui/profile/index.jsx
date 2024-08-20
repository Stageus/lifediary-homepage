// Slice
import { S } from "./style";
import profileImg from "./assets/profile.png";

export const Profile = ( props ) => {

    const { img } = props;
    
    return(
        <S.ProfileTag
        src={ img ?? profileImg }
        alt="프로필 이미지"/>
    );
}