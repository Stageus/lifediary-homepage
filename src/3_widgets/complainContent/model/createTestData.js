
export const createTestData = (page)=>{
    const result = [];
    const pageIndex = page ?? 0;
    const testState = [false,true,null,false,null];

    if(!pageIndex){
        for(let i = 0 ; i < 5 ; i++){
            result.push({
                    "idx" : i,
                    "diaryIdx" : i,
                    "nickname" : `첫번째요청 리스트`,
                    "textContent" : "Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용",
                    "isInvalid" : testState[i],
                    "processedAt" : "2024-03-01",
                    "createdAt" : "2024-03-01"
                },
            );
        }
    }else{
        for(let i = 0 ; i < 5 ; i++){
            result.push({
                    "idx" : i,
                    "diaryIdx" : i,
                    "nickname" : `두번째요청 리스트`,
                    "textContent" : "Test 내용",
                    "isInvalid" : testState[i],
                    "processedAt" : "2024-03-01",
                    "createdAt" : "2024-03-01"
                },
            );
        }
    }
    return result;
}