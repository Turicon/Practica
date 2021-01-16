const ptag = document.getElementById("ptagi");
const ptag2 = document.getElementById("ptagi2");
const sekil = document.getElementById("yes")
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const start  = (a) => {

    let date = new Date(a.target.value)
  
    var n = days[date.getDay()];
    ptag2.innerText = n;

    if(date.getDay() == 6 || date.getDay() == 0) {
        ptag.style.color = "#ff0000";
        ptag.innerText= "İş yoxdur";
        sekil.src = "dance.gif"
        
        }else{
            ptag.style.color = "lightgreen";
            ptag.innerText= "İş var"; 
            sekil.src = "booring.gif"
        }

    }
    

