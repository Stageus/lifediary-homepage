import { TextInput } from "@shared/ui";
import { TagInput } from "@shared/ui";

export const Login = () => {
  return (
    <>
      <div>로그인 페이지</div>
      <TextInput placeholder="disabled" variant="disabled" />
      <TextInput placeholder="select" variant="select" />
      <TextInput placeholder="default" variant="default" />
      <TagInput />
    </>
  );
};
