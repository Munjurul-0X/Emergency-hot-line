//  increment heart number
const heartIcon = document.getElementsByClassName("heart-icon")  
 let convoheart = parseInt(document.getElementById("heart").innerText)

     for(let icon of heartIcon){
        icon.addEventListener("click",function(){
           convoheart =convoheart+ 1
          document.getElementById("heart").innerText = convoheart 
        
     })
     }

   //   call functionality
const calls = document.getElementsByClassName("call-btn")
let coinNum =parseInt(document.getElementById("coin").innerText)
 let cart_container = document.getElementById("cart-container")
for(let call of calls){
   call.addEventListener("click",function(){
   
    let grandparent = call.parentElement.parentElement; 
    let nam = grandparent.children[1].innerText;
    let num = grandparent.children[3].innerText;
    let time = new Date().toLocaleTimeString()
    coinNum = coinNum - 20
if(coinNum < 0){
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয় লাগবে")
   }
   
   else{
      alert(`calling ${nam}  ${num}...`)
        document.getElementById("coin").innerText = coinNum
      const div = document.createElement("div")
      div.innerHTML = ` 
      <div class="flex justify-between  items-center bg-[#f4f5f4] rounded-2xl p-6 mb-4">
                        <div><h1 class="font-bold">${nam}</h1><p>${num}</p></div>
                       <p>${time}</p>
                    </div>`
       cart_container.appendChild(div)
   }
   })
 
}
   //  clear funtionality
document.getElementById("clear").addEventListener("click",function(){
    cart_container.innerHTML = ""
})
    
//copy functionality

let copyCount = parseInt( document.getElementById("copy").innerText)
    
let allcopy = document.getElementsByClassName("copy-btn")
for(let one of allcopy){
   one.addEventListener("click",function(){
      copyCount = copyCount + 1
      let grandparent = one.parentElement.parentElement; 
      let num = grandparent.children[3].innerText;
       document.getElementById("copy").innerText = copyCount
      alert(` নম্বরটি কপি হয়েছে ${num}`)
      navigator.clipboard.writeText(num);
   })
}




