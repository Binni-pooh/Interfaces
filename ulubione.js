/**
 * Toggles a topic's favorite status: adds it to or removes it from localStorage.
 * Also updates the button's appearance (heart icon and "active" class).
 *
 * @param {HTMLElement} btn - The button element that was clicked.
 * @param {{url: string, title: string}} topic - The topic object to be toggled in favorites.
 */
function toggleFavorite(btn, topic) {
    btn.classList.toggle("active");
    btn.textContent = btn.classList.contains("active") ? "❤️" : "🤍";

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (btn.classList.contains("active")) {
        // Додаємо тему, якщо її немає
        if (!favorites.some(item => item.url === topic.url)) {
            favorites.push(topic);
        }
    } else {
        // Видаляємо тему
        favorites = favorites.filter(item => item.url !== topic.url);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

/**
 * Initializes all buttons with the class "favorite-btn" on the page.
 * Sets their state based on whether the topic is in localStorage favorites,
 * and attaches click events to toggle favorite status.
 */
function initializeFavoriteButtons() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Всі кнопки favorite-btn на сторінці
    const buttons = document.querySelectorAll('.favorite-btn');

    buttons.forEach(button => {
        // Очікуємо, що у кнопок є data-url і data-title
        const url = button.getAttribute('data-url');
        const title = button.getAttribute('data-title');

        if (!url || !title) return; // Якщо немає атрибутів - пропускаємо

        // Якщо тема в улюблених - позначаємо кнопку
        if (favorites.some(item => item.url === url)) {
            button.classList.add('active');
            button.textContent = "❤️";
        } else {
            button.classList.remove('active');
            button.textContent = "🤍";
        }

        // Прив'язуємо подію onclick (щоб оновити localStorage і UI)
        button.onclick = (e) => {
            e.stopPropagation();
            toggleFavorite(button, { url, title });
        };
    });
}

/**
 * Renders the list of favorite topics inside the element with ID "favoritesContainer".
 * Each topic includes a button to remove it from favorites, which also removes it from the DOM.
 */
function generateFavoriteThemes() {
    const container = document.getElementById("favoritesContainer");
    if (container) {
        // Виводимо список улюблених тем
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        favorites.forEach(topic => {
            const item = document.createElement("div");
            item.className = "temat-kafel";

            item.innerHTML = `<div onclick="location.href='${topic.url}'" class="temat-title">
                          <span class="emoji">📘</span> ${topic.title}
                        </div>`;

            const favoriteBtn = document.createElement("button");
            favoriteBtn.className = "favorite-btn active";
            favoriteBtn.textContent = "❤️";

            favoriteBtn.onclick = (e) => {
                e.stopPropagation();
                toggleFavorite(favoriteBtn, topic);
                item.remove();
            };

            item.appendChild(favoriteBtn);
            container.appendChild(item);
        });
    }
}

initializeFavoriteButtons();
generateFavoriteThemes()
