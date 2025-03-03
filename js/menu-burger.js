// Ждем полной загрузки DOM, чтобы скрипт начал работать
window.addEventListener("DOMContentLoaded", () => {
    // Получаем кнопку "бургер-меню"
    const btn_burger = document.getElementById("menu-burger");

    // Добавляем обработчик событий "клик" для кнопки
    btn_burger.addEventListener("click", () => {
        // Переключаем класс 'open' у кнопки (меняет ее внешний вид, например, анимация на крестик)
        btn_burger.classList.toggle("open");
        // Переключаем класс 'open' у меню (открываем/закрываем бургер-меню)
        document.querySelector(".burger-menu").classList.toggle("open");
        // Блокируем/разблокируем прокрутку страницы при открытом бургер-меню
        document.body.classList.toggle("not_scroll_b-m");
    });
});
