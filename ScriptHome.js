document.addEventListener('DOMContentLoaded', async () => {
  let form = new FormData()
  form.append('status', true)
  let link = await fetch('php.php', {
    method: "POST",
    body: form
  })

  let result = await link.json()
  console.log(result)
})
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});




let btnRigistr = document.getElementById('btnRigistr');
let dialog = document.getElementById('dialog')
var SVG = document.getElementsByClassName("close1")[0];
document.body.classList.remove('modal-open');

btnRigistr.addEventListener("click", ()=>{
  dialog.showModal()
  document.body.classList.add('modal-open');
})

SVG.addEventListener("click", () => {
  dialog.close() 
  document.body.classList.remove('modal-open');
})


document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    document.body.classList.remove('modal-open');
  }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const destination = document.querySelector(this.getAttribute('href'));
    if (destination) {
      destination.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


function validateForm() {

  let username = document.getElementById('username').value;
  
  let password = document.getElementById('Pass').value;

  let PassPovtornp = document.getElementById("PassPovtor").value;

  let Email = document.getElementById("Email")
  
  if (username === "" || password === "" || PassPovtornp === "" || Email === "") {
  
  alert('Пожалуйста, заполните все поля');
  
  return false;

  } else if (password == PassPovtornp){
    alert("Успешно!")
    dialog.close() 
    document.body.classList.remove('modal-open');
  } else {
    alert("Не совпадения праролей")
  }}


let SubmitReg = document.getElementById("SubmitReg")


SubmitReg.addEventListener("click", ()=>{
validateForm()

})



