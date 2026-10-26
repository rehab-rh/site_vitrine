const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

const themeToggle = document.getElementById("theme-toggle");

function updateToggleLabel(theme) {
    if (themeToggle) {
        themeToggle.textContent = theme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";
    }
}

updateToggleLabel(document.documentElement.getAttribute("data-theme") || "light");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        updateToggleLabel(next);
    });
}
