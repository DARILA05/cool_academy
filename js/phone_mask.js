// Ждем полной загрузки DOM, чтобы скрипт начал работать
window.addEventListener("DOMContentLoaded", () => {
    // Получаем элемент ввода телефона по его ID
    const phone = document.getElementById("tel");
    
    // Создаем маску для ввода телефона с помощью IMask
    const mask = new IMask(phone, {
        // Указываем формат маски: +7(000)000-00-00
        mask: "+{7}(000)000-00-00",
    });
})