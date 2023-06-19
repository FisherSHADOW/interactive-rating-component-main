// let rating=0
// let siblings= document.getElementsByClassName('rate')
        
// function selected1() {
//     rating=1
//     let selection1=document.getElementById('rate1')
//     selection1.classList.toggle('selected')          
//     console.log(rating)
// }
// let selected2 = function(){
//     let selection2=document.getElementById('rate2')
//     selection2.classList.toggle('selected')       
// }
let frontSide= document.getElementById('front-side')
let backSide= document.getElementById('back-side')
let selectedId= null
console.log(buttons)
function resetSelection(){
    const ratings = document.querySelectorAll('.rate');
    ratings.forEach((rating) => {
      rating.classList.remove('selected');
    });
}
function selected1() {
    selectedId='rate1'
    let selection1 = document.getElementById('rate1')
    resetSelection()
    selection1.classList.toggle('selected')
}
function selected2() {
    selectedId='rate2'
    let selection2 = document.getElementById('rate2')
    resetSelection()
    selection2.classList.toggle('selected')
    
}
function selected3() {
    selectedId='rate3'
    let selection3 = document.getElementById('rate3')
    resetSelection()
    selection3.classList.toggle('selected') 
}
function selected4() {
    selectedId='rate4'
    let selection4 = document.getElementById('rate4')
    resetSelection()
    selection4.classList.toggle('selected') 
}
function selected5() {
    selectedId='rate5'
    let selection5 = document.getElementById('rate5')
    resetSelection()
    selection5.classList.toggle('selected') 
}
