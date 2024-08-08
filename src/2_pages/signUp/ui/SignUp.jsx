// Npm
// Slice
import { S } from "./style";
// Layer
import logo from "@shared/assets/img/logo.png"
import { Profile, DefaultBtn } from "@shared/ui";


export const SignUp = () => {
    return(
        <S.signUp>
            <S.innerBox>
                {/* 로고영역 */}
            <S.logoArea>
                <img
                src={logo}
                />
            </S.logoArea>
            
            {/* 프로필 영역 */}
            <S.profileArea>
                <S.imgWrap>
                    <Profile/>
                </S.imgWrap>
                <S.profileGuide>확장자안내 및 필수문구?</S.profileGuide>
            </S.profileArea>

            {/* 이름 영역 */}
            <S.nameArea>
                <S.nameInout
                placeholder="사용하실 이름을 입력해주세요"
                />
                <S.nameGuide>확인영역</S.nameGuide>
            </S.nameArea>

            {/* 버튼 영역 */}
            <S.btnArea>
                <DefaultBtn
                    text="가입하기"
                />
                <DefaultBtn
                    text="취소"
                />
            </S.btnArea>
            </S.innerBox>

            
        </S.signUp>
    );
}