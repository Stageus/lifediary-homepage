import { S } from "./style";
import { DiarySet } from "@widgets/diarySet";

export const DiaryUpdate = () => {
  const testData = {
    textContent: "test",
    tags: ["인기","최신"],
    isPublic: false,
    color: "#491616",
    imgContents: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-heAqDdpHC_OcZYOP9uZ_tD0z6troFp9I8g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_i4tfQ33nOEYhV3m9N395hAXfd97lbWjUsg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSUtOpSrZd1dUMMFtCMZssMHkZYX632Ge2g&s"
    ]

  }
  return(
    <DiarySet diaryInfo={testData} callback={""}/>
  );
};
