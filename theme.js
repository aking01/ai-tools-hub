
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");
    const label = document.getElementById("theme-label");

    if (!button) return;

    let theme = localStorage.getItem("aiTheme") || "dark";

    function applyTheme() {
        document.documentElement.setAttribute("data-theme", theme);

        if (label) {
            label.textContent =
                theme === "dark" ? "Дневной режим" : "Ночной режим";
        }
    }

    applyTheme();

    button.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";

        localStorage.setItem("aiTheme", theme);
        applyTheme();
    });
});
