import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
export const Aside = () => {
  return (
    <>
      <div>
        <div>
          <DefaultBtn text="홈" />
          <DefaultBtn text="둘러보기" />
          <DefaultBtn text="신고보기" />
        </div>
        <div>
          <h3>구독목록</h3>
          <div>
            <img src="#" alt="#" />
            <span>피카츄</span>
          </div>
        </div>
      </div>
    </>
  );
};
