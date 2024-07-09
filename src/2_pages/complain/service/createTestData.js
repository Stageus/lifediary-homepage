
export const createTestData = (page)=>{
    const result = [];
    const testState = [false,true,null,false,null];

        for(let i = 0 ; i < 5 ; i++){
            result.push({
                    "idx" : i,
                    "diaryIdx" : i,
                    "nickname" : `${page}첫번째요청 리스트`,
                    "textContent" : "Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용Test 내용",
                    "isInvalid" : testState[i],
                    "processedAt" : "2024-03-01",
                    "createdAt" : "2024-03-01"
                },
            );
        }

    
    return {result: result, reportCnt: 24}
}