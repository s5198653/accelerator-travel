const baseSuccessCallback = (event) => {
  event.preventDefault();
  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(
    document.querySelector('[data-form="send"] form')
  );

  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      document.body.innerHTML = `<pre>${data}</pre>`;
    })
    .catch(() => {
      document.body.innerHTML =
        'Не удалось отправить форму. Попробуйте ещё раз';
    });
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
