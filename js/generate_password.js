// Ждем полной загрузки DOM, чтобы скрипт начал работать
window.addEventListener("DOMContentLoaded", () => {
    // Создаём переменные для дальнейших вычислений
    let array = [];
    let ready_password = "";

    // Функция генерации пароля
    function generatePassword(arr) {
        // Объявляем пароль
        let password = "";
        
        // Пробиваем массив через цикл для записи пароля
        for (let i = 0; i < 10 + Math.floor(Math.random() * 20); i++) {
            password += arr[Math.floor(Math.random() * arr.length - 1)];
        }

        // Возвращаем переменную
        return password;
    }


    
    // Получаем элемент кнопки генерации пароля
    const genPass_btn = document.querySelector(".btn-1.genPass");
    // Получаем элемент поля ввода пароля
    const input_pass = document.getElementById("password");
    const input_pass_check = document.getElementById("password_check");

    // Добавляем обработчик событий "клик" для кнопки генерации пароля
    genPass_btn.addEventListener("click", () => {
        // Объявляем переменные с символами
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specials = "!\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~";
    
        // Записываем строки в массив, переводя их в массив
        array = [...letters.split(""), ...numbers.split(""), ...specials.split("")];
    
        // Генерируем пароль
        ready_password = generatePassword(array);
        // Выводим полученный результат в поле ввода пароля
        input_pass.value = ready_password;
        input_pass_check.value = ready_password;
    })
})