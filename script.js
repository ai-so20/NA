
const data = {
  cat:{image:"assets/cat.png", label:"CAT", ko:"고양이 타입", alt:"고양이 타입 AI 메이트"},
  dog:{image:"assets/dog.png", label:"DOG", ko:"강아지 타입", alt:"강아지 타입 AI 메이트"},
  rabbit:{image:"assets/rabbit.png", label:"RABBIT", ko:"토끼 타입", alt:"토끼 타입 AI 메이트"}
};

const buttons = document.querySelectorAll(".family-tabs button");
const mobile = document.querySelector(".family-mobile");
const image = document.getElementById("familyImage");
const label = document.getElementById("familyLabel");
const ko = document.getElementById("familyKo");

buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    const d = data[btn.dataset.family];
    buttons.forEach(b=>{
      const active = b===btn;
      b.classList.toggle("active",active);
      b.setAttribute("aria-selected",active?"true":"false");
    });
    mobile.classList.add("changing");
    setTimeout(()=>{
      image.src=d.image;
      image.alt=d.alt;
      label.textContent=d.label;
      ko.textContent=d.ko;
      mobile.classList.remove("changing");
    },140);
  });
});
