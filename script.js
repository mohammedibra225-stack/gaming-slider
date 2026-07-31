
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider     = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail  = document.querySelector(".slider .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");

thumbnail.appendChild(thumbnailItems[0]);

nextBtn.onclick = function () { moveSlider("next"); };
prevBtn.onclick = function () { moveSlider("prev"); };

function moveSlider(direction) {
  let sliderItems    = sliderList.querySelectorAll(".item");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      slider.classList.remove(direction === "next" ? "next" : "prev");
    },
    { once: true }
  );
}



document.addEventListener("DOMContentLoaded", () => {


  const revealEls = document.querySelectorAll(".scroll-reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealEls.forEach((el) => revealObserver.observe(el));



  const aboutParallax = document.getElementById("aboutParallax");

  if (aboutParallax) {
    window.addEventListener(
      "scroll",
      () => {
        const section  = aboutParallax.parentElement;
        const rect     = section.getBoundingClientRect();
        const inView   = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
          
          const offset = (rect.top / window.innerHeight) * 40; 
          aboutParallax.style.transform = `translateY(${offset}px)`;
        }
      },
      { passive: true }
    );
  }


  const statNums = document.querySelectorAll(".stat__num[data-target]");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target, parseInt(entry.target.dataset.target, 10));
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  statNums.forEach((el) => counterObserver.observe(el));

  function animateCounter(el, target) {
    const duration = 2000; // ms
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); 
      const current  = Math.floor(eased * target);

    
      el.textContent = current.toLocaleString("fr-FR");

      
      if (target === 98 && progress >= 1) el.textContent = "98%";

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

});
