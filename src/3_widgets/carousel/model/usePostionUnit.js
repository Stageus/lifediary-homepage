import { useState } from "react";

export const usePostionUnit = ( diaryLength, nextPage ) => {

    const [ postionUnit, setPostionUnit ] = useState( 0 );

    const onClickLeft = () => {
        if ( !postionUnit ) return;

        setPostionUnit( postionUnit + 1 );
      };

      const onClickRight = () => {
        if ( diaryLength - 1 === -postionUnit ) nextPage();
        
        setPostionUnit(postionUnit - 1);
      };

      return { postionUnit, onClickLeft , onClickRight }
}