const correctAnswers = {
    // Вправа 1
    task1_1: "русский",
    task1_2: "Российской",
    task1_3: "Русская",
    task1_4: "Российской",
    task1_5: "российском",
    task1_6: "российской",
    task1_7: "русский",
    task1_8: "российском",
  
    // Вправа 2
    task2_1: "русскую",
    task2_2: "Российской",
    task2_3: "русском",
    task2_4: "российском",
    task2_5: "российской",
    task2_6: "Российское",
  
    // Вправа 3
    task3_1: "В России много разных народов, но все они являются частью российской нации.",
    task3_2: "Он работает в российской компании.",
    task3_3: "Все граждане России имеют российские паспорта.",
    task3_4: "Русский язык — один из старейших в Европе.",

    task11_1: "Лис",
    task11_2: "Лев",
    task11_3: "Кот",
    task11_4: "Львица",
    task11_5: "Конь",
    task11_6: "Заячиха",
    task11_7: "Собака",
    task11_8: "Гусь",
    task11_9: "Гусёнок",
    task11_10: "Медведь",
    task11_11: "Петух",
    task11_12: "Селезень",
    task11_13: "Тигрица",
    task11_14: "Медведица",
    task11_15: "Коза",
    task11_16: "Лис",
    task11_17: "Кошка",
    task11_18: "Слониха",
    task11_19: "Волчица",
    task11_20: "Курица",
    task11_21: "Петух",
    task11_22: "Баран",
    task11_23: "Слон",
    task11_24: "Овца",
    task11_25: "Кенгуру",
    task11_26: "Конь",
    task11_27: "Петух",
    task11_28: "Коза",
    task11_29: "Самец рыбы",
    task11_30: "Лиса",
    task11_31: "Волк",
    task11_32: "Заячиха",
    task11_33: "Бык",
    task11_34: "Тигр",
    task11_35: "Кошки",
    task11_36: "Лошадь",
    task11_37: "Кенгуру",
    task11_38: "Рыба",
    task11_39: "Собака",
    task11_40: "Львица",
    task11_41: "Корова",

    task31_1: "тусовка",        // Відповідь до першого пропуску
    task31_2: "бабок",          // Відповідь до другого пропуску
    task31_3: "ладно",          // Відповідь до третього пропуску
    task31_4: "пофиг",          // Відповідь до четвертого пропуску
    task31_5: "отпад",          // Відповідь до п'ятого пропуску
    task31_6: "заморачивайся",  // Відповідь до шостого пропуску
    task31_7: "прикол",         // Відповідь до сьомого пропуску
    task31_8: "жрал",           // Відповідь до восьмого пропуску
    task31_9: "девчонка",       // Відповідь до дев'ятого пропуску
    task31_10: "чувак"   
  };
  
  function checkAnswers(taskIds) {
    let correctCount = 0;
  
    taskIds.forEach(taskId => {
      const inputField = document.getElementById(taskId);
      if (!inputField) return;
  
      const userAnswer = inputField.value.trim().toLowerCase();
      const correctAnswer = (correctAnswers[taskId] || "").trim().toLowerCase();
  
      inputField.classList.remove("correct", "incorrect");
  
      if (userAnswer === correctAnswer) {
        inputField.classList.add("correct");
        correctCount++;
      } else {
        inputField.classList.add("incorrect");
      }
    });
  
    alert(`Правильных ответов: ${correctCount} из ${taskIds.length}`);
  }
  const translations = document.querySelectorAll('.translation');
const words = document.querySelectorAll('.word');
let draggedItem = null;

// Коли починаємо перетягувати
translations.forEach(item => {
    item.addEventListener('dragstart', function (e) {
        draggedItem = item;
    });
});

// Коли перетягуємо над словом
words.forEach(word => {
    word.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    word.addEventListener('drop', function (e) {
        e.preventDefault();
        if (draggedItem) {
            // Перевірка чи правильно
            if (draggedItem.textContent === word.getAttribute('data-match')) {
                word.appendChild(draggedItem);
                draggedItem.setAttribute('draggable', 'false');
                draggedItem.style.backgroundColor = '#4ade80'; // Зелений колір якщо правильно
                checkWin();
            } else {
                draggedItem.style.backgroundColor = '#f87171'; // Червоний колір якщо неправильно
            }
        }
    });
});

function checkWin() {
    const matched = document.querySelectorAll('.word .translation').length;
    if (matched === 10) {
        document.getElementById('result').textContent = '🎉 Молодец! Все правильно!';
    }
}

  