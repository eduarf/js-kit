const scrollProgress = document.getElementById("scroll-progress");

      function updateScrollProgress() {
        const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
      }

      window.addEventListener("scroll", updateScrollProgress);

      window.addEventListener("load", updateScrollProgress);





      // ******************* daha performanslı bir yöntem **************************************

// const scrollProgress = document.getElementById("scroll-progress");
// let animationFrameId;

// function updateScrollProgress() {
//   const scrollTop =
//     document.body.scrollTop || document.documentElement.scrollTop;
//   const height =
//     document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
// }

// function onScroll() {
//   if (!animationFrameId) {
//     animationFrameId = requestAnimationFrame(() => {
//       updateScrollProgress();
//       animationFrameId = null;
//     });
//   }
// }

// window.addEventListener("scroll", onScroll);

// // Sayfa yüklendiğinde de çağırarak başlangıçta doğru genişliği ayarlayın.
// window.addEventListener("load", updateScrollProgress);
