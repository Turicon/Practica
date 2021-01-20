
const  images = ['pic_bulboff.gif', 'pic_bulbon.gif']
const ptagi = document.querySelector('#ptag')
const sekill = document.querySelector('#sekil')

const Function1 = (e) => {
  ptagi.innerText =e.target.value.length;

if(e.target.value === "on"){
  sekill.src = images[1]
}
else if (e.target.value === "off") {
  
sekill.src = images[0]}
}

