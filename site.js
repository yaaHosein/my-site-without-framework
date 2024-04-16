// const about = document.querySelector(".about");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");
// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });

const learnMoreBtn= document.querySelector('.leran-more-btn')
const text= document.querySelector('.text')

learnMoreBtn.addEventListener('click',(e)=>text.classList.toggle('text'))