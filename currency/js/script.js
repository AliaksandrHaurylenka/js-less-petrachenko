// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
    
//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });

// });

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function inputRub(){
        return new Promise (function(resolve, reject){
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            let data = JSON.parse(request.response);
            console.log(data);

            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            }

            request.send();
        })
    }
    
    inputRub()
            .then(() => {
                // let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => {
                console.log(data);
                inputUsd.value = "Что-то пошло не так!";
            })
   
    
    // request.addEventListener('readystatechange', function() {
    //     if (request.readyState === 4 && request.status == 200) {
    //         let data = JSON.parse(request.response);

    //         inputUsd.value = inputRub.value / data.usd;
    //     } else {
    //         inputUsd.value = "Что-то пошло не так!";
    //     }
    // });

});