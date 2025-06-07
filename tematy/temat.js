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
    task31_10: "чувак",

    task41_1: "вешает лапшу на уши",
    task41_2: "на седьмом небе от счастья",
    task41_3: "бил баклуши",
    task41_4: "с горяча",
    task41_5: "как снег на голову",
    task41_6: "вел за нос",
    task41_7: "зуб даю",
    task41_8: "заруби на носу",
    task41_9: "как с гуся вода",
    task41_10: "держит камень за пазухой",

    task51_1: "дарит",
    task51_2: "смотрим",
    task51_3: "говорит",
    task51_4: "рисую",
    task51_5: "строишь",
    task51_6: "дарят",
    task51_7: "поёт",
    task51_8: "просыпаемся",

    task52_1: "дарю",
    task52_2: "говорит",
    task52_3: "смотрим",
    task52_4: "рисуешь",
    task52_5: "строят",
    task52_6: "поёт",
    task52_7: "спите",
    task52_8: "читает",

    task61_1: "считаю",
    task61_2: "рассчитываем",
    task61_3: "считается",
    task61_4: "считают",
    task61_5: "считал",
    task61_6: "рассчитывать",
    task61_7: "считается",
    task61_8: "считают",
    task61_9: "считать",
    task61_10: "считаются",
    task61_11: "считал",
    task61_12: "считали",
    task61_13: "считать",
    task61_14: "считаешься",
    task61_15: "считать",

    task71_1: "ложусь",
    task71_2: "клади",
    task71_3: "положиться",
    task71_4: "лежит",
    task71_5: "лёг",
    task71_6: "положить",
    task71_7: "класть",
    task71_8: "лежат",
    task71_9: "положиться",
    task71_10: "лёг",

    task81_1: "приходится",
    task81_2: "проходит",
    task81_3: "проходит",
    task81_4: "приходим",
    task81_5: "уходилось",
    task81_6: "прошёлся",
    task81_7: "приходится",
    task81_8: "приходится",
    task81_9: "прошло",
    task81_10: "уходим",

    task91_1: "Он уехал на выходные",
    task91_2: "В итоге мы решили не идти",
    task91_3: "Я подумал, что так лучше",
    task91_4: "Это не моё дело",
    task91_5: "Мы пошли домой",

    task101_1: "ведёт",
    task101_2: "повёл",
    task101_3: "поведение",
    task101_4: "водитель",
    task101_5: "проводник",
    task101_6: "заведение"

  };

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('go-home').addEventListener('click', () => {
        window.location.href = "../index.html";
    });
});

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

    if (correctCount > taskIds.length / 2) {
        // Показываем конфетти
        confetti({
            particleCount: 300,       // увеличить количество частиц (было 150)
            spread: 100,              // увеличить разлет частиц (было 70)
            origin: { y: 0.6 },
            scalar: 1.5,              // увеличить размер частиц (по умолчанию 1)
            ticks: 400                // увеличить время жизни частиц (по умолчанию ~200)
        });

    }

    showResultModal(`Prawidłowych odpowiedzi: ${correctCount} z ${taskIds.length}`);
}

// Функція показу модалки з результатом і автоматичним схованням через 10 секунд
function showResultModal(message) {
    const modal = document.querySelector('.result-modal');
    const resultContent = modal.querySelector('.result-content');

    if (!modal || !resultContent) return;

    // Встановлюємо текст результату
    resultContent.textContent = message;

    modal.classList.remove('hidden');  // показати модалку
    modal.style.opacity = '1';

    // Автоматично ховаємо модалку через 10 секунд
    setTimeout(() => {
        modal.style.opacity = '0';
        modal.classList.add('hidden');
        resultContent.textContent = ''; // очищаємо текст після сховання
    }, 10000);
}

// Закриття модалки по кнопці "×"
document.getElementById('result-close').addEventListener('click', () => {
    const modal = document.querySelector('.result-modal');
    const resultContent = modal.querySelector('.result-content');
    modal.classList.add('hidden');
    modal.style.opacity = '0';
    resultContent.textContent = '';
});

// Закриття модалки по кліку поза вмістом
document.querySelector('.result-modal').addEventListener('click', e => {
    if (e.target.classList.contains('result-modal')) {
        e.target.classList.add('hidden');
        e.target.style.opacity = '0';
        e.target.querySelector('.result-content').textContent = '';
    }
});

  const translations = document.querySelectorAll('.translation');
const words = document.querySelectorAll('.word ');
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
                draggedItem.style.margin = '0px'
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


