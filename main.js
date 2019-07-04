document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll("button");
  btns.forEach(btn => {
    btn.addEventListener("click", e => {
      console.log(e.target.id);
    });
  });
});
