let firstBtn = document.getElementById("first-btn")
let secondBtn = document.getElementById("second-btn")
let unitEl = document.querySelectorAll(".unit-el")
let scoreEl = document.querySelectorAll(".score-el")
let gpaEl = document.getElementById("gpa-el")
let gpaArray = []
let gradeArray = []
let unitArray = []
let pointsArray = []
let grade 
let A = 5
let B = 4
let C = 3
let D = 2
let F = 0



 function calculategpa(){
     scoreEl.forEach(function(node){
        let score = +node.value
        if (score <= 44){
            grade = F
        } else if (score < 50 ){
            grade = D
        } else if(score < 60){
            grade = C
        } else if(score < 70){
            grade = B
        } else if(score < 101){
            grade = A
        } 
        gradeArray.push(grade)
     }
     )
     
    unitEl.forEach(function(node){
        let unit = +node.value
        unitArray.push(unit)
    }
    )    

 

//   as new values are inputed its being added to the total
    let totalGrade = 0
    for (let i = 0; i < gradeArray.length; i++) {
         totalGrade += gradeArray[i];
    }

    let totalUnits = 0
    for (let i = 0; i < unitArray.length; i++) {
        totalUnits += unitArray[i]; 
    }

    /*  both arrays are the same length then i can specify any in the for loop */
    // multiplying the value of both arrays
    let points = 0
    for (let i = 0; i < unitArray.length; i++) {
        points = gradeArray[i] * unitArray[i];
        pointsArray.push(points)
    } 

    let totalPoints = 0
    for (let i = 0; i < pointsArray.length; i++) {
        totalPoints += pointsArray[i]; 
    }

    console.log(totalPoints)
    console.log(totalUnits)

    let gpa = totalPoints/totalUnits
    return gpa 
}


firstBtn.addEventListener("click", function(){
    gpaEl.innerText = calculategpa()
})


//   function sum(array) {
//     let totalSum = 0
//     for (let index = 0; index < array.length; index++) {
//         totalSum += array[index];
//     }
//     return totalSum
//   }

//   totalGrade = sum(gradeArray)
//   totalUnits = sum(unitArray)