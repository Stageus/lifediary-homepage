// Npm
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
// Slice
import { S } from "./style";
import { useImg } from "../model/useImg";
import { useColor } from "../model/useColor";
import { useToogle } from "../model/useToogle";
import { useDiaryVaildation } from "../model/useDiaryVaildation";
// Layer
import { HashTag } from "@features/hashTag";
import { DefaultBtn, Icon } from "@shared/ui";

export const DiarySet = ( props ) => {

    const navigate = useNavigate();
    const { textContent = "", tags = [], isPublic = true, color = "#ef3131", imgContents = [] } = props?.diaryInfo || {};
    const [ checkSubmit ] = useDiaryVaildation( props.submit );
    const contentRef = useRef("");
    const [ tagList, setTagList ] = useState( tags );
    const { toggle, isToogle } = useToogle( isPublic );
    const { selectColor, changeColor, randomColor } = useColor( color );  
    const { selectImg, previewImg, deleteUrlList, onClickImg, onClickDeleteImg } = useImg( imgContents );

    return(
       <S.diarySet>
        <S.innerBox>
            <S.content
            autoFocus={"autofocus"}
            placeholder="최대 500자"
            maxLength={500}
            ref={contentRef}
            defaultValue={textContent}
            />
            <S.optionArea>
                <S.subArea>
                    <S.tagArea>
                        <HashTag tagList={tagList} setTagList={setTagList}/>
                    </S.tagArea>
                    <S.privateArea onClick={isToogle} $toggle={toggle}>
                        <div>{toggle ? "공개": "비공개"}</div>
                    </S.privateArea>
                </S.subArea>
                <S.grassArea>
                    {"잔디색상"}
                    <S.colorArea>
                        <input
                        onChange={changeColor}
                        value={selectColor}
                        type='color'/>
                    </S.colorArea>
                    <div>
                        <DefaultBtn
                        size="medium"
                        text="랜덤 색상"
                        onClick={ randomColor }
                        />
                    </div>
                </S.grassArea>
                <S.imgArea>
                    {"이미지 (최대 3개)"}
                    <label htmlFor='file'>{"이미지 업로드"}</label>
                    <input 
                        type='file' 
                        id='file' 
                        accept=".jpg, .jpeg, .png, .gif"
                        onChange={ onClickImg }
                        />
                </S.imgArea>
                <S.previewArea>
                    { previewImg?.map( ( url, idx )=> {
                        return(
                            <S.previewItem key={idx} onClick={() => onClickDeleteImg(url, idx)}>
                                <Icon 
                                color="#FF6767"
                                type="cancel"
                                />
                                <img key={idx} src={url}/>
                            </S.previewItem>
                        );
                    })}                    
                </S.previewArea>

                <S.btnArea>
                    <div>
                        <DefaultBtn
                        type={ selectColor ? "select" : "disabled"}
                        size="medium"
                        text="작성하기"
                        onClick={ () => checkSubmit( {textContent:contentRef.current.value, tags:tagList, isPublic:toggle, color:selectColor, imgContents:selectImg, deletedImgs:deleteUrlList} )}
                        />
                    </div>
                    <div>
                        <DefaultBtn
                        size="medium"
                        text="취소"
                        onClick={ () => navigate(-1)}
                        />
                    </div>
                </S.btnArea>
                
            </S.optionArea>
        </S.innerBox>
       </S.diarySet>
    );
}
