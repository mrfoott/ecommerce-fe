$(document).ready(function () {
    // Get the initial quantity value
    var quantity = parseInt($("#quantityInput").val());

    // Increase quantity
    $("#increaseBtn").click(function () {
        quantity++;
        console.log(quantity);
        $("#quantityInput").val(quantity);
    });

    // Decrease quantity (minimum value is 1)
    $("#decreaseBtn").click(function () {
        if (quantity > 1) {
            quantity--;
            $("#quantityInput").val(quantity);
        }
    });
});

$(document).ready(function () {
    let scrollInterval;

    $('.prev-button').click(function () {
        let slider = $('.slider');
        let scrollAmount = slider.find('.product-card').first().outerWidth(); // Chiều rộng của sản phẩm
        let currentPosition = slider.scrollLeft();

        if (currentPosition === 0) {
            slider.animate({ scrollLeft: slider[0].scrollWidth - slider.outerWidth() }, 'slow');
        } else {
            slider.animate({ scrollLeft: '-=' + scrollAmount }, 'slow');
        }
    });

    $('.next-button').click(function () {
        let slider = $('.slider');
        let scrollAmount = slider.find('.product-card').first().outerWidth(); // Chiều rộng của sản phẩm
        let currentPosition = slider.scrollLeft();
        let totalWidth = slider[0].scrollWidth - slider.outerWidth();

        if (currentPosition >= totalWidth) {
            slider.animate({ scrollLeft: 0 }, 'slow');
        } else {
            slider.animate({ scrollLeft: '+=' + scrollAmount }, 'slow');
        }
    });

    function slideNext() {
        let slider = document.querySelector('.slider');
        let scrollAmount = slider.clientWidth / 4; // Kích thước cuộn 4 sản phẩm
        let currentPosition = slider.scrollLeft;

        currentPosition += scrollAmount;
        if (currentPosition >= slider.scrollWidth - slider.clientWidth) {
            currentPosition = 0; // Quay lại đầu danh sách nếu đang ở cuối
        }

        slider.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    }

    scrollInterval = setInterval(slideNext, 5000); // Tự động di chuyển sau mỗi 5 giây

    $('.slider').hover(function () {
        clearInterval(scrollInterval);
    }, function () {
        scrollInterval = setInterval(slideNext, 5000);
    });
});

$(document).ready(function () {
    let scrollInterval;

    $('.prev-button').click(function () {
        let slider = $('.slider-2');
        let scrollAmount = slider.find('.product-card').first().outerWidth(); // Chiều rộng của sản phẩm
        let currentPosition = slider.scrollLeft();

        if (currentPosition === 0) {
            slider.animate({ scrollLeft: slider[0].scrollWidth - slider.outerWidth() }, 'slow');
        } else {
            slider.animate({ scrollLeft: '-=' + scrollAmount }, 'slow');
        }
    });

    $('.next-button-2').click(function () {
        let slider = $('.slider-2');
        let scrollAmount = slider.find('.product-card').first().outerWidth(); // Chiều rộng của sản phẩm
        let currentPosition = slider.scrollLeft();
        let totalWidth = slider[0].scrollWidth - slider.outerWidth();

        if (currentPosition >= totalWidth) {
            slider.animate({ scrollLeft: 0 }, 'slow');
        } else {
            slider.animate({ scrollLeft: '+=' + scrollAmount }, 'slow');
        }
    });

    function slideNext() {
        let slider = document.querySelector('.slider-2');
        let scrollAmount = slider.clientWidth / 4; // Kích thước cuộn 4 sản phẩm
        let currentPosition = slider.scrollLeft;

        currentPosition += scrollAmount;
        if (currentPosition >= slider.scrollWidth - slider.clientWidth) {
            currentPosition = 0; // Quay lại đầu danh sách nếu đang ở cuối
        }

        slider.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    }

    scrollInterval = setInterval(slideNext, 5000); // Tự động di chuyển sau mỗi 5 giây

    $('.slider-2').hover(function () {
        clearInterval(scrollInterval);
    }, function () {
        scrollInterval = setInterval(slideNext, 5000);
    });
});

document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', function (event) {
        event.preventDefault();

        // Lấy URL từ thuộc tính data-url
        const link = this.getAttribute('data-url');

        // Chuyển hướng đến trang link
        window.location.href = link;
    });
});


