"use strict";

const input = document.querySelector(".page-input");
const btn = document.querySelector(".page-btn");

btn.addEventListener("click", () => {
  if (input.value.toLowerCase().trim() === "лиза") {
    alert("Ура!!!Это правильный ответ!Поздравляю, ты большой молодец!!!!))🥰");
  } else if (input.value.toLowerCase().trim() === "мама") {
    alert("Правильно!!!Мама это святое!!!)))😃");
  } else {
    alert(
      "...Это не правильный ответ...Ты меня расстраиваешь..Попробуй еще!!!😠"
    );
  }
  input.value = "";
});
