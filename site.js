const learnMoreBtn = document.querySelector('.learn-more-btn')
const contactMeBtn = document.querySelector('.contact-me-btn')
const text= document.querySelector('.text')
const text12= document.querySelector('.text12')
const closee=document.querySelector('.close')

learnMoreBtn.addEventListener('click',(e)=>text.classList.toggle('text'))
contactMeBtn.addEventListener('click', (e) => text12.classList.toggle('text12'))
closee.addEventListener('click',(e)=>text.classList.add('text11'))

let ss = learnMoreBtn.onclick
let bb = learnMoreBtn.onclick
// console.log(ss);

// if (ss == true) { text11.classList.add('text11') }
// if (bb == true) { text11.classList.add('text11') }    