document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('destinationsScroll');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    const scrollAmount = 400;

    if (scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        scrollRightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    let touchStart = 0;
    let touchEnd = 0;

    if (scrollContainer) {
        scrollContainer.addEventListener('touchstart', (e) => {
            touchStart = e.changedTouches[0].screenX;
        });
        scrollContainer.addEventListener('touchend', (e) => {
            touchEnd = e.changedTouches[0].screenX;
            if (touchStart > touchEnd) {
                scrollContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                scrollContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    }

    const bus = document.querySelector('.ri-bus-line');
    const wheelFront = document.querySelector('.wheel-front');
    const wheelBack = document.querySelector('.wheel-back');
    let position = 0;
    function animateBus() {
        position += 0.5;
        if (position > 10) position = 0;
        bus.style.transform = `translateX(${Math.sin(position * 0.3)}px)`;
        wheelFront.style.transform = `rotate(${position * 36}deg)`;
        wheelBack.style.transform = `rotate(${position * 36}deg)`;
        requestAnimationFrame(animateBus);
    }
    requestAnimationFrame(animateBus);

    // Валідація форми
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const from = document.getElementById('from').value;
            const to = document.getElementById('to').value;
            const date = document.getElementById('date').value;
            const passengers = document.getElementById('passengers').value;
            let isValid = true;
            let errorMessage = '';

            if (!from) {
                isValid = false;
                errorMessage += 'Введіть місто відправлення\n';
            }
            if (!to) {
                isValid = false;
                errorMessage += 'Оберіть країну призначення\n';
            }
            if (!date) {
                isValid = false;
                errorMessage += 'Оберіть дату поїздки\n';
            }
            if (!passengers || passengers < 1) {
                isValid = false;
                errorMessage += 'Вкажіть кількість пасажирів\n';
            }

            if (isValid) {
                // Перенаправлення на сторінку з результатами
                window.location.href = `/napryamky?from=${from}&to=${to}&date=${date}&passengers=${passengers}`;
            } else {
                alert('Будь ласка, заповніть всі поля:\n' + errorMessage);
            }
        });
    }
});
