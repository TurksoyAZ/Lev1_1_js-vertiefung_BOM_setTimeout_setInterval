
//
// let a = 'Start Warten für 3 Sekunden...'
// console.log(a);
// setTimeout(function () { console.log('Erledigt.Du hast 3 Sekunden verschwendet') }, 3000)


//

let counter = 11

function test() {

    let forSetInterval = setInterval(function () {

        counter--
        console.log(counter);

        if (counter === 1) {
            console.log('Elndlich Feierabend');
            clearInterval(forSetInterval)
        }
    }, 1000);

}

test()





