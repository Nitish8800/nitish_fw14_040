function submit() {
    alert("Your order is accepted in 3 seconds");
    setTimeout(threeSeconds, 3000);
}

function threeSeconds() {
    alert("Your order is being cooked in 8 seconds");
    setTimeout(eightSeconds, 8000);
}
function eightSeconds() {
    alert("Your order is ready in 10 seconds");
    setTimeout(tenSeconds, 10000);
}
function tenSeconds() {
    alert("Order out for delivery in 12 seconds");
    setTimeout(twelve, 12000);
}
function twelve() {
    alert("Order delivered");
}