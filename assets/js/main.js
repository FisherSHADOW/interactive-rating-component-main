let front=document.getElementById('cardsFront')
let back=document.getElementById('cardsBack')
let rateResult=document.getElementById('rateResult')
let frontSide= document.getElementById('front-side')
let backSide= document.getElementById('back-side')
let selectedId= 0

function resetSelection(){
    const ratings = document.querySelectorAll('.rate');
    ratings.forEach((rating) => {
      rating.classList.remove('selected');
    });
}
function selected1() {
    selectedId='1'
    let selection1 = document.getElementById('rate1')
    resetSelection()
    selection1.classList.toggle('selected')
}
function selected2() {
    selectedId='2'
    let selection2 = document.getElementById('rate2')
    resetSelection()
    selection2.classList.toggle('selected')
}
function selected3() {
    selectedId='3'
    let selection3 = document.getElementById('rate3')
    resetSelection()
    selection3.classList.toggle('selected') 
}
function selected4() {
    selectedId='4'
    let selection4 = document.getElementById('rate4')
    resetSelection()
    selection4.classList.toggle('selected') 
}
function selected5() {
    selectedId='5'
    let selection5 = document.getElementById('rate5')
    resetSelection()
    selection5.classList.toggle('selected') 
}
function submit() {
    if (selectedId==0) {
        alert('please select an score')
        
    }else{
    front.style.display='none'
    back.style.display='block'
    rateResult.innerText='You selected '+selectedId+' out of 5'
}
}