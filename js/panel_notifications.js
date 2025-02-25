// Ждем полной загрузки DOM, чтобы скрипт начал работать
window.addEventListener("DOMContentLoaded", () => {
    // Получаем все кнопки с классом "notification"
    const btn_notification = document.querySelectorAll(".notification");
    // Получаем элемент overlay (затемненный фон)
    const overlay = document.getElementById("overlay");

    // Добавляем обработчик событий "клик" для каждой кнопки с классом "notification"
    btn_notification.forEach(btn => {
        btn.addEventListener("click", () => {
            // Добавляем класс 'open' к панели уведомлений, чтобы она стала видимой
            document.querySelector("#notification-panel").classList.add('open');
            // Блокируем прокрутку страницы при открытой панели уведомлений
            document.body.classList.add("not_scroll_panel");
            // Отображаем затемненный фон (overlay)
            overlay.classList.add('open-panel');
        })
    })

    // Добавляем обработчик событий "клик" для overlay
    overlay.addEventListener("click", () => {
        // Убираем класс 'open' у панели уведомлений, чтобы скрыть её
        document.querySelector("#notification-panel").classList.remove('open');
        // Снимаем блокировку прокрутки страницы
        document.body.classList.remove("not_scroll_panel");
        // Скрываем затемненный фон (overlay)
        overlay.classList.remove('open-panel');
    })
})