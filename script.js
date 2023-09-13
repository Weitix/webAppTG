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

// Обработчик для отправки формы
document.getElementById('crypto-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)
    
    // Получаем значения из полей формы
    const walletAddress = document.getElementById
