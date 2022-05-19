let counter2 = 0;
let min = 0;
let h = 0;
let p = document.querySelector('.counter2')
let c = document.querySelector('.reset')

 let set = setInterval( () => {  
counter2++
  if(counter2 >= 59){
      counter2 = 0;
      counter2++
      min++
  }

  if(min >= 59 || counter2 >= 59){
      h++
  }
  
 p.innerHTML = 'hours:' + ' ' + h + ' / ' + 'minutes:'+ ' ' + min + ' / ' + 'seconds:' +'  ' + counter2;
}, 1000)



c.addEventListener('click', () => {
    p.innerHTML = 0;
    for (let p = counter2; counter2 = 0; p++){
        p.innerHTML = counter2;
    }

    for (let p = min; min = 0; p++){
        p.innerHTML = min;
    }

    for (let p = h; h = 0; p++){
        p.innerHTML = h;
    }
    
    
})




