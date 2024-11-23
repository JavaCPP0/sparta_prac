function solution(strings, n) {
    let temp=[];
    for(let i =0;i<strings.length-1;i++){ //버블정렬
        for(let j=0;j<strings.length-1-i;j++){
            if(strings[j][n]>strings[j+1][n]){
            temp = strings[j];
            strings[j] = strings[j+1];
            strings[j+1] = temp;
            }
            
            else if (strings[j][n] === strings[j+1][n]){
                for(let k=0;1;k++){
                    if(strings[j][k] > strings[j+1][k]){
                        temp = strings[j];
                        strings[j] = strings[j+1];
                        strings[j+1] = temp;
                        break;
                        
                    } else if(strings[j][k] < strings[j+1][k]){break;}
                }
            }
        }      
    }
    return strings;
}

//localeCompare 알아보자