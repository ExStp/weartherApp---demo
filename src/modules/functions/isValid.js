const regexp = /[\\(\_)\.!@"'\*%$;^\<>{}?&+=1234567890]/gm;

// Функция для валидации текста на недопустимые знаки
// Применяется в валидации инпута для запроса дыннх
function isValid(currentCity) {
    if (currentCity === undefined) return false;
    return !regexp.test(currentCity);
}

export default isValid;
