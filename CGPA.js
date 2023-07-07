let firstBtn = document.getElementById("first-btn")
let secondBtn = document.getElementById("second-btn")
let unitEl = document.querySelectorAll("unit-el")
let scoreEl = document.querySelectorAll(".score-el")
let gpaEl = document.getElementById("gpa-el")
let gpaArray = []
let grade 
let A = 5
let B = 4
let C = 3
let D = 2
let F = 0



 firstBtn.addEventListener("click", function(){
 calculategpa()
 })

    function calculategpa(){
      
     scoreEl.forEach(function(node){
        gpaArray.push(+node.value)
     }
     )
     console.log(gpaArray)

     
      
     console.log(scoreEl.value)     
        if (scoreEl.value <= 44){
           grade = F
       } else if (scoreEl.value < 50 ){
           grade = D
       } else if(scoreEl.value < 60){
           grade = C
       } else if(scoreEl.value < 70){
           grade = B
       } else if(scoreEl.value < 101){
           grade = A
       } 
      
    
    

    


    /* let gpa = grade * unitEl.value
    gpaEl.textContent = gpa */
}