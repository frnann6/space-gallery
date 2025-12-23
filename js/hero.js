// paragraf hero
const txt_paragraf =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus commodi eum doloribus, ab distinctio quos. Qui corrupti non eaque corporis reprehenderit ab tempora assumenda sunt veritatis quam, temporibus dignissimos soluta quia. Accusantium, inventore at neque molestias aspernatur blanditiis cumque";

const paragraf = (document.getElementById("p_hero").innerText = txt_paragraf);

// efek typing di hero section
const text = "Explore The Beauty of Space";
let index = 0;
let isDeleting = false;
const speed = 100;
const delayAfterTyping = 1500;

const element = document.querySelector(".type-text");

function typeEffect() {
  if (!isDeleting) {
    // ngetik
    element.innerHTML = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => (isDeleting = true), delayAfterTyping);
    }
  } else {
    // hapus
    element.innerHTML = text.substring(0, index - 1);
    index--;

    if (index === 1) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();
