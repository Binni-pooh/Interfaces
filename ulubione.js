// Функція для додавання/видалення теми з улюблених
function toggleFavorite(btn, topicUrl) {
    btn.classList.toggle("active");
    btn.textContent = btn.classList.contains("active") ? "❤️" : "🤍";
  
    // Отримуємо масив улюблених тем з локального сховища
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    // Якщо сердечко активне, додаємо тему в локальне сховище
    if (btn.classList.contains("active")) {
      if (!favorites.includes(topicUrl)) {
        favorites.push(topicUrl); // Додаємо тему
        localStorage.setItem("favorites", JSON.stringify(favorites)); // Оновлюємо локальне сховище
      }
    } else {
      // Якщо сердечко неактивне, видаляємо з улюблених
      favorites = favorites.filter(item => item !== topicUrl); // Видаляємо тему
      localStorage.setItem("favorites", JSON.stringify(favorites)); // Оновлюємо локальне сховище
    }
  }
  
  // Після завантаження сторінки
  document.addEventListener("DOMContentLoaded", () => {
    // Відображаємо улюблені теми
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const container = document.getElementById("favoritesContainer");
  
    favorites.forEach(url => {
      const item = document.createElement("div");
      item.className = "temat-kafel";
      item.textContent = url; // Замініть це на більш зручний заголовок
      item.onclick = () => location.href = url;
  
      // Створення кнопки для додавання в улюблені
      const favoriteBtn = document.createElement("button");
      favoriteBtn.className = "favorite-btn";
      favoriteBtn.textContent = "🤍"; // Початковий стан (неактивний)
      favoriteBtn.onclick = (e) => {
        e.stopPropagation(); // Запобігаємо спрацьовуванню click на самій темі
        toggleFavorite(favoriteBtn, url); // Викликаємо функцію додавання/видалення
      };
  
      // Якщо тема вже є в улюблених, ставимо сердечко активним
      if (favorites.includes(url)) {
        favoriteBtn.classList.add("active");
        favoriteBtn.textContent = "❤️";
      }
  
      item.appendChild(favoriteBtn);
      container.appendChild(item);
    });
  });
  