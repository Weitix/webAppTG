    
    
    let tg = window.Telegram.window;
    tg.expand();
    
    Telegram.WebApp.onEvent('gameEvent', function(data) {
      // Отправка данных на бота
      Telegram.WebApp.sendData(data);
    });

// Получаем ID пользователя из URL
let params = new URLSearchParams(window.location.search);
let userId = params.get('userid');
TelegramGameProxy,
// Отображаем ID пользователя на странице
console.log("User ID:", userId);
document.getElementById("userId").innerText = "User ID: " + userId;
    
var data = { score: 228, level: 5 };
Telegram.WebApp.sendData(data);

window.TelegramGameProxy_receiveEvent = receiveEvent;

  window.TelegramGameProxy = {
    initParams: initParams,
    receiveEvent: receiveEvent,
    onEvent: onEvent,
    shareScore: function () {
      postEvent('share_score', function (error) {
        if (error) {
          var shareScoreUrl = initParams.tgShareScoreUrl;
          if (shareScoreUrl) {
            openProtoUrl(shareScoreUrl);
          }
        }
      });
    }
  };

    const squares = [
      { title: 'Игра 1', image: 'image1.jpg' },
      { title: 'Игра 2', image: 'image2.jpg' },
      { title: 'Игра 3', image: 'image3.jpg' },
      { title: 'Игра 4', image: 'image4.jpg' },
    ];

    function createSquare(square) {
      const div = document.createElement('div');
      div.className = 'square';

      const img = document.createElement('img');
      img.src = square.image;
      img.alt = square.title;

      const title = document.createElement('h2');
      title.textContent = square.title;

      div.appendChild(img);
      div.appendChild(title);

      return div;
    }

    function renderSquares() {
      const container = document.getElementById('container');
      container.innerHTML = '';

      const searchInput = document.getElementById('searchInput');
      const searchText = searchInput.value.toLowerCase();

      const filteredSquares = squares.filter(square =>
        square.title.toLowerCase().includes(searchText)
      );

      let row;
      filteredSquares.forEach((square, index) => {
        if (index % 2 === 0) {
          row = document.createElement('div');
          row.className = 'row';
          container.appendChild(row);
        }

        const div = createSquare(square);
        row.appendChild(div);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', renderSquares);

      renderSquares();
    });

     document.addEventListener('click', function(event) {
  var targetElement = event.target; // Получаем элемент, по которому было произведено нажатие

  // Проверяем, является ли целевой элемент текстовым полем ввода
  var isInput = targetElement.tagName === 'INPUT' && targetElement.type === 'text';

  // Если нажатие было по другой части экрана и клавиатура открыта, скрываем клавиатуру
  if (!isInput && document.activeElement === targetElement) {
    targetElement.blur(); // Скрываем клавиатуру, убирая фокус с текстового поля ввода
  }
});
