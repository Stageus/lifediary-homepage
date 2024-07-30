import { S } from "./style";
import { useModel } from "../model/useSlider";
import { Icon, DynamicImage } from "@shared/ui";

export const Slider = (props) => {
    const { sliderList } = props;
    const { positionUnit, onClickLeft, onClickRight } = useModel(sliderList.length);

  return (
    <>
      <S.Slider>
        <S.LeftBtn onClick={ onClickLeft }>
          <Icon color="white" size={"40px"} type={"leftArrow"} />
        </S.LeftBtn>
        <S.ItemContainer $positionUnit={ positionUnit }>
          {sliderList?.map((img, idx) => {
            return (
                <div key={ idx }>
                    <DynamicImage src={ img }/>
                </div>
            );
          })}
        </S.ItemContainer>
        <S.RightBtn onClick={ onClickRight }>
          <Icon color="white" size={"40px"} type={"rightArrow"} />
        </S.RightBtn>
        <S.ItemPosition>
          {sliderList?.map((_, idx) => {
            return <S.Item key={ idx } $isSame={ -positionUnit === idx }/>;
          })}
        </S.ItemPosition>
      </S.Slider>
    </>
  );
};
