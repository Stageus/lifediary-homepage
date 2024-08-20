import { S } from "./style";
import { useSlider } from "../model/useSlider";
import { Icon, Thumbnail } from "@shared/ui";

export const Slider = (props) => {

    const { sliderList } = props;
    const { positionUnit, onClickLeft, onClickRight, onClickNumber } = useSlider( sliderList.length );

  return (
    <S.Slider>
    {sliderList.length ? (
      <>
        <S.LeftBtn onClick={onClickLeft} $isNext={ sliderList.length > 1 && -positionUnit !== 0}>
          <Icon color="white" size="40px" type="leftArrow" />
        </S.LeftBtn>
  
        <S.ItemContainer $positionUnit={positionUnit}>
          {sliderList.map((img, idx) => (
            <div key={idx}>
              <Thumbnail src={img} />
            </div>
          ))}
        </S.ItemContainer>
  
        <S.RightBtn onClick={onClickRight} $isNext={ sliderList.length -1 !== -positionUnit }>
          <Icon color="white" size="40px" type="rightArrow" />
        </S.RightBtn>
  
        <S.ItemPosition>
          {sliderList.map((_, idx) => (
            <S.Item key={idx} $isSame={-positionUnit === idx} onClick={()=>onClickNumber(-idx)}/>
          ))}
        </S.ItemPosition>
      </>
    ):  <Thumbnail/>}
  </S.Slider>
  
  );
};
