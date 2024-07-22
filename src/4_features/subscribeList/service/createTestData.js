let userIndex = 1;

export const createTestData = (page)=>{
    const result = [];

    if(!page){
        for(let i = 0 ; i < 20 ; i++){
            result.push(
                {
                    "toAccountIdx":userIndex,
                    "profileImg": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                    "nickname": "기본요청으로인한최대20자의닉네임입니다"

                }
            );
            userIndex++;
        }
    }else{
        for(let i = 0 ; i < 20 ; i++){
            result.push(
                {
                    "toAccountIdx":userIndex,
                    "profileImg": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                    "nickname": `${i}번요청으로인한최대20자의닉네임입니다`

                }
            );
            userIndex++;
        }
    }
    return result;
}