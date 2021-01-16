let divs = document.querySelectorAll('#sutun div');
let index = 0;
let vaxt = [3000,500,1000];

function yandir(){
    [...divs].map(a=>a.classList.remove('on'));

    divs[index].classList.add('on');
    setTimeout(yandir,vaxt[index]);
    if(index<vaxt.length-1){
        index++;
    }
    else{
        index=0;
    }
}

yandir();























// function qirmiziStart(){
// qirmizi.classList.toggle('on')

// }
// setTimeout(qirmiziStart, 3000)

// function sariStart(){
//     sari.classList.toggle('on')

// }
// setTimeout(sariStart, 500)

// function yasilStart(){
//     yasil.classList.toggle('on')
    
// }
// setTimeout(yasilStart, 10000)