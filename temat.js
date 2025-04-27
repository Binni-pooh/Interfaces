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
    task11_41: "Корова"
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
  