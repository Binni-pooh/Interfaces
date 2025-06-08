/**
 * Calculates the number of consecutive days since the first visit.
 * Stores the first visit date in localStorage as "firstDay" if not already set.
 *
 * @returns {number} The number of days since the first visit, including today.
 */
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

/**
 * Updates the HTML element with ID "daysCount" to display the user's streak (number of learning days).
 * Uses `getStreakDays()` to calculate the value.
 */
function initializeStreakDays() {
    // Ustawienie dni nauki (streak)
    const streakEl = document.getElementById("daysCount");
    if (streakEl) {
        streakEl.textContent = getStreakDays();
    }
}

initializeStreakDays();
