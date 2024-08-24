import { useState, useRef, useEffect } from "react";

export const useIsOpen = () => {

  const [isOpenCommentArea, setIsOpenCommentArea] = useState( false );
  const [isOpensReplyArea, setIsOpensReplyArea] = useState( false );
  const commentTextRef = useRef( null );
  const replyTextRef = useRef( null );

  const onClickOpenCommentInput = () => {
    setIsOpenCommentArea(!isOpenCommentArea);
    setIsOpensReplyArea(false)
  };

  const onClickOpenReplyInput = () => {
    setIsOpensReplyArea(!isOpensReplyArea);
    setIsOpenCommentArea(false);
  }

  useEffect(() => {
    if ( isOpenCommentArea ) commentTextRef.current.focus();
    if ( isOpensReplyArea ) replyTextRef.current.focus();
  }, [isOpenCommentArea, isOpensReplyArea]);

  return {isOpenCommentArea, isOpensReplyArea, onClickOpenCommentInput, onClickOpenReplyInput, commentTextRef, replyTextRef};
}