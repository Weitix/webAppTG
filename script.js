// Обработчики для кнопок выбора криптовалюты
document.getElementById('btc-button').addEventListener('click', function() {
    alert('Выбрана криптовалюта BTC');
});

document.getElementById('ltc-button').addEventListener('click', function() {
    alert('Выбрана криптовалюта LTC');
});

document.getElementById('dash-button').addEventListener('click', function() {
    alert('Выбрана криптовалюта DASH');
});

document.getElementById('usdt-button').addEventListener('click', function() {
    alert('Выбрана криптовалюта USDT');
});

// Обработчик для кнопки "Далее"
document.getElementById('next-button').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки

    // Получаем значения из полей формы
    const walletAddress = document.getElementById('wallet-address').value;
    const amount = document.getElementById('amount').value;

    // Переходим на следующую страницу (index1.html)
    window.location.href = 'index1.html';
});
