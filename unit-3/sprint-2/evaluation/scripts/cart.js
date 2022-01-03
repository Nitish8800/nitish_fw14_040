var cartItems = JSON.parse(localStorage.getItem("cartDatas")) || []; //   geting data from local storage

let tempDiv = document.querySelector("#container");

document.querySelector("#countValue").textContent =
    "CART : " + cartItems.length;

displayItem(cartItems);

var final_price = document.getElementById("tt");

// < -------------------------------------------------------------------------------->

function displayItem(cartItems) {
    cartItems.forEach(function (el, index) {
        let box = document.createElement("div"); // making box for every dish
        box.id = "boxes";

        var image = document.createElement("img");
        image.src = el.strCategoryThumb;

        var mealName = document.createElement("h3");
        mealName.textContent = el.strCategory;

        var cartButton = document.createElement("button");
        cartButton.textContent = "Add To Cart";
        cartButton.addEventListener("click", function () {
            addCart(el); // for send data to localStorage
        });
        cartButton.addEventListener("click", refresh);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteTask(index);
        });
        deleteButton.addEventListener("click", refresh);

        var priceData = document.createElement("h3");
        priceData.textContent = `Price: ₹. ${el.price} `;

        box.append(image, mealName, priceData, cartButton, deleteButton);

        tempDiv.append(box);
    });
}

// <      ADD to CArt in Local localStorage   function          >

function addCart(data) {
    cartItems.push(data);
    var count = JSON.parse(localStorage.getItem("cartDatas")) || [];

    document.getElementById("countValue").innerText = `COUNT : ${count.length + 1
        }`;

    localStorage.setItem("cartDatas", JSON.stringify(cartItems));
}
// < -------------------------------------------------------------------------------->

//   Price Key Value Added here

// < -------------------------------------------------------------------------------->

function deleteTask(index) {
    //  console.log(index)
    cartItems.splice(index, 1);
    localStorage.setItem("cartDatas", JSON.stringify(cartItems));
}

function refresh() {
    location.reload();
}

var total = cartItems.reduce(function (a, b) {
    return a + Number(b.price);
}, 0);

var fp = document.createElement("p");
fp.innerHTML = "<b>Total Price : ₹. </b>" + total;
final_price.append(fp);

function checkOut() {
    window.location.href = "checkout.html";
}