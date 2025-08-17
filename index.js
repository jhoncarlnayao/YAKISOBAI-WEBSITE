
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

    

