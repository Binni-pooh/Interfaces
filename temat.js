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
    task3_4: "Русский язык — один из старейших в Европе."
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
  