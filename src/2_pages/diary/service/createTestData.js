import profile from "@shared/assets/imges/profile.png";
let testIdx = 1;

export const createTestData = ()=>{
const result = [];  

    for(let i = 0 ; i < 10 ; i++){
        result.push({
            idx : testIdx,
            imgContents : [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIl_pv9Jbf9Czb1KnEjXNtEWk7dNqT3o9WeQ&s"
                ,"https://e1.pxfuel.com/desktop-wallpaper/892/235/desktop-wallpaper-scenic-backgrounds-png-scenic-backgrounds-png-transparent-scenery-background.jpg"
                ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4esC6zxIJs3d7TFzr7816p7esBvC9Ffvyzo55cJ-xflO8Q_KdqHA5vaWPU5horlLzhY&usqp=CAU"
            ],
            textContent : `일기내용
    일기내용 일기내용
    일기내용 일기내용 일기내용
    일기내용 일기내용 일기내용 일기내용
    일기내용 일기내용 일기내용 일기내용 일기내용
    일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일
                                    `,
            likeCnt : 2000,
            commentCnt : 2000,
            createdAt : "2024-01-01 11:44:24",
            nickname : `해당구독자는${testIdx}번째  입니다!.ㅎㅎㅎ`,
            profileImg : profile,
            isSubscribed : i%2 === 0 ? false : true,
            isLiked : i%2 === 0 ? false : true,
            isMine: i%2 === 0 ? false : true,
            accountIdx: testIdx
        })
        testIdx++;
    }
    return result;
}