document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. Auto Update Footer Year
    ========================== */
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    if (footer) {
      footer.textContent = `© ${year} Bhavya Sri Samboju | Student Portfolio`;
    }

    /* =========================
       2. Copy Email on Click
    ========================== */
    const emailLink = document.querySelector(".links a");
    if (emailLink) {
      emailLink.addEventListener("click", function (e) {
        e.preventDefault();
        navigator.clipboard.writeText(emailLink.textContent);
        alert("Email copied!");
      });
    }

    /* =========================
       3. Dark Mode Toggle
    ========================== */
    const darkBtn = document.createElement("button");
    darkBtn.textContent = "🌙";
    darkBtn.style.position = "fixed";
    darkBtn.style.bottom = "20px";
    darkBtn.style.right = "20px";
    darkBtn.style.border = "none";
    darkBtn.style.borderRadius = "50%";
    darkBtn.style.padding = "10px";
    darkBtn.style.cursor = "pointer";

    document.body.appendChild(darkBtn);

    darkBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });

    /* =========================
       4. Page Load Fade-In
    ========================== */
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s";
    document.body.style.opacity = 1;

    /* =========================
       5. Scroll-to-Top Button
    ========================== */
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "⬆";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "70px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.display = "none";
    scrollBtn.style.padding = "10px";
    scrollBtn.style.border = "none";
    scrollBtn.style.cursor = "pointer";

    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", function () {
      scrollBtn.style.display =
        window.scrollY > 200 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* =========================
       6. Skills Hover Effect
    ========================== */
    document.querySelectorAll(".skills span").forEach(skill => {
      skill.addEventListener("mouseover", () => {
        skill.style.background = "#2563eb";
        skill.style.color = "#fff";
      });

      skill.addEventListener("mouseout", () => {
        skill.style.background = "#eaf0ff";
        skill.style.color = "#1e40af";
      });
    });

  });

