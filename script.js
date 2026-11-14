
/* REPLAYABLE SCROLL REVEAL */

const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 2200);
});


/* INTERACTIVE CONTACT PAPER */

const paper = document.querySelector(".contact-paper");

if (paper) {
    paper.addEventListener("mousemove", (event) => {
        const rect = paper.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 14;
        const rotateX = (0.5 - y) * 14;

        paper.style.animation = "none";
        paper.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(-3deg)`;
    });

    paper.addEventListener("mouseleave", () => {
        paper.style.transform = "";
        paper.style.animation = "";
    });
}



/* INTERACTIVE METALLIC SCULPTURE */

const sculpture = document.querySelector(".about-art");
const sphere = document.querySelector(".art-core");
const rings = document.querySelectorAll(".art-orbit");

if (sculpture && sphere) {
    sculpture.addEventListener("mousemove", (event) => {
        const rect = sculpture.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 25;
        const rotateX = (0.5 - y) * 25;

        sphere.style.marginLeft = `${(x - 0.5) * 20}px`;
        sphere.style.marginTop = `${(y - 0.5) * 20}px`;

        rings.forEach((ring, index) => {
            ring.style.marginLeft = `${(x - 0.5) * (index + 1) * 12}px`;
            ring.style.marginTop = `${(y - 0.5) * (index + 1) * 12}px`;
        });
    });

    sculpture.addEventListener("mouseleave", () => {
        sphere.style.margin = "0";
        rings.forEach((ring) => {
            ring.style.margin = "0";
        });
    });
}


/* RESUME COMING SOON ALERT */

const resumeTriggers = document.querySelectorAll(".resume-trigger");

resumeTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Create a temporary toast notification
    let toast = document.querySelector(".resume-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "resume-toast";
      toast.innerText = "RESUME COMING SOON — CURRENTLY IN THE WORKS!";
      document.body.appendChild(toast);
    }

    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });
});


/* FORCE SCROLL TO TOP ON REFRESH */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  // Cleans up any trailing hash in the URL bar on load
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
});
