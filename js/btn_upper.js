// Ждем полной загрузки DOM, чтобы скрипт начал работать
window.addEventListener("DOMContentLoaded", () => {
    // Получаем элементы для управления: верхний блок и блок поддержки
    const upper = document.querySelector('.block-upper');
    const support = document.querySelector('.block-sup');

    // Добавляем обработчик событий на прокрутку окна
    window.addEventListener('scroll', () => {
        // Если текущая позиция прокрутки больше 100 пикселей, добавляем класс 'open'
        upper.classList.toggle('open', scrollY > 100);
        support.classList.toggle('open', scrollY > 100);
    });
});
