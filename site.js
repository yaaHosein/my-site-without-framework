const learnMoreBtn = document.querySelector('.learn-more-btn')
const contactMeBtn = document.querySelector('.contact-me-btn')
const text= document.querySelector('.text')
const text_ = document.querySelector('.text_')

learnMoreBtn.addEventListener('click',(e)=>text.classList.toggle('text'))
contactMeBtn.addEventListener('click', (e) => text_.classList.toggle('text_'))