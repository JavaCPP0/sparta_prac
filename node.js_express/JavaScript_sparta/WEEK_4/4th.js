class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}


//   function loadJson(url) {
//     return fetch(url) //fetch는 URL에서 JSON데이터를 가져오고 프로미스를 반환하며, 응답을 받은 후 처리하는 부분이 then으로 이어집니다.
//       .then(response => {
//         if (response.status == 200) { //200은 요청이 성공적으로 처리됨. 404는 찾을 수 없음.500은 서버 오류
//           return response.json();// json형식으로 데이터를 반환
//         } else {
//           throw new HttpError(response);
//         }
//       })
//   }

async function loadJson(url) {
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
    // return fetch(url) 
    //   .then(response => {
    //     if (response.status == 200) { 
    //       return response.json();
    //     } else {
    //       throw new HttpError(response);
    //     }
    //   });
}

async function koreanMovie() {
    let res

    while (true) {
        try {
            res = await loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`);
            break;
        } catch (err) {
            if(err instanceof HttpError && err.response.status == 404) {
                alert("무언가 에러가 발생했군요!");
                return koreanMovie();
            } else {
                throw err;
            }
        }
    }

    alert(`${res.author}: ${res.quote}`);
    return res;
    // return loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`)
    //     .then(res => {
    //         alert(`${res.author}: ${res.quote}`);
    //         return res;
    //     })
    //     .catch(err => {
    //         if (err instanceof HttpError && err.response.status == 404) {
    //             alert("무언가 에러가 발생했군요!");
    //             return koreanMovie();
    //         } else {
    //             throw err;
    //         }
    //     });
}

koreanMovie();