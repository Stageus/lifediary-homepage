import { S } from "./style";
import { useGetCheckName } from "../api/useGetCheckName";
import { useName } from "../model/useName";
import { DefaultBtn } from "@shared/ui";

export const NameInput = ( props ) => {

  const { initState } = props;
  const { isValid, nameRef, onChangeName } = useName( props );
  const [ getCheckName ] = useGetCheckName( props );

  return (
    <S.nameInput>
      <S.nameWrap>
        <S.name
          maxLength="19"
          placeholder="닉네임 3자 이상 ~  20자 이하"
          defaultValue={initState ?? ""}
          ref={nameRef}
          onChange={onChangeName}
        />
        <S.checkWrap>
          <DefaultBtn
            type={isValid ? "select" : "disabled" }
            text="중복확인"
            size="smail"
            onClick={() => getCheckName(nameRef.current.value)}
          />
        </S.checkWrap>
      </S.nameWrap>
    </S.nameInput>
  );
};
