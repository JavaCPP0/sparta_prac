
// function solution(s) {

//     let cnt_p=0;
//     let cnt_y=0;

//     for (let i = 0; i < s.length; i++) {
//         if((s[i]==='p')||(s[i]==='P')) {
//             cnt_p++;
//         }

//         else if((s[i]==='y')||(s[i]==='Y')) {
//             cnt_y++;
//         }
//     }
//     if(cnt_p === cnt_y){
//         return true;
//     }
//     else return false;
// }

function solution(absolutes, signs) {

    let result=0;

    for (let i = 0; i < absolutes.length; i++) {
        if(signs[i]===true){
            result += absolutes[i];
        }
        else if(signs[i]===false){
            result -=absolutes[i];
        }
    }

    return result;
}