function toggleFavorite(btn) {
    btn.classList.toggle("active");
    btn.textContent = btn.classList.contains("active") ? "❤️" : "🤍";
  }
  
  function updateProgress() {
    const total = 7; // całkowita liczba tematów (możesz to dynamicznie zmieniać)
    const learned = 2; // liczba zakończonych tematów (też możesz zrobić dynamicznie)
    const percent = (learned / total) * 100;
    const bar = document.getElementById("progressFill");
    if (bar) bar.style.width = percent + "%";
  }
  
  function getStreakDays() {
    let firstDay = localStorage.getItem("firstDay");
    if (!firstDay) {
      const today = new Date().toISOString().split("T")[0];
      localStorage.setItem("firstDay", today);
      return 1;
    }
    const today = new Date();
    const start = new Date(firstDay);
    return Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Wyświetlanie e-maila
    const emailEl = document.getElementById("userEmail") || document.getElementById("profileEmail");
    if (emailEl) {
      emailEl.textContent = localStorage.getItem("userEmail");
    }
  
    // Ustawienie dni nauki (streak)
    const streakEl = document.getElementById("daysCount");
    if (streakEl) {
      streakEl.textContent = getStreakDays();
    }
  
    // Ustawienie paska postępu
    updateProgress();
  });
  