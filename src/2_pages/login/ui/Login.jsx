import { TextInput } from "@shared/ui";

export const Login = () => {
  return (
    <>
      <div>로그인 페이지</div>
      <TextInput placeholder="disabled" sort="disabled" />
      <TextInput placeholder="select" sort="select" />
      <TextInput placeholder="default" sort="default" />
    </>
  );
};
