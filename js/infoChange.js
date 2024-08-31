function showTab(tabId, button) {
  // Скрыть все вкладки
  var tabs = document.getElementsByClassName("info-content");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tabs[i].classList.remove("left-top-rounded"); // Удаление предыдущего стиля
  }

  // Показать выбранную вкладку
  var selectedTab = document.getElementById(tabId);
  selectedTab.style.display = "block";

  // Удалить активный класс у всех кнопок
  var buttons = document.getElementsByClassName("info-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Добавить активный класс к нажатой кнопке
  button.classList.add("active");

  // Если выбрана вкладка "Как заказать", добавляем класс для скругления верхнего левого угла
  if (tabId === "order") {
    selectedTab.classList.add("left-top-rounded");
  }
}
