const learnMoreBtn = document.querySelector('.learn-more-btn')
const contactMeBtn = document.querySelector('.contact-me-btn')
const text11= document.querySelector('.text11')
const text12= document.querySelector('.text12')



learnMoreBtn.addEventListener('click',(e)=>text11.classList.toggle('text11'))
contactMeBtn.addEventListener('click', (e) => text12.classList.toggle('text12'))

let ss = learnMoreBtn.onclick
let bb = learnMoreBtn.onclick
// console.log(ss);

if (ss == true) { text11.classList.add('text11') }
// if (bb == true) { text11.classList.add('text11') }    