

 const turn = document.querySelector('img')

 turn.addEventListener('click', () => {

  if (turn.src.match("bulbon")) {
    turn.src = "pic_bulboff.gif";
  } else {
    turn.src = "pic_bulbon.gif";
  }
 
})



