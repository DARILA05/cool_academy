// Ждем полной загрузки DOM, чтобы скрипт начал работать
window.addEventListener("DOMContentLoaded", () => {
    // Получаем кнопку для открытия панели курсов
    const btn_open_panel = document.getElementById("open_panel_courses");
    // Получаем элемент overlay (затемненный фон)
    const overlay = document.getElementById("overlay");

    // Добавляем обработчик событий "клик" для кнопки открытия панели курсов
    btn_open_panel.addEventListener("click", () => {
        // Добавляем класс 'open' к панели курсов, чтобы она стала видимой
        document.querySelector(".panel_courses").classList.add('open');
        // Блокируем прокрутку страницы при открытой панели курсов
        document.body.classList.add("not_scroll_courses");
        // Отображаем затемненный фон (overlay)
        overlay.classList.add('open-courses');
    });

    // Добавляем обработчик событий "клик" для overlay
    overlay.addEventListener("click", () => {
        // Убираем класс 'open' у панели курсов, чтобы скрыть её
        document.querySelector(".panel_courses").classList.remove('open');
        // Снимаем блокировку прокрутки страницы
        document.body.classList.remove("not_scroll_courses");
        // Скрываем затемненный фон (overlay)
        overlay.classList.remove('open-courses');
    });

    // Получаем кнопки "Купить курс" и "Бесплатный курс"
    const btn_buy_course = document.getElementById("buy");
    const btn_free_course = document.getElementById("free");

    // Добавляем обработчик событий "клик" для кнопки "Бесплатный курс"
    btn_free_course.addEventListener("click", () => {
        // Скрываем блок с покупкой курсов
        document.querySelector(".blocks-courses_buy").style.display = "none";
        // Показываем блок с бесплатными курсами
        document.querySelector(".blocks-courses_free").style.display = "grid";
        // Переключаем классы активности между кнопками
        btn_buy_course.classList.remove('active');
        btn_buy_course.classList.add('not-active');
        btn_free_course.classList.remove('not-active');
        btn_free_course.classList.add('active');
    });

    // Добавляем обработчик событий "клик" для кнопки "Купить курс"
    btn_buy_course.addEventListener("click", () => {
        // Скрываем блок с бесплатными курсами
        document.querySelector(".blocks-courses_free").style.display = "none";
        // Показываем блок с покупкой курсов
        document.querySelector(".blocks-courses_buy").style.display = "grid";
        // Переключаем классы активности между кнопками
        btn_buy_course.classList.remove('not-active');
        btn_buy_course.classList.add('active');
        btn_free_course.classList.remove('active');
        btn_free_course.classList.add('not-active');
    });
});
