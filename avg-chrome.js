
let price1 = 0
let price2 = 0
let av = 0
let q = 0
let E1 = document.getElementById("ent1")
let E2 = document.getElementById("ent2")
let Q1 = document.getElementById("qua1")
let Q2 = document.getElementById("qua2")
let Show = document.getElementById("shownum")

let calBtn = document.getElementById("cal-btn")
const Del = document.getElementById("delete-btn") 
// const saveaar1local = JSON.parse( localStorage.getItem("arr1") )
// console.log(saveaar1local)

calBtn.addEventListener("click", function() {
    
   price1 = (E1.value * Q1.value)
//    console.log(price1)
   price2 = (E2.value * Q2.value) 
//    console.log(price2)
  let fq1 = parseInt (Q1.value)
  let fq2 = parseInt (Q2.value)
  q = fq1 + fq2


//    console.log(q)
   av = ((price1 + price2) / q)

Show.textContent = "Your entry average is : " + av.toFixed(3)
})


Del.addEventListener("dblclick", function() {

   E1.value = ""
   E2.value = ""
   Q1.value = ""
   Q2.value = ""
Show.textContent = ""

})
