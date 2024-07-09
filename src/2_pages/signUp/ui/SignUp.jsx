import { SignUpInfo } from "@features/signUpInfo/ui/SignUpInfo";
import { S } from "./style";

export const SignUp = () => {
  return (
    <>
      <S.PageContainer>
        <S.ProfileContainer>
          <S.Logo />
          <SignUpInfo />
        </S.ProfileContainer>
      </S.PageContainer>
    </>
  );
};
