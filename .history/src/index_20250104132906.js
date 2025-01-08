fetch('https://swapi.py4e.com/api/people/1/')
  .then((response) => {
    // Проверяем, успешен ли запрос (статус 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Обрабатываем ответ как JSON
    return response.json();
  })
  .then((data) => {
    // Выводим данные в консоль
    console.log('Got Response:', data);
  })
  .catch((error) => {
    // Обрабатываем ошибки
    console.error('Fetch Error:', error);
  });