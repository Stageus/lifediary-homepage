let diaryIndex = 1;
export const createTestData = (number)=>{
    
    const imgList = [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAB8fHzHx8fGxsaBgYG8vLyLi4tlZWX39/e5ubl5eXkpKSnk5ORXV1e0tLTa2tqWlpbp6emenp47OztwcHAhISEVFRXW1tYMDAzx8fFOTk4uLi42NjbPz88bGxurq6v3GbJwAAAB30lEQVR4nO3b2XLaQBBA0fFGEEsCzo7jxP//lQE7sQNqCz9QRbp1zuPwolszaqmgaA0AAAAAAAAAAAAAAAAA4L9wO5vsmd2e+4pO7Pri0PW5L+m0PvYCL67OfU2n1M37gaUKN5+CwEqFV1FfpcLgFqw1aT6/ElhlD5eL1wKLFPafgsUK3w0EliicDgUWmDTLL4OB+fdwMtyXv3DwFixwSrvhWzD/Hq6+Hg9MXXj0FsxeePwWzF3YvX9bYNpJ8+37GwOz7uGHuCZ6+OcsjL6t2AWuipzSzV0cuOiWNfYwytj50YUfJSxs8RS937T2s0hh9ysIuetancLoMM4fP4gKM06a1maHGeun9eg9LuUe9t7YJn+WCxXufXOxeP55KSrMeUq30+bl9WX6sto7vYn3sD2/vqz/WSxV+PfVdO8QPpQqbOvt5d8v95aKFW7fbaYHK9GvM1knzU63PlyJCjPvYV/0xYbCXG7KF14WmzR9UWH9Paxf6JTmojC/cRaaNLmMs9ApzUVhfuMsNGlyGWehU5qLwvzGWWjS5KIwP4X5KczP8zA/hfkpzE9hfp6H+SnMb5yFJk0u4yx0SnNRmF/9wuhf7LUmzcPlzaH56twXBQAAAAAAAAAAAAAAAABAIr8BXGQQS/BxEG4AAAAASUVORK5CYII=",
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XPUT929g1tN6NYLZc4pWwPxEP58iWBg62Q&s"
    ]
    const result = [];


    if(!number){
        for(let i = 0 ; i < 15 ; i++){
            result.push(
                {
                "idx" : diaryIndex,
                "thumbnailImg" : imgList[0],
                "nickname" : "기본요청",
                "profileImg" : imgList[0]
                }
            );
            diaryIndex++;
        }
    }else{
        for(let i = 0 ; i < 15  ; i++){
            result.push(
                {
                "idx" : diaryIndex,
                "thumbnailImg" : imgList[number],
                "nickname" : `${number} 요청`,
                "profileImg" : imgList[number]
                }
            );
            diaryIndex++;
        }
    }

    return result;
}