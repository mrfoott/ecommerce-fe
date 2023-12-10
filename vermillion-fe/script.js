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

