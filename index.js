
    window.addEventListener("DOMContentLoaded", () => {
      const page = document.getElementById("pageContent");
      const header = document.getElementById("mainHeader");
      const navLinks = document.getElementById("navLinks");
      const section2 = document.getElementById("section2");
      const main = document.querySelector("main");

      requestAnimationFrame(() => {
        page.classList.add("opacity-100");
      });

      const handleScroll = () => {
        const rect = section2.getBoundingClientRect();

        // If Section 2 is visible
        if (rect.top <= window.innerHeight * 0.5) {
          header.classList.add("bg-white", "shadow", "text-gray-900");
          header.classList.remove("text-white");

          navLinks.classList.remove("text-white");
          navLinks.classList.add("text-gray-900");
        } else {
          header.classList.remove("bg-white", "shadow", "text-gray-900");
          header.classList.add("text-white");

          navLinks.classList.remove("text-gray-900");
          navLinks.classList.add("text-white");
        }
      };

      main.addEventListener("scroll", handleScroll);
      handleScroll(); // Run once on load
    });

    document.addEventListener("DOMContentLoaded", () => {
        document.body.style.cursor = "url('/assets/custom_cursor.png'), auto";
         document.body.style.zoom = "1.0";
    });

const playNowBtn = document.getElementById("playNowBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const copyBtn = document.getElementById("copyBtn");
const serverIP = document.getElementById("serverIP");
const toast = document.getElementById("toast");

// Open modal and auto-copy IP
playNowBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  navigator.clipboard.writeText(serverIP.value).then(() => {
    console.log("IP copied automatically!");
  });
});

// Close modal via close button
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal by clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Copy button functionality with toast
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(serverIP.value).then(() => {
    // Show Preline Toast
    toast.classList.remove("hidden");
    toast.classList.add("animate-fadeInDown");

    // Auto hide after 3s
    setTimeout(() => {
      toast.classList.add("hidden");
      toast.classList.remove("animate-fadeInDown");
    }, 3000);
  });
});


// !! OFF CANVAS JS
function openOffCanvas(feature) {
    document.getElementById("offCanvas").classList.remove("translate-x-full");
    document.getElementById("overlay").classList.remove("hidden");

    // Add dynamic title and description
    document.getElementById("offCanvasTitle").innerText = feature;
    document.getElementById("offCanvasContent").innerText =
      "Here you can add more detailed information about " + feature + ".";
  }

  function closeOffCanvas() {
    document.getElementById("offCanvas").classList.add("translate-x-full");
    document.getElementById("overlay").classList.add("hidden");
  }
 const modal2 = document.getElementById("rulesModal");
  const openBtn = document.getElementById("viewRulesBtn");
  const closeBtns = [document.getElementById("closeModal"), document.getElementById("closeModalBtn")];

  openBtn.addEventListener("click", () => {
    modal2.classList.remove("hidden");
    modal2.classList.add("flex");
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal2.classList.add("hidden");
      momodal2dal.classList.remove("flex");
    });
  });

  // Close on background click
  modal2.addEventListener("click", (e) => {
    if (e.target === modal2) {
      modal2.classList.add("hidden");
      modal2.classList.remove("flex");
    }
  });