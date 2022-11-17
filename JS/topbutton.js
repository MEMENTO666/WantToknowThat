const dm = document.documentElement;
const TBTN = document.querySelector(".topbutton");

const documentHeight = dm.scrollHeight;

window.addEventListener("wheel", () => {
  let scrollToTop = dm.scrollTop;

  if (documentHeight !== 0) {
    const actionHeight = documentHeight / 10;

    if (scrollToTop > actionHeight) {
      TBTN.style.display = "flex";
    } else {
      TBTN.style.display = "none";
    }
  }
});

TBTN.addEventListener("click", (e) => {
  e.preventDefault();
  scrollUp();
  TBTN.style.display = "none";
});

function scrollUp() {
  let upper = setInterval(function () {
    if (dm.scrollTop !== 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(upper);
    }
  }, 15);
}
