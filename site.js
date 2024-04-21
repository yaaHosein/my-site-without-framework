const learnMoreBtn = document.querySelector('.learn-more-btn')
const contactMeBtn = document.querySelector('.contact-me-btn')
const text = document.querySelector('.text')
const text12 = document.querySelector('.text12')

learnMoreBtn.addEventListener('click', (e) => text.classList.toggle('text'))
contactMeBtn.addEventListener('click', (e) => text12.classList.toggle('text12'))
