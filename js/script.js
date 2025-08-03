// Ejemplo: Simular cambios de precios (ficticios)
setInterval(() => {
    const prices = document.querySelectorAll('.asset span:last-child');
    prices.forEach(price => {
        const randomChange = (Math.random() * 10).toFixed(2);
        if (Math.random() > 0.5) {
            price.textContent = `$${randomChange} ▲`;
            price.className = 'price-up';
        } else {
            price.textContent = `$${randomChange} ▼`;
            price.className = 'price-down';
        }
    });
}, 2000);
