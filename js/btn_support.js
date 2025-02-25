// Ждем полной загрузки DOM, чтобы скрипт начал работать
window.addEventListener("DOMContentLoaded", () => {
    // Получаем элементы: кнопка поддержки и блок поддержки
    const btn_support = document.querySelector('.support');  // Кнопка для вызова блока
    const block_sup = document.querySelector('.block-sup');  // Сам блок поддержки

    // Добавляем обработчик события на клик по кнопке
    btn_support.addEventListener('click', () => {
        // Переключаем класс 'click' у блока поддержки
        // Это может быть использовано для открытия/закрытия блока или изменения его состояния
        block_sup.classList.toggle('click');
        // Переключаем класс 'active' на кнопке поддержки, чтобы изменить ее состояние
        btn_support.classList.toggle('active');
    });
});
