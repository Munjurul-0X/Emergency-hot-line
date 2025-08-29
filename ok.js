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

let alldata = []

function getid(id){

let element = document.getElementById(id)
   let nam = element.children[1].innerText
    
    let num = element.children[3].innerText
    
return data = {
      name : nam,
      number : num,
      date : new Date().toLocaleTimeString()
   }

}
let ids = ["One","Two"]
for(let one of ids){
    alldata.push(getid(one))
}


const calls = document.getElementsById("call-btn")
let coinNum =document.getElementById("coin").innerText
let btnid = allids(document.getElementById(id))
for(let call of calls){
   call.addEventListener("click",function(){
   alert("call jasse")
   coinNum = coinNum - 20
   document.getElementById("coin").innerText = coinNum
    
   let cart_container = document.getElementById("cart-container")
   for( let info of alldata){
      const div = document.createElement("div")
      div.innerHTML = ` 
      <div class="flex justify-between  items-center bg-[#f4f5f4] rounded-2xl p-6 mb-4">
                        <div><h1 class="font-bold">${info.name}</h1><p>${info.num}</p></div>
                       <p>${info.date}</p>
                    </div>`
       cart_container.appendChild(div)
   }

    })
}
    
   
     
    





