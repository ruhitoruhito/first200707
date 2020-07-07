'use strict'
{



const  oya = document.querySelector('.oya')
const oyaPos = oya.getBoundingClientRect();
console.log(oya.offsetWidth)
const bodyHeight = document.querySelector('body').offsetWidth

const images = [
  "01.png",
  "02.png",
  "03.png",
  "04.png",
]

const count = {
  once: true
}


document.addEventListener('mousemove',(e)=> {
  let timeoutId;
  let ballSize = 50 + Math.random()*150
  let y = 0;
  let x = 0;
  let startTime = Date.now()
  x = e.clientX - ballSize / 2;
  y = e.clientY - ballSize / 2;
  const image = images[Math.floor(Math.random() * 4)];
  function updateY(){
    const elapsedTime = ((Date.now() - startTime)/1000)
    
    const img = document.createElement('img')
    img.src = image
    const ball = document.createElement('span')
    ball.appendChild(img)
    ball.classList.add('ball');
    ball.style.width = ballSize + 'px'
    ball.style.height = ballSize + "px"
    oya.appendChild(ball);
  
    
    y += 4.9 ** elapsedTime
    ball.style.top =  y +  'px'
    ball.style.left = x +  'px'
  
    timeoutId = setTimeout(()=> {
      while(oya.firstChild){
        oya.removeChild(oya.firstChild);
      }
      updateY();      
      console.log(e.clientX)
    },1);
    if( y > bodyHeight){
      clearTimeout(timeoutId)
      
    }
  }
  updateY()
})


}
