// Функція для додавання/видалення теми з улюблених
function toggleFavorite(btn, topicUrl) {
  // Перемикаємо клас 'active' для кнопки серця
  btn.classList.toggle("active");
  btn.textContent = btn.classList.contains("active") ? "❤️" : "🤍";  // Змінюємо іконку серця

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];  // Отримуємо список улюблених тем

  if (btn.classList.contains("active")) {
    if (!favorites.includes(topicUrl)) {
      favorites.push(topicUrl);  // Додаємо тему в список улюблених
      localStorage.setItem("favorites", JSON.stringify(favorites));  // Оновлюємо локальне сховище
    }
  } else {
    favorites = favorites.filter(item => item !== topicUrl);  // Видаляємо тему з улюблених
    localStorage.setItem("favorites", JSON.stringify(favorites));  // Оновлюємо локальне сховище
  }
}

// Відображення статусу теми в улюблених при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  // Отримуємо всі кнопки сердець на сторінці
  const favoriteBtns = document.querySelectorAll(".favorite-btn");
  
  favoriteBtns.forEach(btn => {
    const topicUrl = btn.getAttribute("onclick").match(/'([^']+)'/)[1];  // Отримуємо URL теми з атрибута onclick
    if (favorites.includes(topicUrl)) {
      btn.classList.add("active");
      btn.textContent = "❤️";  // Встановлюємо активне серце
    }

    // Додаємо обробник для кнопки серця
    btn.onclick = (event) => {
      toggleFavorite(btn, topicUrl);  // Викликаємо функцію для додавання/видалення з улюблених
      event.stopPropagation();  // Зупиняємо поширення події, щоб не спрацював клік на всю тему
    };
  });
});




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
  const links = document.querySelectorAll('.bottom-nav a');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    }
  });


  