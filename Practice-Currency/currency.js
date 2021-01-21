var convertButton = document.getElementById('convert')
convertButton.addEventListener('click', () => {
    const inputVal = document.getElementById("myInput").value;
    if(inputVal< 1){
        alert('Düzgün doldurulmayıb!')
    }
    else{
     
    const pTaginaYaz = document.getElementById('pTaginaYaz')
    var shekil = document.getElementById("sekilAZN")
    const AZN = (Math.round((inputVal * 1.70) * 100) / 100).toFixed(2)
    const manat = (Math.floor(inputVal * 1.70));
    const qepik = ((Math.round((inputVal * 1.70) * 100) / 100).toFixed(2) + "").split(".")[1];
    pTaginaYaz.classList.toggle('visible')
    pTaginaYaz.innerHTML = `${inputVal} Dollar = ${manat} Manat ${qepik} Qəpik`

    var ikiYuzManat = (Math.floor(manat / 200))
    var ikiyM = manat - 200 * ikiYuzManat
    var yuzManat = Math.floor(ikiyM / 100)
    var yuzM = ikiyM - 100 * yuzManat
    var elliManat = (Math.floor(yuzM / 50))
    var elliM = yuzM - 50 * elliManat
    var iyirmiManat = Math.floor(elliM / 20)
    var iyirmiM = elliM - 20 * iyirmiManat
    var onManat = (Math.floor(iyirmiM / 10))
    var onM = iyirmiM - 10 * onManat
    var BesManat = (Math.floor(onM / 5))
    var BirM = onM - 5 * BesManat
    var mesafe = 0;
    
    let array = [
        { img: '200AZN.jfif', count: ikiYuzManat },
        { img: '100AZN.jfif', count: yuzManat },
        { img: '50AZN.jfif', count: elliManat },
        { img: '20AZN.jfif', count: iyirmiManat },
        { img: '10AZN.jfif', count: onManat },
        { img: '5AZN.jfif', count: BesManat },
        { img: '1AZN.jfif', count: BirM },
    ]

    for (let i = 0; i < array.length; i++) {
     
        for (let j = 0; j < array[i].count; j++) {
            let imgr = document.createElement('img');
            imgr.src = array[i].img
            shekil.appendChild(imgr)
            imgr.style.width = "100%"
            imgr.style.position = "absolute"
            imgr.style.top=`${mesafe}px` 
            mesafe+=40 
        }
    }}
})

















