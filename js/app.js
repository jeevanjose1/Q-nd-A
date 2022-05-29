const qs = document.querySelectorAll(".q");
const btn = document.querySelectorAll(".btn");

btn.forEach((e) => {
  e.addEventListener("click", () => {
    const bb = e.closest("#qsa");
    qs.forEach(function (i) {
      if (bb !== i) {
        i.classList.remove("heigh");
      }
    });

    bb.classList.toggle("heigh");
  });
});

// const qs = document.querySelectorAll(".q");
// qs.forEach(function (q) {
//   const btn = q.querySelector(".btn");
//   btn.addEventListener("click", function () {
//     qs.forEach(function (i) {
//       if (q !== i) {
//         i.classList.remove("heigh");
//       }
//     });
//     q.classList.toggle("heigh");
//   });
// });
