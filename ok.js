//  increment heart number
const heartIcon = document.getElementsByClassName("heart-icon")  
 let convoheart = parseInt(document.getElementById("heart").innerText)
     //console.log(heartIcon)

     for(let icon of heartIcon){
        icon.addEventListener("click",function(){
           convoheart =convoheart+ 1
          document.getElementById("heart").innerText = convoheart 
        
     })
     }

   //   call functionality


